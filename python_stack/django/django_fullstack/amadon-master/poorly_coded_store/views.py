from django.shortcuts import render,redirect
from .models import Order, Product

def index(request):
    context = {
        "all_products": Product.objects.all()
    }
    return render(request, "store/index.html", context)

def checkout(request):
    quantity_from_form = int(request.POST["quantity"])
    price_for_id= Product.objects.get(id=request.POST["product.id"])
    total_charge = quantity_from_form * price_for_id.price
    order=Order.objects.create(quantity_ordered=quantity_from_form, total_price=total_charge)
    order.save()
    return redirect("view_checkout")

def view_checkout(request):
    sum=0
    for order in Order.objects.all():
        sum= sum + order.total_price
    context = {
        "last_order":Order.objects.last(),
        "all_orders":Order.objects.all(),
        'sum':sum
    }
    return render(request,"store/checkout.html",context)