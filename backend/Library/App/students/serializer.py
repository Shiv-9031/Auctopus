from rest_framework import serializers
from .models import Information


class InformationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Information
        fields = '__all__'


class LoginSerializer(serializers.Serializer):
    class Meta:
        model = Information
        exclude = ['password']
