from django.urls import path
from . import views
urlpatterns = [
    path('', views.NinjaGold),
    path('process_money', views.process_money),

]
