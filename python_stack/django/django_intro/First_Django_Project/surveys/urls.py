from django.urls import path     
from . import views
urlpatterns = [
    # path('', views.root),
    path('surveys', views.index),
    path('surveys/new', views.new),	 
    # path('blogs/create', views.create),
    # path('blogs/<int:number>', views.show),	 	   
    # path('blogs/<number>/edit', views.edit),	 	   
    # path('blogs/<number>/delete', views.destroy),	 	   
    # path('blogs/json', views.json),	 	   
	 	   
]