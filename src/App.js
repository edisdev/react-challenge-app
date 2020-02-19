import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';

import Notify from './components/Notify';
import Header from './layouts/Header';
import Content from './layouts/Content';

// ROUTES
import Routes from './router';

function App() {
  return (
    <Router>
      <ToastProvider 
        components={{ Toast: Notify }}
        autoDismiss
        placement='bottom-center'
        autoDismissTimeout={4000}
       >
        <div className="App">
          <Header/>
          <Content>
          <Routes/>
          </Content>
        </div>
      </ToastProvider>
    </Router>
  );
}

export default App;
