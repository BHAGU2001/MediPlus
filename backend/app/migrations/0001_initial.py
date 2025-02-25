# Generated by Django 5.0.2 on 2024-03-04 10:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Patient',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254)),
                ('phone', models.CharField(max_length=15)),
                ('city', models.CharField(max_length=100)),
                ('address', models.TextField()),
                ('medicine', models.CharField(max_length=100)),
                ('prescription', models.ImageField(upload_to='prescriptions')),
                ('definition', models.TextField()),
            ],
        ),
    ]
