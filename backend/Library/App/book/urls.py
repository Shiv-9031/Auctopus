from django.urls import path
from .views import CategoryList, OrderList, BookList

urlpatterns = [
    path('category/', CategoryList.as_view(), name="CategoryList"),
    path('register/', BookList.as_view(), name="CategoryList"),
    path('order/', OrderList.as_view(), name="CategoryList"),
]
