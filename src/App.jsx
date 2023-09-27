import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {HomePage} from "./component/home/HomePage";
import {Footer} from "./component/footer/Footer";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: "/footer",
        element: <Footer/>,
    },
]);

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App
