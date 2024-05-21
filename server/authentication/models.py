from django.db import models
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractUser, PermissionsMixin

class AppUserManager(BaseUserManager):
	def create_user(self, username, email, password=None):
		if not username:
			raise ValueError('An username is required')
		if not email:
			raise ValueError('An email is required.')
		if not password:
			raise ValueError('A password is required.')
		email = self.normalize_email(email)
		user = self.model(username=username, email=email)
		user.set_password(password)
		user.save(using=self._db)
		return user
	def create_superuser(self, username, email, password=None, **extra_fields):
		if not username:
			raise ValueError('An username is required')
		if not email:
			raise ValueError('An email is required.')
		if not password:
			raise ValueError('A password is required.')
		user = self.create_user(username, email, password, **extra_fields)
		user.is_superuser = True
		user.save(using=self._db)
		return user


class AppUser(AbstractUser, PermissionsMixin):
	user_id = models.AutoField(primary_key=True)
	email = models.EmailField(max_length=50, unique=True)
	username = models.CharField(max_length=50)
	USERNAME_FIELD = 'email'
	REQUIRED_FIELDS = ['username']
	objects = AppUserManager()
	def __str__(self):
		return self.username
	@property
	def is_staff(self):
		return self.is_superuser
