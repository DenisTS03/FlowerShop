# Generated by Django 4.1.7 on 2023-03-26 12:47

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('flowers', '0010_productimagemodel_remove_flower_img_flower_images'),
    ]

    operations = [
        migrations.RenameField(
            model_name='basket',
            old_name='flower_id',
            new_name='flower',
        ),
        migrations.RenameField(
            model_name='flower',
            old_name='sale_id',
            new_name='sale',
        ),
        migrations.RenameField(
            model_name='wishlist',
            old_name='flower_id',
            new_name='flower',
        ),
        migrations.AlterUniqueTogether(
            name='basket',
            unique_together={('user', 'flower')},
        ),
        migrations.AlterUniqueTogether(
            name='wishlist',
            unique_together={('user', 'flower')},
        ),
    ]
