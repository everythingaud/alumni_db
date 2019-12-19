# alumni_db
personal project: seasa membership database


# To Run
Open two terminals: one for project home directory, and client directory
From home directory (/alumni_db): `npm start`
From client directory (/alumni_db/client): `npm start`

# Heroku Deployment
Before uploading to Heroku we need to determine how to build our client code. The Express points to client/build, which we do not have before building our React app. With Heroku we can add a heroku-postbuild script so that the React app is built after we push our code, rather than having to upload compiled code.

Edit package.json in the parent directory and add the following script (not /client/package.json):

    "scripts": {
        "start": "node index.js",
        "heroku-postbuild": "cd client && npm install --only=dev && npm install && npm run build"
    }

Heroku will now enter the client directory and create the production build of the React app for us.

If you already have the Heroku tool-belt installed, deploying is as easy as running the following commands:

    git init
    git add .
    git commit -m "Initial commit"
    heroku create
    git push heroku master

(Reference: https://dev.to/nburgess/creating-a-react-app-with-react-router-and-an-express-backend-33l3)
