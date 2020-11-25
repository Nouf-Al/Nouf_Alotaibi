from django.urls import path
from . import views
urlpatterns = [
    path('', views.index),
    path('destroy_session', views.clear),
    path('increment', views.increment),
    path('form', views.form),
    

]
