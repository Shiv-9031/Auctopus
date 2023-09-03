

from django.db import models
import uuid
from App.students.models import Information

# Create your models here.


class BaseModel(models.Model):
    # uid = models.UUIDField( primary_key=True, default=uuid.uuid4, unique=True, editable=False)
    created_at = models.DateTimeField(auto_now_add=True, )
    updated_at = models.DateTimeField(auto_now=True, )

    class Meta:
        abstract = True


class Category(BaseModel):
    category_name = models.CharField(max_length=100, primary_key=True)
    description = models.TextField(max_length=180)

    class Meta:
        ordering = ['category_name']

    def __str__(self) -> str:
        return self.category_name


class Book(BaseModel):
    book_name = models.CharField(max_length=100)
    description = models.TextField(max_length=250, default=None)
    image = models.FileField(upload_to='books/', default=None)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    class Meta:
        ordering = ['id']

    def __str__(self) -> str:
        return self.product_name


class Orders(BaseModel):
    # student_name = models.CharField(max_length=180)
    # student_email = models.EmailField()
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    student_id = models.ForeignKey(
        Information, on_delete=models.CASCADE, )

    class Meta:
        ordering = ['student_id']

    def __str__(self) -> str:
        return f"order # {self.id}"
