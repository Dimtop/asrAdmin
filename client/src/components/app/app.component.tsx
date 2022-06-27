import './app.css';
import AppRouter from '../appRouter/appRouter.component';
import useCurrentUserData from "../../hooks/useCurrentUserData.hook"
import Cookies from 'js-cookie';

function App() {


  useCurrentUserData();

  return (
    <>
    <AppRouter/>
    </>
  );
}

export default App;
