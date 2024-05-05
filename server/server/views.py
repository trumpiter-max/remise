from django.shortcuts import render
from django.http import HttpResponse

class GenericViews:
    @staticmethod
    def PageNotFound(request, exception):
        return render(request, "404.html", {})

    @staticmethod
    def PermissionDenied(request, exception):
        return render(request, "403.html", {})

    @staticmethod
    def Home(request):
        return HttpResponse("Hello, this is the welcome page!")