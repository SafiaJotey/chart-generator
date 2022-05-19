import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateAccount from './components/CreateAccount/CreateAccount';
import GenerateChart from './pages/GenerateChart/GenerateChart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateAccount />} />
          <Route path="/chart" element={<GenerateChart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
