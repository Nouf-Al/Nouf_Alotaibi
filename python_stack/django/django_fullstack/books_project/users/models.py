from django.db import models
import re
import bcrypt
from datetime import date
from django.utils.dateparse import parse_date
import datetime
# Create your models here.
class UserManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        today=datetime.date.today()
        age=0
        if postData['bod']== "":
            errors["bod"] = "Birth of date should be provided"
        else:
            age=(date.today()-parse_date(postData['bod'])).days/365
        if len(postData['first_name']) <  2 or len(postData['last_name']) < 2:
            errors["first_name"] = "First name should be at least 2 characters"
            errors["last_name"] = "Last name should be at least 2 characters"
        
        if len(postData['email']) <=  0:
            errors["email"] = "Email is required!"

        if len(postData['password']) <  8:
            errors["password"] = "Password should be at least 8 characters"
        if postData['password'] != postData['c-password']:
            errors["c-password"] = "Passwords don't match"

        if postData['bod'] >= str(today) :
            errors["bod"] = "Birth of date should be in the past"
        else:
            if age>=13:
                pass
            else:
                errors["bod"] = "You should be at least 13 years old"

        first_name_REGEX = re.compile(r'^[a-zA-Z]+$')
        if not first_name_REGEX.match(postData['first_name']):
            errors['first_name'] = "First name should only contain letters!"
        last_name_REGEX = re.compile(r'^[a-zA-Z]+$')
        if not last_name_REGEX.match(postData['last_name']):
            errors['last_name'] = "Last name should only contain letters!"

        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if not EMAIL_REGEX.match(postData['email']):           
            errors['email'] = "Invalid email address!"

        for user in User.objects.all():
            if user.email == postData['email']:
                errors['email'] = "email already exist"

        return errors

    def login_validator(self, postData):
        errors = {}        
        if len(postData['email']) <=  0:
            errors["email"] = "Email is required!"

        if len(postData['password']) <  8:
            errors["password"] = "Password should be at least 8 characters"

        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if not EMAIL_REGEX.match(postData['email']):           
            errors['email'] = "Invalid email address!"

        return errors

class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255,unique=True)
    password = models.CharField(max_length=255)
    bod = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects=UserManager()