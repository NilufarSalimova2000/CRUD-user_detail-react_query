import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { client } from './config/query-client.js';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={client}>
    <BrowserRouter><App /></BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    <CssBaseline />
  </QueryClientProvider>
    
)
