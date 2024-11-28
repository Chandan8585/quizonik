import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider , QuizProvider} from './context/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <QuizProvider>
        <App/>
        </QuizProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

