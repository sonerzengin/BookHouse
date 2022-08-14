import React, { useEffect ,useState } from "react";
import { Formik } from "formik";
import { Button,  } from "@chakra-ui/react";
import { API }  from "../API";
import Home from "../pages/Home";
import { Link } from "react-router-dom"




const SignUp = () => (



   


  
    <div className="login-page">
       
      <Formik
        initialValues={{username: '',email: '', password: ''}}
        validate={values => {
          const errors = {};
          if (!values.email ) {
            errors.email = 'E-mail kısmı boş bırakılamaz';
            errors.password = 'Şifre boş bırakılamaz'
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Geçerli bir adres girin';
          }
          return errors;
          
        }}
         
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            localStorage.setItem('email', values.email);
            localStorage.setItem('username', values.username);
            localStorage.setItem('password', values.password);
            setSubmitting(false);
          }, 400);
          
        }}
        
      >
      
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
         
          
        }) => (
          <form onSubmit={handleSubmit}>

            <div className="formEleman">Kullanıcı Adı</div>
           
           
           
            
            <input type="text"
            name="username"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
            
            />




            
            <div className="formEleman">E-posta Adresiniz</div>
            <div className="errors">{errors.email && touched.email && errors.email}</div> 

            <input type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              
            />
            
            

            <div className="formEleman">Şifre</div>
            <div className="errors">{errors.password && touched.password && errors.password}</div>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            
            
            <br/><br/>
     
            <Link to="/login" className="btn btn-secondary">Kayit Ol</Link>
            

          </form>
        )}
      </Formik>
    </div>
);
  
  export default SignUp;