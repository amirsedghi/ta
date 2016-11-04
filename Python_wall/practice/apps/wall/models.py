from __future__ import unicode_literals

from django.db import models

# Create your models here.

class User(models.Model):
    first_name = models.CharField(max_length = 255)
    last_name = models.CharField(max_length = 255)
    email = models.CharField(max_length = 255)
    password = models.CharField(max_length = 255)
    create_at = models.DateTimeField(auto_now_add = True)
    update_at = models.DateTimeField(auto_now = True)

class Message(models.Model):
    message = models.CharField(max_length = 255)
    user = models.ForeignKey(User, related_name = 'user_message', on_delete = models.CASCADE)
    create_at = models.DateTimeField(auto_now_add = True)
    update_at = models.DateTimeField(auto_now = True)

class Comment(models.Model):
    comment = models.CharField(max_length = 255)
    user = models.ForeignKey(User, related_name = 'user_comment', on_delete = models.CASCADE)
    message = models.ForeignKey(Message, related_name = 'message_comment', on_delete = models.CASCADE)
    create_at = models.DateTimeField(auto_now_add = True)
    update_at = models.DateTimeField(auto_now = True)
