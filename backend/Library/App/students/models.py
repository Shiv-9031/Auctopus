from django.db import models


class Information(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(unique=True, max_length=10)
    email = models.EmailField(unique=True)
    password = models.CharField()
    college = models.CharField(max_length=100)
    image = models.FileField(upload_to='student/image/', default=None)
    address = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True, )

    class Meta:
        ordering = ['name']
