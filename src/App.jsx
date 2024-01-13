import { Route, Routes } from 'react-router-dom';
import Homepage from './components/pages/Homepage';

const App = () => {
  return (
    <Routes>
      <Route path="/" Component={Homepage} />
    </Routes>
  );
};

export default App;
