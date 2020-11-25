from django.shortcuts import render,redirect
from .models import Book,Author
# Create your views here.
def index(request):
    context={
        'all_books': Book.objects.all()
    }
    return render(request,'Book.html',context)

def add_book(request):
    title=request.POST['title']
    desc=request.POST['desc']
    new_book=Book.objects.create(title=title, desc=desc)
    new_book.save()
    return redirect('/')

def bookInfo(request,id):
    context={
        'book_info':Book.objects.get(id=id),
        'all_books': Book.objects.all(),
        'all_authors': Author.objects.all()

    }
    return render(request,'bookInfo.html',context)

def author_to_book(request, id):
    if request.POST['which_form'] ==  "add_to_book":
        author_to_book=request.POST['which_author']
        this_author=Author.objects.get(first_name= author_to_book )
        this_book=Book.objects.get(id=id)
        this_author.book_author.add(this_book)
        
    return redirect('/')


def add_author(request):
    first_name=request.POST['first_name']
    last_name=request.POST['last_name']
    notes=request.POST['notes']
    new_author=Author.objects.create(first_name=first_name, last_name=last_name, notes=notes)
    new_author.save()

    return redirect('/authors')

def authors(request):
    context={
        'all_authors': Author.objects.all()
    }
    return render(request,'Author.html',context)

def authorInfo(request,id):
    context={
        'author_info':Author.objects.get(id=id),
        'all_books': Book.objects.all(),
        'all_authors': Author.objects.all()

    }
    return render(request,'authorInfo.html',context)

def book_to_author(request, id):
    if request.POST['which_form'] ==  "add_to_author":
        book_to_author=request.POST['which_book']
        this_book=Book.objects.get(title= book_to_author )
        this_author=Author.objects.get(id=id)
        this_book.writer.add(this_author)
        
    return redirect('/authors')