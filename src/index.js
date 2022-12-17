import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';

// page
import Admin from './pages/admin';
import ArticleMain from './pages/article';
import ArticleRead from './pages/article-read-1';
import BrewFav from './pages/brew-fav';
import BrewGuide from './pages/brew-guide';
import BrewIndex from './pages/brew-index';
import BrewRecipe from './pages/brew-recipe';
import BrewTimer from './pages/brew-timer';
import BrewNew from './pages/brew-new';
import CommuDetail from './pages/commu-detail';
import CommuMain from './pages/commu-main';
import CommuShare from './pages/commu-share';
import CommuShop from './pages/commu-shop';
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
import ArticleReadTwo from './pages/article-read-2';
import ArticleReadThree from './pages/article-read-3';
import ArticleReadFour from './pages/article-read-4';
import ProfileEdit from './pages/profile-edit';

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
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/article",
    element: <ArticleMain />,
  },
  {
    path: "/article-new",
    element: <ArticleNew />,
  },
  {
    path: "/article/1",
    element: <ArticleRead />,
  },
  {
    path: "/article/2",
    element: <ArticleReadTwo />,
  },
  {
    path: "/article/3",
    element: <ArticleReadThree />,
  },
  {
    path: "/article/4",
    element: <ArticleReadFour />,
  },
  {
    path: "/favorite",
    element: <BrewFav />,
  },
  {
    path: "/brew-guide/:id",
    element: <BrewGuide />,
  },
  {
    path: "/brew-recipe/new",
    element: <BrewNew />,
  },
  {
    path: "/brew-recipe",
    element: <BrewRecipe />,
  },
  {
    path: "/brew-recipe/:brewer",
    element: <BrewRecipe />,
  },
  {
    path: "/brew-timer/:id",
    element: <BrewTimer />,
  },
  {
    path: "/brew-recipe/:brewer/edit/:key",
    element: <BrewEdit />,
  },
  {
    path: "/commu-detail",
    element: <ProtectedRoute><CommuDetail /></ProtectedRoute>,
  },
  {
    path: "/commu-main",
    element: <ProtectedRoute><CommuMain /></ProtectedRoute>,
  },
  {
    path: "/commu-share",
    element: <CommuShare />,
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
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/profile-edit",
    element: <ProtectedRoute><ProfileEdit /></ProtectedRoute>,
  },
  {
    path: "offline",
    element: <Offline />,
  },
  {
    path: "*",
    element: <Error />,
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
