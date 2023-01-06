import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/assets/fonts/google.css"
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles/assets/fonts/fontawesome-all.min.css"
import "./styles/assets/fonts/font-awesome.min.css"
import "./styles/assets/fonts/fontawesome5-overrides.min.css"
import "./styles/assets/fonts/ionicons.min.css"
import "./styles/assets/fonts/material-icons.min.css"
import { useEffect } from 'react';
import "./styles/assets/js/bs-init.js"
import ArticleMain from './article';
import ArticleRead from './article-read-1';
import BrewFav from './brew-fav';
import BrewGuide from './brew-guide';
import BrewIndex from './brew-index';
import BrewRecipe from './brew-recipe';
import BrewTimer from './brew-timer';
import BrewNew from './brew-new';
import CommuMain from './commu-main';
import CommuShare from './commu-share';
import Error from './error';
import Offline from './offline';
import Login from './login';
import Register from './register';
import BrewEdit from './brew-edit';
import Profile from './profile';
import ArticleNew from './article-new';

import { useContext, createContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
  Navigate
} from "react-router-dom";
import Test from './test';
import ProfileEdit from './profile-edit';
import BrewFinish from './brew-finish';

const StateContext = createContext(false);

function App() {
    const AuthContext = createContext(null)
    const [update, setUpdate] = useState(false)
    const useAuth = () => {
        return useContext(AuthContext);
    };
    const ProtectedRoute = ({ children }) => {
        const token = localStorage.getItem('token')
    
        if (!token) {
        return <Navigate to="/login" replace />;
        }
    
        return children;
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
      
  return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
  );
}
export { StateContext };
export default App;
