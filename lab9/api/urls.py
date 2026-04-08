from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, ProductViewSet
from api.views.generics import (
    ProductListAPIView,
    ProductDetailAPIView,
    CategoryListAPIView,
    CategoryDetailAPIView,
    CategoryProductsAPIView,
)
from django.urls import path

router = DefaultRouter()
router.register('categories', CategoryViewSet)
router.register('products', ProductViewSet)

urlpatterns = router.urls + [
    path('v2/products/', ProductListAPIView.as_view()),
    path('v2/products/<int:product_id>/', ProductDetailAPIView.as_view()),
    path('v2/categories/', CategoryListAPIView.as_view()),
    path('v2/categories/<int:category_id>/', CategoryDetailAPIView.as_view()),
    path('v2/categories/<int:category_id>/products/', CategoryProductsAPIView.as_view()),
]