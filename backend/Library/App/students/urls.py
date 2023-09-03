from django.urls import path
from .views import StudentList, Login

urlpatterns = [
    path('register/', StudentList.as_view(), name="CategoryList"),
    path('login/', Login.as_view(), name="Login")
]
