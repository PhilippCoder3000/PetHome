import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/configureStore';

function StoreProvider({ children }: React.PropsWithChildren) {
  return <Provider store={store}>{children}</Provider>;
}

export default StoreProvider;
