from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http import JsonResponse
from rest_framework import status
from rest_framework import viewsets
from rest_framework.decorators import action

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

@csrf_exempt
def role_list(request):
    if request.method == 'GET':
        roles = Role.objects.all()
        serializer = RoleSerializer(roles, many=True)
        return JsonResponse(serializer.data, safe=False)

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
        serializer = RoleSerializer(role)
        return JsonResponse(serializer.data)

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
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


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