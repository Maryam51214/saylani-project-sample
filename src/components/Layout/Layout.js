// import React, { Children } from 'react'
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import {Helmet} from "react-helmet";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Layout = ({children,title,description,keywords,author}) => {
  return (
    <div>
      {/* Helmet FOR SEO */}
       <Helmet>
                <meta charSet="utf-8" />
               
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  <meta name="author" content={author} />

                <title>{title}</title>
            </Helmet>
      <Header/>
      <main style={{minHeight:'80vh'}}>
      {/* <Toaster /> */}
      <ToastContainer />

        {children}
        </main>
      <Footer/>
    </div>
  );
};
// to make all pages dynamic

Layout.defaultProps = {
  title: "Ecommerce app - shop now",
  description: "Mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "SaylaniTrust",
};

export default Layout;
