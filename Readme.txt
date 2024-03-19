what are the package i am going to use for these mern stack project and steps:



1.I am going to create a folder for my project

2.in the i seprate my backend and frontend by two differnt folder formats

3.and once i done that i get into the backend ,by typing the command of cd backend in the terminal

4.once i get into in the backend folder now i need to install the necessary package for that i need node install in my computer as well as , i need to check the npm and node version of project.

5.I need the package for my backend like

Express.js it is used for the api 

cors it is used as a middleware

dotenv to store my api key values in term of 
=> production
=> development
=> deployment 

mongoose , mongodb which is used to connect the monogo db the database


Then i need to install the dev dependentices

In this i am going to use typescript , because it will take less time to produce the dist file compare to the plan javascript

in this i am going to install all the types for my package

=> @types/express , @types/node , @types/cors ts-node typescript and nodemon- it is used to start the server when we make a simple change to the backend code . add --save -dev we need only the dependentices in the dev enviroment only.

And once it done i need to create the src folder in the current directory where all my source code goes 

inside that i need to create index.ts 

in this index.ts all my logic of my backend code goes,

i started importing all the package and connect my endpoint.

now i need to setup my frontend 

for my frontend i am going to use the vite to step up my react application ,

and here in need to run this command npx create vite@last , it will ask the name of the project once you enter that it will ask about the framework in this i am going to choose react and and then it ask about the supporting tools i hit typescript swc and once it done 

it will show like this
cd frontend
npm install
npm run dev

Now setup the mongodb for the database.

and once i get there i need to install tailwindcss for frontend ,
once we install the tailwind css we need to intialise by using this command 
npx tailwindcss init -p

add this in the tailwind.config.js content: ["./index.html","./src/**/* .{js,ts,jsx,tsx}"],

go and add it in the index.css to connect tailwind style
@tailwind base;
@tailwind components;
@tailwind utilities;

after adding the tailwind

i stared creating componets in the components 

first i work with the header 

then i created the hero

then i created the footer 

and install the router and link to switch back in to the components

and pass the children components for different routes

//signup flow

in this page user needs to enter all the creditionals ,like firstname ,lastname, password

and it will check the user in the schema if there is a user it returns the user exists
//findone mongoose method
else it create the new user and set the token into the cookies

hash the pass before save into the db

//login flow

get the user email and password from the req body
//if check the user exists

it will then decrypt and compare the pass

then it return the token and id

and 

and created the signup routes in the backend create the user schema and add some middleware to hash the password before to put the password in the database.

and use the thunder client to check my endpoint .

express validator is used to validate the endpoint. check the documentation

and then i created a login endpoint here also i used the express validator to check the field
and in res it sends the userid and cookies


//after then i started working in the frontend to connect with the backends

react-hook-form for form management
