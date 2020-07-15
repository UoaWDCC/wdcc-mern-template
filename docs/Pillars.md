
## Follow AWS well-architected framework principle as much as possible
https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/

### Operational Excellence
  * Perform operations as code
  * Annotate documentation
  * Make frequent, small, reversible changes
  * Refine operations procedures frequently
  * Anticipate failure
  * Learn from all operational failures

As this is a demo most of the operations are implemented as code but some initial setup of AWS and vercel was required. For longer term robustness the following steps could be moved to the cloudformation script.

  * Create role for lambda excution
  * Create EventBridge rule for quarterly invocation
  * Link rule to Lambda

In addition for production we would want to setup a domain name and configure DNS

### Security
  * Implement a strong identity foundation
  * Enable traceability
  * Apply security at all layers
  * Automate security best practices
  * Protect data in transit and at rest
  * Prepare for security events

As the source data is open on the MBIE website there is little point in restricting access to the API providing the data. The S3 bucket is configured for secure write from the AWS lambda but is open read.

### reliability

  * Test recovery procedures
  * Automatically recover from failure
  * Scale horizontally to increase aggregate system availability
  * Stop guessing capacity
  * Manage change in automation

Both the Lambda and Vercel hosting are full resilient and auto recovery.
For scaling if the production web app required a high delivery rate then we can make the app fully static by incorporating the data into the build and deploying via a CDN. This is reasonable as the source data changes only quarterly. This removes all requests to the server except for the primary webpage.

### Performance Efficiency

  * Democratize advanced technologies
  * Go global in minutes
  * Use serverless architectures
  * Experiment more often
  * Mechanical sympathy

### Cost Optimisation

  * Adopt a consumption model
  * Measure overall efficiency
  * Stop spending money on data center operations
  * Analyze and attribute expenditure
  * Use managed services to reduce cost of ownership

The demonstration operates on all free tier services from AWS, vercel and Auth0. 
For a long term production system the use of static web application and rare lambda invocations means a near zero operational cost. 

