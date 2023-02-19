from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from models import *


def login_req(request):

    username = request.POST['username']
    password = request.POST['password']

    user  = EUser.objects.filter(username__exact = username, password__exact = password)

    if (user):
        token = {
            'username' : user.username,
            'type' : user.type,

        }
        return JsonResponse(user)


    return