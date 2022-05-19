import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateAccount from './components/CreateAccount/CreateAccount';
import Error from './pages/Error/Error';
import GenerateChart from './pages/GenerateChart/GenerateChart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateAccount />} />
          <Route path="/chart" element={<GenerateChart />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
