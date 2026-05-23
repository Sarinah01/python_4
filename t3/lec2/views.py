from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    return HttpResponse('<h1>This is Sarinahhh</h1>')

def b1(request):
    return HttpResponse('<h1>This is b1 url</h1>')


def welcome(request):
    return HttpResponse('<h1>This is welcome page</h1>')

def x1(request):
    return render('','p1.html')

def mpy(request):
    return render(request,'')