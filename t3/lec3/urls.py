from app1.views import home
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('app1/',home),
]
