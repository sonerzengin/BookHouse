import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChakraProvider } from '@chakra-ui/react'
import {QueryClient,QueryClientProvider,} from '@tanstack/react-query'
import { UserContextProvider } from './context/UserContext'
import { BasketProvider } from './context/BasketContext';


const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient()


root.render(
  <React.StrictMode>
    <BasketProvider>
    <UserContextProvider>
     <QueryClientProvider client={queryClient}>
        <ChakraProvider>
           <BrowserRouter>
             <App />
           </BrowserRouter>
        </ChakraProvider>
      </QueryClientProvider>
    </UserContextProvider> 
    </BasketProvider>
  </React.StrictMode>
);


reportWebVitals();
