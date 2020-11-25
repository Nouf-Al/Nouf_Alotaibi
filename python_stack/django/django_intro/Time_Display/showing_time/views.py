from django.shortcuts import render,HttpResponse
from time import gmtime, strftime

# Create your views here.
def index(request):
    context = {
        "time": strftime(" %H:%M %p", gmtime()),
        "date": strftime("%b %d, %Y", gmtime())

    }
    return render(request,'index.html', context)