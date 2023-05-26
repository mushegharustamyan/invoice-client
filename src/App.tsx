import { useDispatch } from 'react-redux';
import './App.css';
import { AppRouter } from './routes/AppRouter';
import { refresh } from './store/reducers/authSlice';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

function App() {
  const dispatch = useDispatch()

  const token = Cookies.get("token")

  token && dispatch(refresh())

  return (
    <div className='App'>
      <AppRouter />
    </div>
  );
}

export default App;
