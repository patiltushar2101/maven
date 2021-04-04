from django.contrib import admin
from .models import Profile

# Register your models here.
@admin.register(Profile)
class Profile(admin.ModelAdmin):
    list_display=('id','user','name','email','department','inst_name','courses','education','pro_int','area_exp')