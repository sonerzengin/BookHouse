import React from "react";
import { Formik } from "formik";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom"
import useNavigate from 'react-router-dom';



const SignUp = () => (


  
  
 
   


  
    <div className="login-page">
       
      <Formik
        initialValues={{username: '',email: '', password: ''}}
        validate={values => {
          const errors = {};
          if (!values.email ) {
            errors.email = 'E-posta boş bırakılamaz';    //hata mesajlari
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
          alert('Kayıt Başarılı')               //onSubmit ile localStorage'a kayit
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
     
            <Button  colorScheme='teal' type="submit" disabled={isSubmitting}>    
              Üye Ol 
            </Button>
            <div className="links">
            <Link className="linkkk" to="/">Geri Dön</Link>
            <Link className="linkkk" to="/login">Giriş Yap</Link>
            </div>
          </form>
        )}
      </Formik>
    </div>
);
  
  export default SignUp;