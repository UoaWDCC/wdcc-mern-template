# WDCC MERN Workshop. 
A boilerplate for workshops and tutorials for MERN - Mongo, Express, React, Node/Next

## Brief
Create a full stack web application that 
* uses React for client side pages and components
* gets and posts data to the server API 
* handle API requests and store data in the database.

More information 
* [Task list](docs/Tasks.md)
* [Auth0 setup](docs/Auth0Setup.md)
* [Database setup](docs/database.md)
* [Vercel setup](docs/Vercel.md)

### Local development
* Create and checkout a new repository based on this template.
* copy .env-template to .env and fill in secrets 
* setup local or remote MongoDB
* `npm install`  to install the packages
* `npm run dev` to start the dev server
* `npm run build` to build the deployment package
* `npm start` to run the production server.



### First time deployment
You will require accounts on 
* Auth0 - for identity management - see docs/Auth0Setup.md
* Mongo Atlas Cloud - for a remote database
* Vercel - for instant deployments.

To deploy the production application run `vercel --prod ` in the root folder. (you will need to setup a vercel account)

You will need to complete
* Access keys for Auth0 and vercel in .env and vercel.conf
* prod url for app in .env, vercel.conf and Auth0 web app configuration. 


