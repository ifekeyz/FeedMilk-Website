from django.urls import path

from .import views
urlpatterns = [
    path('',views.index, name='index'),
    path('about-us', views.about, name='about-us'),
    path('product', views.product, name='product'),
    path('blogs', views.blog, name='blogs'),
    path('single-blog', views.single_blog, name='single-blog'),
    path('contact-us', views.contact, name='contact-us')
]
