# Must Haves

Use private routes to enforce auth
Retain URL if redirected by auth failure
Redirect to an auth page if no user detected
Use useContext to manage global application state

## Plan

x Auth Page
Home Page
Private Routes should be its own component
X add secrets to netlify and gitHub and yml

Rubric

x Share the user’s email using context 1
x Use a custom hook to expose our context state for reading/writing 1
x Use the children prop to render child components from within a Provider 1
x Use the user context state in at least 2 components (e.g. header and entry list) 2
x PrivateRoute component created 2
x Login view created 2
x EntryList view created 2
x Root path / uses a PrivateRoute 2
x /auth renders the Login view 1
x PrivateRoute component redirects to /auth if no user is in context 1
x Guestbook entry uses the email stored in context for the name 2
Behavior testing for EntryList view 2
Deployed on Netlify with CI passing 1

stretch goals: add and update entries
