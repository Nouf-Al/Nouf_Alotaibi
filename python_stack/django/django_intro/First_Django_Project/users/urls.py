from django.urls import path     
from . import views
urlpatterns = [
    path('', views.root),
    path('register', views.register),
    path('login', views.login),	 
    path('users/new', views.register),
    path('users', views.users),	 	   
    # path('blogs/<number>/edit', views.edit),	 	   
    # path('blogs/<number>/delete', views.destroy),	 	   
    # path('blogs/json', views.json),	 	   
	 	   
]