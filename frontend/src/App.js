import { Registration } from "./pages/Registration/Registration.jsx";
import { Login } from "./pages/Login/Login.jsx";
import { Home } from "./pages/Home/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProtectedRoutes } from "./component/ProtectedRoutes/ProtectedRoutes.jsx";
import { Order } from "./pages/Order/Order.jsx";

function App() {
  const routes = [
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Registration />,
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/orders",
      element: (
        <ProtectedRoutes>
          <Order />
        </ProtectedRoutes>
      ),
    },
  ];
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route path={route.path} element={route.element} key={index} />
          ))}
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
