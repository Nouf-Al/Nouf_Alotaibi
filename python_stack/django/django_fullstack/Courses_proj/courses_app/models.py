from django.db import models

# Create your models here.
class CourseManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        # add keys and values to errors dictionary for each invalid field
        if len(postData['name']) <= 5:
            errors["name"] = "Blog name should be more than 5 characters"
        return errors

class DescManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        if len(postData['desc']) <= 15:
            errors["desc"] = "Blog description should be more than 15 characters"
        return errors



class Description(models.Model):
    desc= models.TextField()
    created_at= models.DateTimeField(auto_now_add=True)
    updated_at= models.DateField(auto_now=True)
    objects = DescManager()



class Course(models.Model):
    name= models.CharField(max_length=255)
    description= models.OneToOneField(Description,on_delete=models.CASCADE)
    created_at= models.DateTimeField(auto_now_add=True)
    updated_at= models.DateField(auto_now=True)
    objects = CourseManager()

class Comment(models.Model):
    comment= models.TextField()
    course= models.ForeignKey(Course, related_name="comments", on_delete = models.CASCADE)
    created_at= models.DateTimeField(auto_now_add=True)
    updated_at= models.DateField(auto_now=True)