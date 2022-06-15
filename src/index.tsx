import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer } from 'miragejs';
import { App } from './App';

createServer({
  routes() {
    //Diz que todas as chamadas para api estão apartir do "/api" da URL da rota
    this.namespace = 'api';
    //delay
    this.timing = 2000;

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Desenvolvimento de website',
          amount: 14.000,
          type: 'deposit',
          category: 'Desenvolvimento',
          createdAt: new Date(),
        }
      ]
    });
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);