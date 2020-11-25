from django.urls import path
from . import views
urlpatterns = [
    path('',views.books),
    path('add_book',views.add_book, name="add_book"),
    path('/show/<id>',views.show_book, name="show_book"),
    path('/update/<id>',views.update_book, name="update_book"),
    path('/un_fav/<book_id>/<user_id>',views.un_fav, name="un_fav"),
    path('/fav/<book_id>',views.fav, name="fav"),
    path('/my_fav',views.my_fav, name="my_fav"),

    # path('/delete_book/<book_id>',views.delete_book, name="delete_book"),


    


]
