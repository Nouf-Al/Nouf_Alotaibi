from django.urls import path
from . import views

urlpatterns = [
    path('',views.main ,name="main"),
    path('add_course',views.add_course ,name="add_course"),
    path('courses/<int:id>',views.remove_page ,name="remove_page"),
    path('remove/<int:id>',views.remove ,name="remove"),
    path('comments/<int:id>',views.comments_page ,name="comments_page"),
    path('add_comments/<int:id>',views.add_comments ,name="add_comments"),


    
]