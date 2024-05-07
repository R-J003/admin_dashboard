import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./home/Home";
import Products from "./product/Products";
import Users from "./user/Users";
import CustomerForm from "./components/form.jsx"

function App() {

  const Layout = ()=> {
    return(
      <div className="main">

      </div>
    )
  }
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <CustomerForm />
      ),
    },

    {
      path: "/users",
      element: <Users />,
    },

    {
      path: "/products",
      element: <Products />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
