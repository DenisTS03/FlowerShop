# Generated by Django 4.1.7 on 2023-03-22 19:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('flowers', '0009_productсategory_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProductImageModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img', models.ImageField(upload_to='images/', verbose_name='Изображение')),
                ('name', models.CharField(max_length=64)),
            ],
        ),
        migrations.RemoveField(
            model_name='flower',
            name='img',
        ),
        migrations.AddField(
            model_name='flower',
            name='images',
            field=models.ManyToManyField(to='flowers.productimagemodel'),
        ),
    ]
