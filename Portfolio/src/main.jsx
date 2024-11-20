import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
 
// import ReactDOM from 'react-dom/client'
// // Bringing in the required imports from 'react-router-dom' to set up application routing behavior
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css'

// import App from './App';
// import Error from './pages/Error';
// // import AboutMe from './pages/AboutMe';
// import Portfolio from './pages/Portfolio';
// import Resume from './pages/Resume';
// import Contact from './pages/Contact';

// // Define the accessible routes, and which components respond to which URL
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <Error />,
//     children: [
//       {
//         index: true,
//         element: <About/>,
//       },
//       {
//         path: '/Portfolio',
//         element: <Portfolio/>,
//       },
//       {
//         path: '/Resume',
//         element: <Resume/>,
//       },
//       {
//         path: '/Contact',
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router} />
// );
