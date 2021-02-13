import React from 'react';
import { appStore } from './appStore';
export const StoreContext = React.createContext(new appStore() ); 