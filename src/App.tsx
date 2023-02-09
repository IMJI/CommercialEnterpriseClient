import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppRoutes from './Routes';
import { GlobalStateProvider } from './context/GlobalContextProvider';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
              <GlobalStateProvider>
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
                </GlobalStateProvider>
            </div>
        </BrowserRouter>
    );
}

export default App;
