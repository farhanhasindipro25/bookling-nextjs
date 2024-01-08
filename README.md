# BOOKLING - A web application themed on books.

### FEATURES

1. View top authors.
2. View best selling books.
3. Browse through available books.
4. Login
5. Sort the book data using book publication date and author birthdate.
6. Filter books based on author gender.
7. Filter books based on book category.

### LOGIN CREDENTIALS

email: hello@ongshak.com
password: assignment@ongshak

### 1. SETUP INSTRUCTIONS

1. Clone the Github repository: https://github.com/farhanhasindipro25/bookling-nextjs
2. Open the terminal
3. If you want to check the development environment, then run the following commands

`npm install`

`npm run dev`

or

`yarn install`

`yarn dev`

4. If you want to check the performance optimized app, then run the following commands

`npm install`

`npm run build`

`npm run start`

or

`yarn install`

`yarn build`

`yarn start`

### 2. CODE STRUCTURE

### 3. TECHNOLOGIES USED

1. NextJS - A ReactJS Framework

**Why I used it?**

- NextJS provides the best performance, maintainability and scalability based on the following features.
  - **Folder based routing.**
  - **Next Link component** to ensure SPA.
  - **Next Image component** to optimize the appearance and performance of high resolution images.
  - NextJS Hooks like **useRouter, usePathname** to programmatically route through pages or read active routes.
  - By using all of these, I am trading off **React Router DOM** which would have been an extra library for these tasks.
  - Layouts can be made easier with the **layout.jsx** file.
  - Maintaining good architecture and system design is easier with the **NextJS 14 App Router**.
  - Being able to separate client and server components is easier with **NextJS 14 App Router**.
  - API calls can be done efficiently and separately in server components using **"use server"** and the client components can be maintained separately using **"use client"**

2. TailwindCSS - A utility first CSS framework

**Why I used it?**

- TailwindCSS allows to apply styles directly in your HTML using pre-defined utility classes, making development faster and more efficient.
- Responsiveness is much easier and efficient.
- Easier to debug and maintain.

3. Framer Motion - A popular animation library for React.

**Why I used it?**

- It is highly compatible with ReactJS.
- The animation integrations are smooth and well structured.

4. mockbin - A tool for inspecting and debugging HTTP requests.

**Why I used it?**

- It allows you to create custom HTTP endpoints for testing and development, making it easier to simulate different scenarios.

5. clsx - A utility function for constructing class names in a concise and flexible way.

**Why I used it?**

- It's commonly used in React applications to conditionally apply CSS classes based on certain conditions.

6. tw-merge - A utility for merging Tailwind CSS classes.

**Why I used it?**

- It's often used in conjunction with Tailwind to dynamically generate class names based on certain conditions.

7. class-variance-authority - It is a library to manage variants, sizes of UI components efficiently.

**Why I used it?**

- Helps with easier scalability while there are a lot of variants

8. formik - A form management library for React

**Why I used it?**

- It simplifies the process of building and validating forms.

9. yup - A JavaScript schema validation library that works well with Formik.

**Why I used it?**

- It allows to define a schema for the data and validate that data against the schema, providing robust form validation.

10. React Hot Toast- A toast notification library for React applications.

**Why I used it?**

- It provides an easy way to display non-intrusive notifications to users, making it useful for showing alerts or messages.

11. React Select - A flexible and customizable dropdown/select component for React.

**Why I used it?**

- It offers a range of features like multi-select, search capabilities, and styling options for enhancing the user experience with dropdowns.

12. Tanstack Query - Tanstack Query is a data fetching library for React applications.

**Why I used it?**

- It simplifies the process of fetching, caching, and updating data from the API, making it easier to manage and optimize data fetching.

13. HeadlessUI - A set of unstyled, fully accessible UI components for building custom designs

**Why I used it?**

- It provides a solid foundation for creating accessible user interfaces while giving developers the flexibility to style components as needed.

14. HeroIcons - A set of free, MIT-licensed high-quality SVG icons

**Why I used it?**

- They work well with TailwindCSS
- The icons are well designed

### 4. ANIMATION EXPLANATION

- I used basic animations on hover using TailwindCSS on the landing page's hero section. On hover, you will find the following effects as small animations.

  - Scaling: Increasing or decreasing the size of the entity.
  - Rotating: Moving the entity based on a certain degree.

- The main animations include a fade in effect on scroll that is achieved using framer motion. This fade in effect can be seen in:
  - Landing Page:
    - Hero Section
    - Top Authors Section
    - Best Selling Section
    - Literary Treasures Section
  - Find Books Page
  - Books Page
- How I thought of the animation?
  - The hero section is divided into three parts. So I thought of fading in the three parts from 3 different positions which is achieved through respective variants that I have assigned to the respective divs of the three parts.
- Why I uses Framer Motion?
  - Framer Motion is specifically designed for React. It seamlessly integrates with React applications.
  - Framer Motion uses a declarative syntax that aligns well with React's approach. Animations can be defined using JSX, making it more intuitive for development.
  - Framer Motion is designed to be lightweight, and we can import only the components needed, helping to keep the bundle size smaller.

### 5. API INTEGRATION

#### Api Endpoints

- I have used Mockbin to generate mock APIs for the following.
- List of API endpoints are as follows

  - Top Authors
    `https://41231d0c5b864045b6e5589a149588a2.api.mockbin.io/`

  - Best Selling Books
    `https://41e043d9c98f4dfd98822634f8d9f4ba.api.mockbin.io/`

  - Global Books List
    `https://809d943e48f84a3792f00683a8783014.api.mockbin.io/`

  - Login
    `https://assignment.ongshak.com/rest-auth/login/`

#### Folder Structure

**THE SERVER SIDE**

- I have kept a folder named **services**
- For all the respective features that needed an API, I have kept individual respective files for those services.
- Each of these files are responsible for making HTTP requests to the API endpoint and fetching the data in JSON format.
- Each of these service files uses the "use server" directive to enhance server actions.

**THE CLIENT SIDE**

- Now for the client side, I am making the API call using Tanstack Query.
- The query Function in the UseQuery hook calls the specific service to make the API call.
- I use the **isLoading** flag to show a loading skeleton for each list view during the time taken to load the data.
- I use the **isError** flag to render an error component whenever the server is compromised, or faces a 500 (Internal Server Error).

### 6. AUTHENTICATION

**JSON WEB TOKENS (JWT)**
It is a compact, URL-safe means of representing claims to be transferred between two parties. This token format is often used for authentication and authorization purposes in web development and APIs.

This token acts as the entity that can allow accessing a certain route (the secret door). This key will contain user specific information which authorizes that it is me who is claiming to be me. This token cannot be a fake generated token by someone else as it has a hidden signature. So the token itself is powerful enough to authorize a user.

**How I implemented it**

- For authentication I used Context API
- In the Authprovider,
  - I use a state to store the data of the user.
  - I check if a user is authenticated or not.
- The login page uses formik and yup to ensure form validation with required fields, valid email addresses and passwords with minimum 6 characters.
- In the login page, at first the Context API is called to set the user data in the state. Then the token is set to localStorage and redirected to the private route. While this happens, a toast shows if the login was successfull or failed.
- To ensure the protection of the private route directly being visited by the URL, I have used a wrapper called AuthGuardHOC.
- The AuthGuardHOC checks if the user is logged in or not.
- This component is wrapped around the protected route which can only be visited after login.

### 7. DEPLOYMENT

- I used Vercel to deploy the web app.
- The deployed link is dependent on the **main** branch of the github repository.
- Whenever I push code into the main branch, the deployment is automatically active.
- Of course, the builds need to pass for this.

### 8. CHALLENGES & VICTORIES

**VICTORIES**

- I developed this project with sheer enthusiasm and passion for design and frontend engineering.
- I am really happy with the outcome, how I maintained the system design, maintained clean design patterns with **SOLID** and **DRY** approaches.

**CHALLENGES**

- The API endpoint given for login has a CORS error in it
- Thus, I have kept a private route, so that if you fix the CORS error, that route can be visited to test that task.
- I have also kept a public route with the same UI for testing.