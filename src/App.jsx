import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Perritos from './components/Perritos';

const queryClient = new QueryClient();

function App() {

  return (

    <QueryClientProvider client={queryClient}>

      <Perritos />

    </QueryClientProvider>

  );
}

export default App;
