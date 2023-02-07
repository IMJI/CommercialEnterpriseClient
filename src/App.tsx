import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppRoutes from './Routes';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {
            AppRoutes.map((route, index) => {
              let { element, ...rest } = route;
              return <Route
                key={index}
                {...rest}
                element={element}
              />
            })
          }
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
