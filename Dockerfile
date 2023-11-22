FROM python:3.9

# Set the working directory
WORKDIR /websocketchart

# Copy the project code into the container
COPY . .

# Install dependencies
RUN pip install -r requirements.txt

# Create a production database
RUN python manage.py migrate

# Start the Gunicorn server
CMD ["daphne", "websocketchart.asgi:application", "--port", "8000"]


# # Use an official Python runtime as a parent image
# FROM python:3.8-slim

# # Set environment variables for Python
# ENV PYTHONDONTWRITEBYTECODE 1
# ENV PYTHONUNBUFFERED 1

# # Set the working directory in the container
# WORKDIR /websocketchart

# # Copy the requirements file into the container at /app
# COPY requirements.txt websocketchart/requirements.txt

# # Install any needed packages specified in requirements.txt
# RUN pip install -r requirements.txt

# # Copy the current directory contents into the container at /app
# COPY . .

# # Collect static files
# RUN python manage.py collectstatic --noinput

# # Expose the port that Daphne will run on
# EXPOSE 8000

# # Define the command to run on container start
