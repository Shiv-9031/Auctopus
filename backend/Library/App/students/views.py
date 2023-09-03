from django.shortcuts import render
from .models import Information
from .serializer import InformationSerializer, LoginSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.hashers import make_password, check_password
from rest_framework_simplejwt.tokens import RefreshToken


class StudentList(APIView):

    def post(self, request):

        try:
            self.request.data['password'] = make_password(
                self.request.data['password'])
            serializer = InformationSerializer(data=request.data)

            if serializer.is_valid():

                serializer.save()
                return Response({
                    'success': True,
                    'message': 'student created',
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


class Login(APIView):

    def post(self, request):
        try:
            email = self.request.data['email']
            password = self.request.data['password']
            user = Information.objects.get(email=email)
            serializer = InformationSerializer(user)

            if check_password(password, serializer.data['password']):
                refresh = RefreshToken.for_user(user)
                # remove password
                data = serializer.data
                del data['password']

                return Response({
                    "success": True,
                    "data": data,
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),

                }, status=status.HTTP_200_OK)

            else:
                return Response({
                    "success": False,
                    "message": "Either email or password is wrong"
                })

        except NameError:
            Response({
                "error": NameError
            }, status=status.HTTP_400_BAD_REQUEST)
