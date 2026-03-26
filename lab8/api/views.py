from django.http import JsonResponse, Http404
from .models import Product, Category


def product_to_dict(product):
    return {
        'id': product.id,
        'name': product.name,
        'price': product.price,
        'description': product.description,
        'count': product.count,
        'is_active': product.is_active,
        'category_id': product.category_id,
        'image': product.image,
        'link': product.link,
        'rating': product.rating,
    }


def category_to_dict(category):
    return {
        'id': category.id,
        'name': category.name,
    }


def products_list(request):
    products = Product.objects.all()
    return JsonResponse([product_to_dict(p) for p in products], safe=False)


def product_detail(request, id):
    try:
        product = Product.objects.get(pk=id)
    except Product.DoesNotExist:
        raise Http404('Product not found')
    return JsonResponse(product_to_dict(product))


def categories_list(request):
    categories = Category.objects.all()
    return JsonResponse([category_to_dict(c) for c in categories], safe=False)


def category_detail(request, id):
    try:
        category = Category.objects.get(pk=id)
    except Category.DoesNotExist:
        raise Http404('Category not found')
    return JsonResponse(category_to_dict(category))


def category_products(request, id):
    try:
        category = Category.objects.get(pk=id)
    except Category.DoesNotExist:
        raise Http404('Category not found')
    products = Product.objects.filter(category=category)
    return JsonResponse([product_to_dict(p) for p in products], safe=False)