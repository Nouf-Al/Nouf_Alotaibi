from django.db import models

# Create your models here.
class Dojo(models.Model):
    name = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now_add=True)
    desc=models.CharField(default="old dojo" ,max_length=255)

    def __str__(self):
        return f"<Ninja object: {self.name} {self.city} {self.state} ({self.id})>"

class Ninja(models.Model):
    dojo_id=models.ForeignKey(Dojo,related_name="Ninjas", on_delete=models.CASCADE)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"<Ninja object: {self.dojo_id} {self.first_name} {self.first_name} {self.last_name} ({self.id})>"