from django.db import models
from log_reg_app.models import User
from datetime import timedelta
from django.utils import timezone

class CommentManager(models.Manager):
    def basic_validator(self, mess_id):
        errors = {}
        # add keys and values to errors dictionary for each invalid field
        message_info=Message.objects.get(id =mess_id)
        if timezone.now() - message_info.created_at > timedelta(minutes=30):
            errors['time']= 'The message deleted time expired'
        return errors

class Message(models.Model):
    user_id= models.ForeignKey(User, related_name="messages", on_delete = models.CASCADE)
    message= models.TextField()
    created_at= models.DateTimeField(auto_now_add=True)
    updated_at= models.DateTimeField(auto_now=True)

class Comment(models.Model):
    user_id= models.ForeignKey(User, related_name="comments_user", on_delete = models.CASCADE)
    message_id= models.ForeignKey(Message, related_name="comments_mess", on_delete = models.CASCADE)
    comment= models.TextField()
    created_at= models.DateTimeField(auto_now_add=True)
    updated_at= models.DateTimeField(auto_now=True)

    objects=CommentManager()


