# from-scratch-guestbook

# Must Haves

Use private routes to enforce auth
Retain URL if redirected by auth failure
Redirect to an auth page if no user detected
Use useContext to manage global application state

# Plan

Auth Page
Home Page
Private Routes should be its own component
X add secrets to netlify and gitHub and yml

Rubric

Share the user’s email using context 1
Use a custom hook to expose our context state for reading/writing 1
Use the children prop to render child components from within a Provider 1
Use the user context state in at least 2 components (e.g. header and entry list) 2
PrivateRoute component created 2
Login view created 2
EntryList view created 2
Root path / uses a PrivateRoute 2
/login renders the Login view 1
PrivateRoute component redirects to /login if no user is in context 1
Guestbook entry uses the email stored in context for the name 2
Behavior testing for EntryList view 2
Deployed on Netlify with CI passing 1

stretch goals: add and update entries
