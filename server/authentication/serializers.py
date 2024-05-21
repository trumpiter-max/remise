from jsonschema import ValidationError
from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate
from .models import AppUser

UserModel = get_user_model()

class UserRegisterSerializer(serializers.Serializer):
    username = serializers.CharField()
    email = serializers.EmailField()
    password = serializers.CharField()

    def create(self, validated_data):
        username = validated_data.get('username')
        email = validated_data.get('email')
        password = validated_data.get('password')
        
        # check
        if not username:
            raise serializers.ValidationError('An username is required')
        if not email:
            raise serializers.ValidationError('An email is required.')
        if not password:
            raise serializers.ValidationError('A password is required.')

        
        user = AppUser.objects.create_user(username=username, email=email, password=password)
        return user

class UserLoginSerializer(serializers.Serializer):
	email = serializers.EmailField()
	password = serializers.CharField()
	##
	def check_user(self, clean_data):
		user = authenticate(username=clean_data['email'], password=clean_data['password'])
		if not user:
			raise ValidationError('user not found')
		return user

class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = UserModel
		fields = ('email', 'username')