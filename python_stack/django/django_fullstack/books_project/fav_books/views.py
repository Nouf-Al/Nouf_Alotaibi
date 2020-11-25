from django.shortcuts import render,redirect
from users.models import User
from .models import Book
from django.contrib import messages

# Create your views here.
def books(request):
    context={
        'all_books':Book.objects.all(),
        'all_users':User.objects.all(),
        'user_to_fav':User.objects.get(id=request.session['id']),

    }
    return render(request,'books.html',context)

def  my_fav(request):
    context={
        'fav_books':User.objects.get(id=request.session['id']),
    }
    return render(request,'my_fav.html',context)

def add_book(request):
    errors = Book.objects.basic_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/books')
    else:
        uploaded_by = User.objects.get(id=request.session['id'])
        title = request.POST['title']
        desc = request.POST['desc']
        this_book = Book.objects.create(title=title, desc=desc , uploaded_by=uploaded_by)
        uploaded_by.liked_books.add(this_book)
        messages.success(request, "Book successfully added")
        return redirect ('/books')


def show_book(request,id):
    
    
    user_id=request.session['id']
    
    context={
        'book_info': Book.objects.get(id=id),
        'all_books':Book.objects.all(),
        'all_users':User.objects.all(),
        'user_to_fav':User.objects.get(id=user_id),
    }

    if context['book_info'].uploaded_by.id != request.session['id']:
        return render (request,'view_book.html',context)
    else:
        return render (request,'show_book.html',context)

def update_book(request,id):
    errors = Book.objects.basic_validator(request.POST)
    if request.POST['form']=='update':
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value)
            return redirect('show_book',id)
        else:
            this_book = Book.objects.get(id=id)
            this_book.desc = request.POST['desc']
            this_book.title = request.POST['title']
            this_book.save()
            return redirect ('show_book',id)
    else:
        this_book=Book.objects.get(id=id)
        this_book.delete()
        return redirect('/books')

def un_fav(request,book_id,user_id):
    this_book = Book.objects.get(id=book_id)
    this_user = User.objects.get(id=user_id)
    this_user.liked_books.remove(this_book)	
    return redirect ('show_book',book_id)

def fav(request,book_id):
    this_book = Book.objects.get(id=book_id)
    this_user = User.objects.get(id=request.session['id'])
    this_user.liked_books.add(this_book)	
    return redirect ('show_book',book_id)
