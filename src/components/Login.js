import React from 'react'
import { Formik } from "formik";
import { Button} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import { useState } from "react";

function Login() {
  
    
  

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/`; 
    navigate(path);
  }
       



  return (
    <div className='newlogin'>
     <Formik
        initialValues={{username: '',email: '', password: ''}}
        validate={values => {
          const errors = {};
          if (!values.email) {
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
            
            var x = localStorage.getItem('email');
            var y = localStorage.getItem('password');

            if( x === values.email &&  y === values.password )
             {
                alert('Giriş Başarılı')
                routeChange();
                

                
             } else {
              alert ('Hatalı E-posta ya da şifre.Yeniden Deneyin')
             }
             
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
            
            <Button colorScheme='teal' type="submit" disabled={isSubmitting}>
              Giriş Yap
            </Button>

             
            

          </form>
        )}
      </Formik>
    </div>
  )
}

export default Login;
