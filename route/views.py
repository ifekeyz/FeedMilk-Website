from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,'pages/index.html')


def about(request):
    return render(request,'pages/about.html')


def product(request):
    return render(request,'pages/product.html')

def blog(request):
    return render(request,'pages/blogs.html')

def single_blog(request):
    return render(request,'pages/single_blog.html')


def contact(request):
    return render(request,'pages/contact.html')