USER DASHBOARD - WIDGET MANAGEMENT
---------------------------------
BACKEND:: Node + Typescript + Postgre sql + Drizzle orm
FRONEND:: Nextjs + Shadcn

*CLONE BOTH FRONTEND AND BACKEND

*CREATE .env FILES IN BOTH FRONTEND AND BACKEND
COPY .env CONTENT FROM PARENT FOLDER "copy env "

*RUN npm install ON BOTH 

*TO START FRONTEND  
        "npm run dev"

*TO START BACKEND  
--> DO DRIZZLE MIGRATION (ONCE)
    "npx drizzle-kit generate "
    "npx drizzle-kit push "
--> THEN
        "npm start"


default path:

FRONTEND :: http://localhost:3000/
BACKEND :: http://localhost:3003/

