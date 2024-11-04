import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BackendApiServiceProvider } from './context/BackendApiContext/index.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BackendApiServiceProvider>
        <App />
      </BackendApiServiceProvider>
    </QueryClientProvider>
  </StrictMode>,
)
