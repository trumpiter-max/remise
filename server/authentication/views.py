from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.permissions import IsAuthenticated

class LoginView(APIView):
    def login_user(request):
        if request.method == "POST":
            username = request.data.get('username')
            password = request.data.get('password')
            
            user = authenticate(username=username, password=password)
            
            if user is not None:
                refresh = RefreshToken.for_user(user)
                return JsonResponse({
                    'refresh': str(refresh),
                    'access': str(refresh.access_token)
                })
            else:
                return Response({"Error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)


class RegisterView(APIView):
    def user_register(request):
        if request.method == "POST":
            username = request.data.get('username')
            email = request.data.get('email')
            password = request.data.get('password')
            re_password = request.data.get('re_password')

            if password != re_password:
                return Response({"Error": "Passwords do not match"}, status=status.HTTP_400_BAD_REQUEST)
            
            if User.objects.filter(username=username).exists():
                return Response({"Error": "Username already exists"}, status=status.HTTP_400_BAD_REQUEST)
            elif User.objects.filter(email=email).exists():
                return Response({"Error": "Email already exists"}, status=status.HTTP_400_BAD_REQUEST)
            else:
                user = User.objects.create_user(username=username, email=email, password=password)
                user.save()
                
                refresh = RefreshToken.for_user(user)
                return JsonResponse({
                    'refresh': str(refresh),
                    'access': str(refresh.access_token)
                })
            
class LogoutView(APIView):
    def logout_user(request):
        if request.method == "POST":
            request.user.auth_token.delete()
            return Response({"Success": "User logged out"}, status=status.HTTP_200_OK)
        
class RetrictedView(APIView):
    permission_classes = [IsAuthenticated]
    def restricted(self, request, format=None):
        return JsonResponse({"response": "Please login with your authentication"}, status=status.HTTP_200_OK)