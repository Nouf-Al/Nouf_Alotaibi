from django.urls import path
from . import views
urlpatterns = [
    path('', views.view_login_reg),
    path('log_reg', views.check_login_reg),
    path('result', views.result),
    path('logout', views.logout, name="logout"),



]
