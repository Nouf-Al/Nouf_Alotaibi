from django.shortcuts import render,redirect,HttpResponse

# Create your views here.
def index(request):
    return render(request,'index.html')

def result(request):
    name=request.POST['name']
    email=request.POST['email']
    city=request.POST['city']
    gender=request.POST['gender']
    vehicle1=request.POST.getlist('vehicle1')
    comment=request.POST['comment']

    context = {
        'name':name,
        "email":email,
        "city":city,
        "gender":gender,
        "vehicle1":vehicle1,
        "comment":comment
    }
    return render(request,'result.html',context)

def done(request):
    return HttpResponse('index.html')