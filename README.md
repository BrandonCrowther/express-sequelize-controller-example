# PugJS / Express / Sequelize Boilerplate app
This is an app ready to drop into AWS Elastic Beanstalk project.

## TODO:
- Define a controller class to extend from
- Abstract away the index.js routing to automatically collect the routes from a controller
- Protect password storage
- Clean up packages
- Autocreate first user if not exist
- Force npm install --production during build

## Install Locally
- Set up mysql on your machine
- Modify config.js to your needs
- Run `npm start` or `nodemon start`

## Build for Production
- Run build.sh and drop the resulting zip into EB.