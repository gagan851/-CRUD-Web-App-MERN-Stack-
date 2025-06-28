import User from './getUser/User';
import './App.css';
import Adduser from './AddUser/Adduser';
import Update from './UpdateUser/Update';
import {RouterProvider,createBrowserRouter} from "react-router-dom";


function App() {
  const route =  createBrowserRouter([
    {
      path: "/",
      element: <User />,
    },
    {
      path: "/add",
      element: <Adduser/>,
    },
    {
      path: "/update/:id",
      element: <Update/>    }
  ])
  return (
    <div className="App">
        <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
