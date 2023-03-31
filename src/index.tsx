import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { setupStore } from './store';
import { type } from 'os';

const store = setupStore()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export type RootState = ReturnType<typeof store.getState>

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
