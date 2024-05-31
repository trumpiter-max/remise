from django.shortcuts import render

# Create your views here.
# cart/views.
from django.conf import settings
from django.contrib.auth import get_user_model
from rest_framework import permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
from .models import Cart, CartItem
from .serializers import AddToCartSerializer, CartItemSerializer
from management.models import Product


class AddToCartView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = AddToCartSerializer(data=request.data)
        if serializer.is_valid():
            product_id = serializer.validated_data['product_id']
            quantity = serializer.validated_data['quantity']
            
            product = get_object_or_404(Product, id=product_id)

            # Verify that request.user is an instance of the correct user model
            User = get_user_model()
            if not isinstance(request.user, User):
                return Response({'error': 'User not authenticated or invalid user instance'}, status=status.HTTP_400_BAD_REQUEST)

            # Get or create cart for the user
            cart, created = Cart.objects.get_or_create(user=request.user)

            # Check if the product is already in the cart
            cart_item, created = CartItem.objects.get_or_create(cart=cart, product=product)
            if not created:
                cart_item.quantity += quantity
            else:
                cart_item.quantity = quantity

            cart_item.save()
            
            return Response({'message': 'Product added to cart successfully'}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CartView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        cart = get_object_or_404(Cart, user=request.user)
        cart_items = CartItem.objects.filter(cart=cart)
        serializer = CartItemSerializer(cart_items, many=True)
        return Response(serializer.data)
