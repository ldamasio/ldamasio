from django.urls import path
from . import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('', views.post_list, name='post_list'),
    path('last_article/', views.last_article, name='last_article'),

    path('users/', views.UserList.as_view()),
    path('users/<int:pk>/', views.UserDetail.as_view()),
    path('blog_posts/', views.PostList.as_view()),
    path('blog_posts/<slug:slug>/', views.PostDetail.as_view()),
    path('blog_comments/', views.CommentList.as_view()),
    path('blog_comments/<int:pk>/', views.CommentDetail.as_view()),
    path('blog_categories/', views.CategoryList.as_view()),
    path('blog_categories/<int:pk>/', views.CategoryDetail.as_view()),

]

urlpatterns = format_suffix_patterns(urlpatterns)
