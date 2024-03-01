import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./common/Header";
import SubHeader from "./common/SubHeader";
import HomePage from "./pages/homePage/HomePage";

function App() {
  return (
    <div className="bg-image">
      <Router>
        <div className='background'>
          <Header />
          <SubHeader />

        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
