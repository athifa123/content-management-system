
import './App.css';
import Header from './components/Header';
import Recentblogs from './components/Recentblogs';
import Viewpage from './components/Viewpage';
import BlogPreview from './components/Previewcard';
import { readDoc } from './firebase/readblog';
import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";


function AppLayout(){
  return (
    <>
      <Header/>
      <Outlet/>
      </>
  );
}


const appRouter = createBrowserRouter ([
  {
    path : '/',
    element : <AppLayout/>,
    children : [
      {
        path : '/createblogs',
        element : <Viewpage/>
      },
      {
        path : '',
        element : <Recentblogs/>
      },
      
    ],
    
  },
  {
    path : '/blog/:id',
    element : <BlogPreview/>,
    loader : async({params}) => { 
      return await readDoc( "blogs" , params.id )

    }
  },
  {
    path : '/blog/:id/edit',
    element : <Viewpage/>,
    loader : async({params}) => { 
      return await readDoc( "blogs" , params.id )

    }
  },


])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router ={appRouter}/>);




