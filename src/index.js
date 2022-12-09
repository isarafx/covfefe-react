import React from 'react';
import ReactDOM from 'react-dom/client';
// page
import Admin from './pages/admin';
import ArticleMain from './pages/article';
import ArticleRead from './pages/article-read';
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
// css


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
const router = createBrowserRouter([
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
    path: "/article/:id",
    element: <ArticleRead />,
  },
  {
    path: "/brew-fav",
    element: <BrewFav />,
  },
  {
    path: "/brew-guide",
    element: <BrewGuide />,
  },
  {
    path: "/brew-new",
    element: <BrewNew />,
  },
  // {
  //   path: "/brew-recipe",
  //   element: <BrewRecipe />,
  // },
  {
    path: "/brew-recipe/:id",
    element: <BrewRecipe />,
  },
  {
    path: "/brew-timer/:id",
    element: <BrewTimer />,
  },
  {
    path: "/brew-edit",
    element: <BrewEdit />,
  },
  {
    path: "/commu-detail",
    element: <CommuDetail />,
  },
  {
    path: "/commu-main",
    element: <CommuMain />,
  },
  {
    path: "/commu-share",
    element: <CommuShare />,
  },
  {
    path: "/commu-shop",
    element: <CommuShop />,
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
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
