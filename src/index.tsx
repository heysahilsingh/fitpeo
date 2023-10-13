import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { appRoutes } from './app/App.tsx'

ReactDOM.createRoot(document.getElementById('main')!).render(
  <RouterProvider router={appRoutes} />
)

// ReactDOM.createRoot(document.getElementById('main')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )
