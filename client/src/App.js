import {createBrowserRouter, RouterProvider} from "react-router-dom"

import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  const router =createBrowserRouter([
    {
      path: "/inscription",
      element:<Register/>
    },
{
path: "/connexion",
element:<Login/>
}
  ])


  return (
    <div className="App">
      <header className="App-header">
    <RouterProvider router={router}/>
        <h1>go</h1>
      </header>
    </div>
  );
}

export default App;
