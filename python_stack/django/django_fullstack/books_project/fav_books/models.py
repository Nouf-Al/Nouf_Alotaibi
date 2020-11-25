from django.db import models
from users.models import User
# Create your models here.
class BookManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        if len(postData['title']) <  0:
            errors["title"] = "Title is required"
        
        if len(postData['desc']) <  5:
            errors["desc"] = "Description should be at least 5 charecters!"

        return errors

class Book(models.Model):
    title = models.CharField(max_length=255)
    desc= models.TextField()
    created_at= models.DateTimeField(auto_now_add=True)
    updated_at= models.DateTimeField(auto_now=True)
    uploaded_by = models.ForeignKey(User, related_name='books_uploaded', on_delete=models.CASCADE)
    users_who_like = models.ManyToManyField(User, related_name='liked_books')

    objects= BookManager()