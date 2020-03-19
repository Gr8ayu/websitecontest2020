from django.db import models
from django.contrib.auth.models import User
import datetime
from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.

class Posts(models.Model):
    # author = models.ForeignKey(User, on_delete=models.SET_NULL, null=True )
    creationDate = models.DateField(("Date"), default=datetime.date.today)
    publish = models.BooleanField(default=True)
    type = models.CharField(max_length=10 , choices=[('Notice', 'Notice'), ('Announcement', 'Announce'), ('other', "Other"), ], blank=True );
    title = models.CharField(max_length=50, blank=True)
    content = models.TextField(blank=True);

    class Meta:
        ordering = ['creationDate']

    def get_absolute_url(self):
        return reverse('blogs:BlogDetail',kwargs={'pk':self.pk} )

    def __str__(self):
        return self.title