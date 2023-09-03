from django.shortcuts import render
from .models import Category, Orders, Book
from .Serializers import CategorySerializer, OrdersSerializer, BookSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView


class CategoryList(APIView):

    def post(self, request, format=None):
        try:
            serializer = CategorySerializer(data=request.data)
            if serializer.is_valid():

                serializer.save()
                return Response({
                    'success': True,
                    'message': 'category created',
                    'data': serializer.data
                }, status=status.HTTP_201_CREATED)
            else:
                return Response({
                    "success": False,
                    "message": "category not created"
                })
        except NameError:
            return Response({
                'message': NameError
            }, status=status.HTTP_400_BAD_REQUEST)


class BookList(APIView):

    def get(self, request, format=None):
        Books = Book.objects.all()
        serializer = BookSerializer(Books, many=True)
        return Response({
            "success": True,
            "data": serializer.data
        }, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        try:
            serializer = BookSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({
                    'success': True,
                    'message': 'book created',
                    'data': serializer.data
                }, status=status.HTTP_201_CREATED)
            else:
                return Response({
                    "success": False,
                    "message": serializer.errors
                })
        except NameError:
            return Response({
                'message': NameError
            }, status=status.HTTP_400_BAD_REQUEST)


class OrderList(APIView):

    def post(self, request, format=None):
        try:
            serializer = OrdersSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({
                    'success': True,
                    'message': 'order created',
                    'data': serializer.data
                }, status=status.HTTP_201_CREATED)
            else:
                return Response({
                    "success": False,
                    "message": serializer.errors
                })
        except NameError:
            return Response({
                'message': NameError
            }, status=status.HTTP_400_BAD_REQUEST)
