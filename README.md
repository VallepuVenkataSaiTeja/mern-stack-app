client
---------
react-router-dom → routing (pages/navigation)
axios → HTTP requests (API calls)
react-hook-form → form handling
@hookform/resolvers → connect validation libraries (like Yup, Zod)

server
---------
joi → input validation (check request data like email/password)
mongoose → MongoDB interaction (schemas + database queries)
bcryptjs → password hashing (securely store & compare passwords)
jsonwebtoken → authentication tokens (create & verify login tokens)
cookie-parser → read cookies from requests
cors → allow frontend-backend communication (different origins)
express → backend framework (routes, APIs, middleware)
nodemon → auto-restart server during development


- created index.js and created a server using express.js
- created database folder and connect the MongoDB with mongoose
- created a User model using Mongoose which defines how user data is stored inside MongoDB.

- wrapped App component in BrowserRouter
- created routes and common layout & outlet
- <Outlet /> is the place where React Router displays the child route of a parent route.
- created a auth page with sign in , sign up using useState()
- created sign up & sign in form logic in auth page