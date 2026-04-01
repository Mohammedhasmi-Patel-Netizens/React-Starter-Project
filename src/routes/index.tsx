import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/about",
                element: <h1>about</h1>
            },
            {
                path: "/contact",
                element: <h1>contact</h1>
            }
        ]
    }
]);

export default router;