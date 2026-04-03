import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider as ReactRouterProvider,
    Route,
} from "react-router-dom";

const router = createBrowserRouter(
    createRoutesFromElements(
      // Add Routes here
    ),
);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ReactRouterProvider router={router}>
            <App />
        </ReactRouterProvider>
    </StrictMode>,
);
