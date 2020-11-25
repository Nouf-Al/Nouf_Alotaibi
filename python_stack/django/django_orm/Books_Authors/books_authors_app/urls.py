from django.urls import path
from . import views
urlpatterns = [

    path('', views.index),
    path('books/<int:id>', views.bookInfo, name='my_book'),
    path('author_to_book/<int:id>', views.author_to_book, name="author_add_book"),
    path('add_book', views.add_book),




    path('authors', views.authors),
    path('add_author', views.add_author),
    path('authors/<int:id>', views.authorInfo, name='my_author'),
    path('book_to_author/<int:id>', views.book_to_author, name="book_add_author"),


    # path('authors', views.add_author),
    



]