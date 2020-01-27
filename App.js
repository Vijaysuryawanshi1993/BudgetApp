import React from 'react';
import { Provider } from 'react-redux';
import store, { persistor } from './app/store';
import { PersistGate } from 'redux-persist/integration/react'
import App from './app/index';
import Container from "./app/components/Container";

const reduxRender = () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}>
        <Container>
          <App />
        </Container>
      </PersistGate>
    </Provider>
  )
}

export default reduxRender;