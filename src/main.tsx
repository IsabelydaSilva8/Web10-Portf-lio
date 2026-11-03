import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home'
import ListMob from './pages/listMob/ListMob'
import ListWeb from './pages/listWeb/ListWeb'
import PageDetail from './pages/pageDetail/PageDetail'

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/projects/web", element: <ListWeb /> },
  { path: "/projects/mob", element: <ListMob /> },
  { path: "/project/:id", element: <PageDetail /> }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)