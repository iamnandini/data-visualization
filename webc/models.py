from django.db import models

# Create your models here.
class GraphData(models.Model):
    points = models.IntegerField()