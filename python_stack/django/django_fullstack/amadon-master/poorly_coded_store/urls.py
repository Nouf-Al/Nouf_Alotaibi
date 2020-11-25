from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('checkcheckout', views.checkout, name="my_checkout"),
    path('checkout', views.view_checkout, name="view_checkout")

    
]
