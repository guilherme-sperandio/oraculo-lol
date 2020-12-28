import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './routes';
import './styles/global.css';
import './styles/reset.css';

function App() {
  return (
    <>
      <Routes/>
      <ToastContainer />
    </>
  );
}

export default App;
