# nz-electricity-prices NZ Quarterly Electricity prices from MBIE

Production app at: https://nz-electricity-prices.vercel.app 
Code base at: https://github.com/avowkind/nz-electricity-prices

## Brief
MBIE publish quarterly electricity prices on this page
https://www.mbie.govt.nz/building-and-energy/energy-and-natural-resources/energy-statistics-and-modelling/energy-statistics/energy-prices/electricity-cost-and-price-monitoring/

in a spreadsheet with link: 
https://www.mbie.govt.nz/assets/Data-Files/Energy/nz-energy-quarterly-and-energy-in-nz/qsdep-report-15-may-2020.xlsx

This app reads and charts the Retail data in the “Raw Data” sheet.

### Goals
* Create a cron job to periodically crawl the “Raw data” and save in the cloud.
* Adopt serverless architecture to ingest, process, store, handle the request
* Build a simple dashboard to visualize the data
* Practice infrastructure as code
* Deploy frontend and backend to Cloud Environment (frontend needs authentication)

#### Achieved by
* AWS EventBridge acts as the cron to generate quarterly events. ( weekly for testing)
  * arn:aws:events:ap-southeast-2:585172581592:rule/ScheduledPullElectricityPrices
* Triggers Lambda CreatePrices - reads excel file, converts to data and stores in S3
  * arn:aws:lambda:ap-southeast-2:585172581592:function:CreatePrices
  * depends on IAM:role - arn:aws:iam::585172581592:role/lambda-s3-role
* Displayed on NextJS Static web application https://nz-electricity-prices.vercel.app 
* Deployed to serverless architecture at Vercel. https://vercel.com/ 
* Infrastructure as code:
  * Cloudformation script to create S3 bucket
  * shell script to deploy/update lambda
  * github integration to deploy app to vercel.  
* Authentication provided by Auth0. Identity as a service.
  

More information on the process see
* [Analysis](docs/Analysis.md)
* [Todo list](docs/Actions.md)
* [Auth0 setup](docs/Auth0Setup.md)
* [Bug reports](docs/Bugs.md)
* [AWS Pillars](docs/Pillars.md)


### First time deployment
You will require accounts on 
* AWS
* vercel
* Auth0 - see docs/Auth0Setup.md

copy .env.template to .env and fill in env vars.

To create the infrastructure run `x/cloudformation/make-eprice` you will need AWS CLI client installed and valid sign in keys.

To deploy the production application run `vercel --prod ` in the root folder. (you will need to setup a vercel account)

To deploy the lambda run `x/create-lambda` 

You will need to complete
* Access keys for Auth0 and vercel in .env and vercel.conf
* prod url for app in .env, vercel.conf and Auth0 web app configuration. 
* In AWS Console find CreatePrices lambda and add EventBridge trigger with suitable cron setting.


