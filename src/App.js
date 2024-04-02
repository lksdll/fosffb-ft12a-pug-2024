import './App.css';
import React, {  useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Topic from './pages/Topic';
import Infos from './pages/Infos';
import Error from './pages/Error';
import Header from './components/Header';

const ThemeContext = React.createContext()

export default function App() {
  const[theme, setTheme] = useState(true)
  const[topic, setTopic] = useState()
  const data = require('./data.json');

  const router = createBrowserRouter([
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
      <Header id={topic}/> 
     <RouterProvider router={router} />
     </ThemeContext.Provider>
    </>
      
  );
}

export {ThemeContext}


