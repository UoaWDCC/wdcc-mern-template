### setup vercel account
  * check deployment from command line (/)
  * check deployment from git push (/)

### setup Auth0 account
  * see Auth0Setup.md (/)
  * verify sign in (/)
  * allow account creation and github sign in (/)

### decide on chart tool.
 * c3, recharts, vis, pure d3.
 * test recharts (/)

### decide format for data
  * csv or json arrays. - convert csv to json (/)
  * format suitable for plotting - array of objects with members for each date. (/)
### place test data on local source
  * place data in repo deployment so its at /static/etc (/)
  * 
### place test data on remote source
  * create bucket using cloudformation (/)
  * copy test data (/)
  * access from app uri. (/)

### placeholder serverless from repo
  * Simple function to write file to S3 bucket. x/CreatePrices (/)
  * deployment and update script x/create-lambda, x/deploy-lambda (/)
  * invoke on AWS site (/)
  * invoke from command line (/) - x/test/CreatePrices.test

### script to scan MBIE webpage and pull spreadsheet
  * check source page for markers - none
  * either scan source page or guess filename
    * for speed guess filename - qtr from date (/)
  * fetch xls from source (/)
  * install xlsx parser (/)
  * scan website rather than guess filename. (x)
  
### script to process sheet into require data
  * Get Excel file (/)
  * convert RawData Sheet to initial json (/)
  * convert json into prices data format (/)
  * write result to S3. (/)

### move conversion script into Lambda
  * convert code to lambda (/)
  * no event data required only trigger
  * 
### trigger lambda on manual or scheduled event.
  * source for scheduled event
    * sns, email, api request, sqs? 
    * cloudwatch?

Using cloudwatch event bridge as we can specify a cron style schedule


### CI/CD 
  * on PR to master update lambda
  * github action.


### tests

### error handling
  * site does not have file with expected name
  * site does not have any file
  * file changes formatting - send errors 
  * new place added

### monitoring and logging

### Pillars design assessment.


