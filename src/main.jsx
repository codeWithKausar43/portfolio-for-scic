import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './components/RootLayout.jsx'

import MyTechnologies from './components/MyTechnologies.jsx'
import RecentProjects from './components/RecentProjects.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element: <RootLayout/>,
    children:[
      {
        path: "/",
        element: <App/>,
      },
      {
        path:'/myTechnologies',
        element:<MyTechnologies></MyTechnologies>
    
      },
      {
        path:'/projects',
        element:<RecentProjects></RecentProjects>
    
      }
    ]
  }
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}  />
  </StrictMode>,
)
