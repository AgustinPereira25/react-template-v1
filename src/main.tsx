import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './components/layouts/MainLayout.tsx'
import './index.css'
import { Home, About } from './pages'
import { HelmetProvider } from 'react-helmet-async'

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
  //If you want to add some routes,add here, you can also add new layouts and children routes.
  // {
  //   path: '/admin',
  //   element: <DefaultLayout />,
  //   children: [
  //     {
  //       path: '/admin/about',
  //       element: <About />,
  //     },
  //     {
  //       path: '/admin/profile',
  //       element: <Profile />,
  //     },
  //   ],
  // },
]
const router = createBrowserRouter(routes);
const helmetContext = {};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider context={ helmetContext }>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
)

