/**
 * File: router.js
 * Description: This file defines the router configuration for the application using react-router-dom.
 * It includes routes for the SignIn and SignUp pages, as well as a default route for the Home page.
 */

// Import necessary modules from React and react-router-dom
import { createBrowserRouter } from "react-router-dom";
// Import Pages
import { Home, SignIn, SignUp } from "../pages/index";

// Define the router configuration using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, // Render the SignUp component when the path is "/signup"
  },
  {
    path: "/signIn",
    element: <SignIn />, // Render the SignIn component when the path is "/signin"
    index: true,
  },
  {
    path: "/signUp",
    element: <SignUp />, // Render the SignUp component when the path is "/signup"
  },
]);

export default router;
