import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// page
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/assets/fonts/google.css"
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles/assets/fonts/fontawesome-all.min.css"
import "./styles/assets/fonts/font-awesome.min.css"
import "./styles/assets/fonts/fontawesome5-overrides.min.css"
import "./styles/assets/fonts/ionicons.min.css"
import "./styles/assets/fonts/material-icons.min.css"

import "./styles/assets/js/bs-init.js"
import ArticleMain from './pages/article';
import ArticleRead from './pages/article-read-1';
import BrewFav from './pages/brew-fav';
import BrewGuide from './pages/brew-guide';
import BrewIndex from './pages/brew-index';
import BrewRecipe from './pages/brew-recipe';
import BrewTimer from './pages/brew-timer';
import BrewNew from './pages/brew-new';
import CommuMain from './pages/commu-main';
import CommuShare from './pages/commu-share';
import Error from './pages/error';
import Offline from './pages/offline';
import Login from './pages/login';
import Register from './pages/register';
import BrewEdit from './pages/brew-edit';
import Profile from './pages/profile';
import ArticleNew from './pages/article-new';

import './i18n';
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// css
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
  Navigate
} from "react-router-dom";
import Test from './pages/test';
import ProfileEdit from './pages/profile-edit';
import BrewFinish from './pages/brew-finish';

const AuthContext = createContext(null)
 const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token')
  
    if (!token) {
      return <Navigate to="/login" replace />;
    }
  
    return children;
  };
  
 export const useAuth = () => {
    return useContext(AuthContext);
  };
const fakeAuth = () => new Promise((resolve) => {
    setTimeout(() => resolve('2342f2f1d131rf12'), 250);
  });
const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const handleLogin = async () => {
      const token = await fakeAuth()
      setToken(token);
      alert(token)
    };
  
    const handleLogout = () => {
      setToken(null);
    };
  
    const value = {
      token,
      onLogin: handleLogin,
      onLogout: handleLogout,
    };
  
    return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    );
  };

const router = createBrowserRouter([
  {
    path:"/test",
    element: <Test />,
  },
  {
    path: "/",
    element: <BrewIndex />,
  },
  {
    path: "/article",
    element: <ArticleMain />,
    //errorElement:<Error />,
  },
  {
    path: "/article-new",
    element: <ProtectedRoute><ArticleNew /></ProtectedRoute>,
    //errorElement:<Error />,
  },
  {
    path: "/article/:id",
    element: <ArticleRead />,
    //errorElement:<Error />,
  },
  {
    path: "/favorite",
    element: <ProtectedRoute><BrewFav /></ProtectedRoute>,
    //errorElement:<Error />,
  },
  {
    path: "/brew-recipe/:brewer/:id",
    element: <BrewGuide />,
    //errorElement:<Error />,
  },
  {
    path: "/brew-recipe/new",
    element: <ProtectedRoute><BrewNew /></ProtectedRoute>,
  },
  {
    path: "/brew-recipe/:brewer",
    element: <BrewRecipe />,
    //errorElement:<Error />,
  },
  {
    path: "/brew-recipe/:brewer/timer/:id",
    element: <BrewTimer />,
  },
  {
    path: "/brew-recipe/:brewer/edit/:id",
    element: <ProtectedRoute><BrewEdit /></ ProtectedRoute>,
  },
  {
    path: "/brew-recipe/:brewer/share/:id",
    element: <ProtectedRoute><CommuShare /></ProtectedRoute>,
    //errorElement:<Error />,
  },
  {
    path: "/community",
    element: <ProtectedRoute><CommuMain /></ProtectedRoute>,
    //errorElement:<Error />,
  },
  {
    path: "/error",
    element: <Error />,
  },
  {
    path: "/offline",
    element: <Offline />,
  },
  {
    path: "/login",
    element: <Login />,
    //errorElement:<Error />,
  },
  {
    path: "/register",
    element: <Register />,
    //errorElement:<Error />,
  },
  {
    path: "/profile",
    element: <Profile />,
    //errorElement:<Error />,
  },
  {
    path: "/profile-edit",
    element: <ProtectedRoute><ProfileEdit /></ProtectedRoute>,
    //errorElement:<Error />,
  },
  {
    path: "/offline",
    element: <Offline />,
    //errorElement:<Error />,
  },
  {
    path: "/brew-recipe/finish",
    element: <BrewFinish />,
    //errorElement:<Error />,
  },
  {
    path: "*",
    element: <Error />,
    //errorElement:<Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorkerRegistration.register();
