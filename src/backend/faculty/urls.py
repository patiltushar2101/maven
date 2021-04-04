"""miniblog URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('',views.home,name='home'), 
    #Login...
    path('login/',views.user_login,name='login'), 
    path('logout/',views.user_logout,name='logout'),
    path('change-password',views.change_pass,name='changepass'),
    
    #Profile...
    path('profile/',views.profileData,name='profile'),
    path('profileForm/',views.profileDataAddForm,name='profileForm'),
    path('profileUpdate/<str:k>',views.profileUpdate,name="profileUpdate"),

    #Search...
    path('searchPageData/',views.search_data,name="search"),
    path('searchPageData/<str:k>',views.searchPageData,name="searchPageData"),
    path('searchPageData/searchGetData/<str:k>',views.searchGetData,name="searchGetData"),

    path('about/',views.about,name="about"),
    path('req/',views.SingupRequest,name="request"),
    path('Delete/<str:k>',views.Deletepost,name='Delete'),
    path('Admin/',views.Admin,name='Admin'),  
    
    path('college/<k>',views.homeSearch,name='college'),
    path('adduser/',views.adduser,name='adduser'),  
    path('confirmDelete/<str:k>',views.confirmDelete,name='confirmDelete'), 


]

