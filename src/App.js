import './App.css';
import React, {  useState } from 'react'
import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';
import Home from './pages/Home';
import Topic from './pages/Topic';
import Infos from './pages/Infos';
import Error from './pages/Error';

const ThemeContext = React.createContext()

export default function App() {
  const[theme, setTheme] = useState(true)
  const[topic, setTopic] = useState()
  const data = require('./data.json');

  const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/topic/:id",
    element: <Topic />,
  },
  {
    path: "/infos",
    element: <Infos />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);


const settheme = () => {
  setTheme(pre=>!pre)
}

  
  return (
    <>
     <ThemeContext.Provider value={{theme,settheme,data,setTopic}}>
     <RouterProvider router={router} />
     </ThemeContext.Provider>
    </>
      
  );
}

export {ThemeContext}


