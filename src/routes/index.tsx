import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Signup from "../pages/Signup";
import Login from "../pages/Login";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element:<Signup />
            },
            {
                path: "/login",
                element: <Login/>
            }
        ]
    }
]);

export default router;