# The WWDC MERN template

This template provides an initial application with the following features
* Home, About and Report pages
* User sign in and registration via Auth0 
* Pages or components that show depending on signed in state.
* Profile component to show data from sign in
* Button to log an event
* Server API to post a new event and return list of events
* Event is a simple object with name, type and date
* MongoDB middleware hook.
* NextJS implicit routing
* Demonstrate React client side data fetching - useEffect
* Demonstrate use of Next server side rendering
* Demonstrate Next SWR data fetching
* Styling using TailwindsCSS


On the home page you first have to log in.  

Once signed in via Auth0 you then see a profile panel with your name and avatar and a button.
When you click the button we log an event in the db - name, date and event type. Everyone who clicks the button logs events into the same collection.

On the report page we fetch and list all the recorded events. This is displayed as a dumb table. 