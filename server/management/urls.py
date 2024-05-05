from django.urls import path, include
from rest_framework import routers
from .views import (
    RoleViewSet,
    UserViewSet,
    CategoryViewSet,
    ProductViewSet,
    GaleryViewSet,
    FeedBackViewSet,
    ReviewViewSet,
)

router = routers.DefaultRouter()
router.register('roles', RoleViewSet)
router.register('users', UserViewSet)
router.register('categories', CategoryViewSet)
router.register('products', ProductViewSet)
router.register('galeries', GaleryViewSet)
router.register('feedbacks', FeedBackViewSet)
router.register('review', ReviewViewSet)
urlpatterns = [
    path('', include(router.urls)),
]