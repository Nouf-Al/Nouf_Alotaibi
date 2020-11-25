from django.shortcuts import render,redirect
from django.contrib import messages
from .models import *
# Create your views here.
def main(request):
    context = {
        'all_courses':Course.objects.all(),
    }
    return render(request,'main.html',context)

def add_course(request):
    errors = Course.objects.basic_validator(request.POST)
    errors1 = Description.objects.basic_validator(request.POST)
    if len(errors) > 0 or len(errors1) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        for key, value in errors1.items():
            messages.error(request, value)
        return redirect('main')
    else:
        name = request.POST['name']
        desc = request.POST['desc']
        d1=Description.objects.create(desc=desc)
        Course.objects.create(name=name,description=d1)
        messages.success(request, "")
        return redirect('main')

def remove_page(request,id):
    context = {
        'this_course':Course.objects.get(id=id)
    }
    return render(request,'remove_page.html',context)

def remove(request,id):
    if request.POST['which_form'] == 'yes':
        this_course=Course.objects.get(id=id)
        this_course.delete()
        return redirect('main')
    else:
        return redirect('main')

def comments_page(request,id):
    this_course=Course.objects.get(id=id)
    context = {
        'this_course':Course.objects.get(id=id),
        'all_comments':Comment.objects.filter(course=this_course),
    }
    return render(request,'comments_page.html',context)

def add_comments(request,id):
    comment=request.POST['comment']
    this_course=Course.objects.get(id=id)
    Comment.objects.create(comment=comment,course=this_course)
    return redirect('comments_page',id)
    