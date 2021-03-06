from django.db import models
from django.utils import timezone
from imagekit.models import ImageSpecField
from imagekit.processors import ResizeToFill


class Map(models.Model):
    user_id = models.ForeignKey(
        'account.User', on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=30)
    datetime = models.DateField(default=timezone.now)
    zoom = models.FloatField(null=True)
    centerX = models.FloatField(null=True)
    centerY = models.FloatField(null=True)

    def __str__(self):
        return str(self.pk)


class Gps(models.Model):
    map_id = models.ForeignKey('Map', on_delete=models.CASCADE, null=True)
    latitude = models.FloatField(null=True)
    longitude = models.FloatField(null=True)
    datetime = models.DateField(default=timezone.now, null=True)

    def __str__(self):
        return str(self.map_id)

    # def save(self, *args, **kwargs):


class Picture(models.Model):
    map_id = models.ForeignKey('Map', on_delete=models.SET_NULL, null=True)
    image = models.ImageField(blank=True, upload_to="origin")
    resized_image = models.ImageField(blank=True)
    image_thumbnail = ImageSpecField(
        source='image', processors=[ResizeToFill(200, 130)], format='JPEG', options={'quality': 95})
    latitude = models.FloatField(null=True)
    longitude = models.FloatField(null=True)
    datetime = models.DateField(default=timezone.now)
