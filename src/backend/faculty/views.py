from django.contrib import messages 
from django.contrib.auth import authenticate,login,logout
from django.shortcuts import render,redirect
from django.contrib.auth.forms import AuthenticationForm,PasswordChangeForm
from django.http.response import HttpResponse, HttpResponseRedirect
from django.contrib.auth.models import Group, User
from .forms import ProfileAdd,UserRegister
from .models import Profile
from .forms import SingUpRequestform
from django.core.mail import send_mail, BadHeaderError
from django.views.generic import ListView
import json

usersList=[]
searchDataList=[]

# create user by admin
def adduser(request):
   if request.method =='POST' :
      form = UserRegister(request.POST)
      if form.is_valid():
         user= form.save()
         Uname=user.username
         print(Uname)
         return HttpResponseRedirect('/Admin/')
   else :
      form = UserRegister()
   return render(request,'faculty/adduser.html',{'form':form})

# Create your views here.
def search_data(request):
    if request.method=='POST':
        s_name=request.POST.get("NAME",None)
        s_catagory=request.POST.get("CATAGORY",None)
        s_sort=request.POST.get("SORT",None)
        s_order=request.POST.get("ORDER",None)
        
        s_name=s_name.lower()
        s_name=s_name.split(" ")
        
        if s_order=="A-Z":
            if s_sort!="":
                data=Profile.objects.order_by(s_sort)
            else:
                data=Profile.objects.all()
        else:
            if s_sort!="":
                data=Profile.objects.order_by("-"+s_sort)
            else:
                data=Profile.objects.all()
        l=[]
        page=[]
        searchDataList.clear()
        for d in data:
            for i in s_name:
                if i in d.name.lower() or i in d.email.lower() or i in d.department.lower() or i in d.inst_name.lower() or i in d.courses.lower() or i in d.education.lower() or i in d.pro_int.lower():
                    l.append(d)
                    searchDataList.append(d)
                    break
        lq=(int(len(searchDataList))+int(2))//3
        for i in range(lq):
            page.append(i)
    
        ll=l[0:3]
        return render(request,'faculty/searchPageData.html',{'data':ll,'page':page})
    else:
        return render(request,'faculty/search_form.html')

def searchGetData(request,k):
    data=Profile.objects.get(pk=k)
    return render(request,'faculty/searchGetData.html',{'data':data})

def searchPageData(request,k):
    print(int(k))
    ll=searchDataList[3*int(k):3*int(k)+3]
    page=[]
    lq=(int(len(searchDataList))+int(2))//3
    for i in range(lq):
        page.append(i)
    return render(request,'faculty/searchPageData.html',{'data':ll,'page':page})

def homeSearch(request,k):
    data=Profile.objects.filter(inst_name=k)
    return render(request,'faculty/homeCollege.html',{'data':data})

#Admin
def Admin(request):
    usersList= User.objects.filter(is_superuser=False)
    profile = Profile.objects.all()
    if request.user.is_superuser:
        return render(request,'faculty/admin.html',{'users':usersList,'profile':profile})

#Delete
def Deletepost(request,k):
 # if request.user.is_superuser:
    pi= Profile.objects.get(pk=k) 
    kk=pi.user
    pi.delete()
    kkk=User.objects.get(username=kk)
    kkk.delete()
    messages.success(request,'Delete successfully !!')
    return redirect('Admin')

#login
def user_login(request):
    if not request.user.is_authenticated:
        if request.method == "POST":
            form = AuthenticationForm(request=request,data=request.POST)
            if form.is_valid():
                uname=form.cleaned_data['username']
                upass=form.cleaned_data['password']
                user= authenticate(username=uname,password=upass)
                if user is not None :
                    login(request,user)
                    return redirect('home')
        else :
            form = AuthenticationForm()
        return render(request,'faculty/login.html',{'form':form})
    else :
      return render(request,'faculty/home.html')

#home
def home(request):
    return render(request,'faculty/home.html')

#about
def about(request):
    return render(request,'faculty/about.html')

#User profile
def profileDataAddForm(request):
    if request.user.is_authenticated:
        if request.method=="POST":
            form=ProfileAdd(request.POST,request.FILES)
            if form.is_valid():
                profile=form.save(commit=False)
                profile.user=request.user
                usersList.append(request.user)
                profile.save()
                return redirect('profile')
        else:
            form=ProfileAdd()
        return render(request, 'faculty/profileForm.html',{'form':form})
    else:
        return redirect('login')

def profileData(request):
    if request.user.is_authenticated:
        try:
            data=Profile.objects.get(user=request.user)
        except:
            return redirect('profileForm')
        return render(request,'faculty/profile.html',{'data':data})
    else:
        return redirect('login')

def profileUpdate(request,k):
    if request.user.is_authenticated:
        inst=Profile.objects.get(user=request.user)
        form=ProfileAdd(request.POST,request.FILES,instance=inst)
        print(inst.name)
        if request.method=="POST":
            form=ProfileAdd(request.POST,request.FILES,instance=inst)
            if form.is_valid():
                form.save()
                return redirect('profile')
        else:
            form=ProfileAdd()
        return render(request,'faculty/profileUpdateForm.html',{'form':form})
    else:
        return redirect('login')

#Addprofile

def Addprofile(request,user):
    if request.user.is_authenticated:
        if request.method == "POST":
            pst=Profile(user=user)
            pst.save()
            form=ProfileAdd()
        else :
            form = ProfileAdd()
            messages.success(request,'Add successfully !!')
        return HttpResponseRedirect('/Admin/')
    else :
        return HttpResponseRedirect('/login/')


def user_logout(request):
    logout(request)
    return redirect('home')

#delete confirmation
def confirmDelete(request,k):
    profile= Profile.objects.get(pk=k)
    return render(request,'faculty/confirmdelete.html',{'d':profile})


def change_pass(request):
    if request.user.is_authenticated:
        if request.method=="POST":
            form=PasswordChangeForm(user=request.user,data=request.POST)
            if form.is_valid():
                form.save()
                message.success(request,'Password changed..!!')
                return redirect('home')
        else:
            form=PasswordChangeForm(user=request.user)
        return render(request,'faculty/changepass.html',{'form':form})
    else:
        return redirect('home')


def SingupRequest(request):
   if request.method == "POST":
      RequestForm = SingUpRequestform(request.POST)
      if RequestForm.is_valid():
         name = RequestForm.cleaned_data['name']
         description = RequestForm.cleaned_data['description']
         
         subject = "Sing Up Request From " + name
         msg = "Name:" + name + "\n" + description

         try:
            send_mail(subject,msg,' ',['djangoa997@gmail.com'],fail_silently='False')
            messages.success(request,'Mail sent !!')
         except BadHeaderError:
            print ("Opps I don't know what to do\n")
            messages.error(request,"Somthing went wrong\n")
         
   RequestForm = SingUpRequestform()
   return render(request,'faculty/singuprequest.html',{'form':RequestForm})
            
            


# class LiveDelete(ListView):
#     model = Profile
#     templateview = 'faculty/admin.html'

#     def get_context_data(self, **kwargs):
#         context = super().get_context_data(**kwargs)
#         context["key1"] = json.dumps(list(Profile.objects.values()))
#         return context 