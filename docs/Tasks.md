# Some Things to do based on the template

# Client Side

## Styling
* Layout results table nicely
* use tailwinds primitives to set the basic page theme - headings, text etc.
* mobile first and responsive page layout


## Components
* Component to log an event with a value - score, emotion etc.
* Component to filter or seach for results.
* Component to show events as an interactive chart or timeline

# Server Side
## Security
* only signed in people can make api calls - e.g. opaque session key in private cookie
* when person logs an event use their signed in identity, don't trust the body message

## Events collection
* add schema validation to the db to ensure event records meet minimum expectations
* add index to find one person's events quickly
* extend events API to get events for person, event type, or date range
* API to return aggregate stats - e.g total events, converting event stream to a time series etc.
* 

## Person Collection
* when a 'user' signs in from Auth0 create or find their profile record in the db. 
* associate events with the signed in person.
* create an API listing all the people who have accounts
* create a page view with person cards for all the people
* Form to allow person to edit their profile & settings



