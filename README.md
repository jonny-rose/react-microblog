# microblog-api

## Welcome to my Microblog 

A micro blog web application that integrates a React frontend over a Flask backend API.

## Features:
* Register users
* Authentication
* User profile details edit/update
* Password update or reset via email
* Write blog posts
* View all users posts on Explore page
* Follow/Unfollow other users
* View the posts of the users you follow as well as your own posts on Feed Page

## Deployment

This application has 2 environments: 
 * the backend witch is a flask environment module sits on the subfolder 'backend-api' and has the purpose of listening to requests made from the frontend via api routes, talks with the database and returns responses to the frontend.
 * the frontend is a React environment sits on the root folder and it is the UI that sends the requests made by the client to the backend and shows the responses as html.

### Setup

Follow these steps if you want to run this application on your computer as a standalone Python application.

## Backend
```bash
cd backend-api
cp .env.example .env
```

Open the new `.env` file and enter values for the configuration variables.
* the DISABLE_AUTH variable can be set as true and will deactivate user authentication required, or it can be set as false, in which case the user authentication will be required in order to navigate through the application routes.
* the rest of the variables from the `.env` file are the EMAIL configuration and should be set in order to use de mailing service.
* more information regarding how to setup the `.env` can be found inside the `.env.example` file

### Run locally

Set up a Python 3 virtualenv and install the dependencies on it:

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

Create the database and populate it with some randomly generated data:

```
flask db upgrade
flask fake users 10
flask fake posts 100
```

Run the application with the Flask development web server:

```
flask run
```

## Frontend

Setup the node environment and run the React development web server:

```bash
cd into root folder
npm install
npm run
```

The backend runs on `localhost:5000`. You can access the API documentation at `http://localhost:5000/docs`.

The frontend runs on `localhost:3000`.
