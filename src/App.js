import './App.css';
import Board from './components/board/Board';
import Layout from './components/layout/Layout';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import loader from './images/loader.gif';
import Login from './components/login/Login';

function App() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return (
      <Layout>
        <div className='loading-image-parent'>
          <img className='loading-image' src={loader} alt='loading' />
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <p>Error: {error}</p>
      </Layout>
    );
  }

  return (
    <div className='App'>
      <Layout>{user ? <Board /> : <Login />}</Layout>
      
    </div>
  );
}

export default App;
