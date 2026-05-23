from django.urls import path
from django.contrib import admin
from app1.views import home
from app1.views import b1
from app1.views import welcome , x1 , mpy
urlpatterns = [
    path('admin/', admin.site.urls),
    path('',home),
   path('b1/', b1),
   path('x1/',x1),
   path('welcome/',welcome),
   path('mpy',mpy)
]
