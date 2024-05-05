from django.db import models
from django.db.models import Avg
from django.utils import timezone
import datetime
import os

class Role(models.Model):
    name = models.CharField(max_length=20)

class User(models.Model):
    fullname = models.CharField(max_length=50)
    username = models.CharField(max_length=20)
    email = models.CharField(max_length=150)
    phone_number = models.CharField(max_length=20)
    address = models.CharField(max_length=200)
    password = models.CharField(max_length=32)
    role = models.ForeignKey(Role, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted = models.IntegerField()

class Category(models.Model):
    name = models.CharField(max_length=100)
    
class Product(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    title = models.CharField(max_length=500)
    price = models.IntegerField()
    discount = models.IntegerField()
    discount_rate = models.IntegerField()
    thumbnail = models.CharField(max_length=500)
    description = models.TextField()
    url = models.CharField(max_length=200)
    timestamp =  models.CharField(max_length=200)
    #updated_at = models.DateTimeField(auto_now=True)   
    #deleted = models.IntegerField()
    #rank_id = models.IntegerField()

class Galery(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    thumbnail = models.CharField(max_length=500)

class FeedBack(models.Model):
    firstname = models.CharField(max_length=30)
    lastname = models.CharField(max_length=30)
    email = models.CharField(max_length=250)
    phone_number = models.CharField(max_length=20)
    subject_name = models.CharField(max_length=350)
    note = models.CharField(max_length=1000)
    status = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    rating = models.IntegerField()
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Rank(models.Model):
    product = models.OneToOneField(Product, on_delete=models.CASCADE)
    average_rating = models.FloatField(default=0)
    feedback_count = models.IntegerField(default=0)