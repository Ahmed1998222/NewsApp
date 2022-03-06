import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../store';

type ReduxContainerProps = {children: React.ReactChild};
export const ReduxContainer = ({children}: ReduxContainerProps) => (
  <Provider store={store}>{children}</Provider>
);
