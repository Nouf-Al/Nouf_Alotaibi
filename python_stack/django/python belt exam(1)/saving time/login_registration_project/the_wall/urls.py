from django.urls import path
from . import views

urlpatterns = [
    path('', views.wall),
    path('post_message/new', views.post_message, name="post_message"),
    path('post_comment/new/<message_id>', views.post_comment, name="post_comment"),
    path('delete/<message_id>', views.deletet_message, name="delete_message"),

    

]