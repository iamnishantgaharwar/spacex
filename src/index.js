import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Explore from './components/explore';
import Banner from './components/banner';
import About from './components/about';

const appRouter = createBrowserRouter([{
  path:"/",
  element:<App />,
  children:[{
    path:"/",
    element:<Banner />
  },
  {
    path:"/explore",
    element:<Explore />
  },
  {
    path:"/about",
    element: <About />
  }
]
}
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

