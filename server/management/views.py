from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http import JsonResponse
from rest_framework import status
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework import permissions
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from .utils.ranking import rank_brand
from django.db.models import Count
from rest_framework.exceptions import ValidationError
import threading
import asyncio

# For caching
from django.core.cache import cache
from django.conf import settings
from django.core.cache.backends.base import DEFAULT_TIMEOUT

from .models import (
    Role,
    User,
    Category,
    Product,
    Galery,
    FeedBack,
    Review,
)
from .serializers import (
    RoleSerializer,
    UserSerializer,
    CategorySerializer,
    ProductSerializer,
    GalerySerializer,
    FeedBackSerializer,
    ReviewSerializer,
)

CACHE_TTL = getattr(settings, 'CACHE_TTL', DEFAULT_TIMEOUT)

def retrieve_data(key):
    if key in cache:
        data = cache.get(key)
        return data
    return False

@csrf_exempt
def role_list(request):
    if request.method == 'GET':
        data = retrieve_data('role_list')
        if data == False:
            roles = Role.objects.all()
            serializer = RoleSerializer(roles, many=True)
            cache.set('role_list', serializer.data, timeout=CACHE_TTL)
            return JsonResponse(serializer.data, safe=False)
        else:
            return JsonResponse(data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = RoleSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

@csrf_exempt
def role_detail(request, pk):
    try:
        role = Role.objects.get(pk=pk)
    except Role.DoesNotExist:
        return JsonResponse({'error': 'Role does not exist'}, status=404)

    if request.method == 'GET':
        data = retrieve_data('role_detail')
        if data == False:
            serializer = RoleSerializer(role)
            cache.set('role_detail', serializer.data, timeout=CACHE_TTL)
            return JsonResponse(serializer.data)
        else:
            return JsonResponse(data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = RoleSerializer(role, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        role.delete()
        return JsonResponse({'message': 'Role deleted successfully'}, status=204)

class RoleViewSet(viewsets.ModelViewSet):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    


class ProductViewSet(viewsets.ModelViewSet):
    data = retrieve_data('product')
    if data == False:
        queryset = Product.objects.all()
    else:
        queryset = data
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
        
    def get_queryset(self):
        smart = self.request.query_params.get('smart', 'false').lower() == 'true'
        category = self.request.query_params.get('category')
        keyword = self.request.query_params.get('keyword')
        source = self.request.query_params.get('source')
        discount_rate = self.request.query_params.get('discount_rate', 'true').lower() == 'true'
        asc = self.request.query_params.get('asc', 'true').lower() == 'true'
        feature = self.request.query_params.get('feature')
        brand = self.request.query_params.get('brand')
        order = '' if asc else '-'

        location = "Viet Nam"
        category_list = ["smart phone", 
                        "book",
                        "houseware",
                        "accessory",
                        "home electric",
                        "cosmetics",
                        "sportswear",
                        "media",
                        "women clothes",
                        "convenient store product",
                        "men clothes",
                        "laptop accessories",
                        "men shoes",
                        ]

        try:
            queryset = Product.objects.all()

            if smart:
                products_in_category = queryset.filter(category=category)
                brands_with_count = products_in_category.values("brand").annotate(count=Count("brand"))
                brand_list = [item["brand"] for item in brands_with_count]
                choice = int(category)
                result = asyncio.run(rank_brand(category_list[choice-1], list(brand_list), location, feature))

            if category:
                    choice = int(category)
                    queryset = queryset.filter(category=choice)

            if keyword:
                queryset = queryset.filter(title__icontains=keyword)

            if source:
                queryset = queryset.filter(url__icontains=source)

            if brand:
                queryset = queryset.filter(brand__icontains=brand)

            queryset = queryset.order_by(f'{order}title', f'{order}discount', f'{order}discount_rate')
            
        except Exception as e:
            raise ValidationError({"error": ["You don't have enough permission or something causes trouble"]})

        return queryset


class GaleryViewSet(viewsets.ModelViewSet):
    queryset = Galery.objects.all()
    serializer_class = GalerySerializer


class FeedBackViewSet(viewsets.ModelViewSet):
    queryset = FeedBack.objects.all()
    serializer_class = FeedBackSerializer

    @action(detail=True, methods=['post'])
    def add_review(self, request, pk=None):
        feedback = self.get_object()
        data = request.data
        data['feedback'] = feedback.id
        review_serializer = ReviewSerializer(data=data)

        if review_serializer.is_valid():
            review = review_serializer.save()
            feedback_serializer = self.get_serializer(feedback)
            return Response(feedback_serializer.data)

        return Response(review_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

    def create(self, request, *args, **kwargs):
        review_serializer = self.get_serializer(data=request.data)
        if review_serializer.is_valid():
            review = review_serializer.save()
            return Response(review_serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(review_serializer.errors, status=status.HTTP_400_BAD_REQUEST)