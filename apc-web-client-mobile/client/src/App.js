import './App.css';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MenuPage from './pages/MenuPage';
import FaqPage from './pages/FaqPage';
import TermConditionPage from './pages/TermConditionPage';
import NewsPage from './pages/NewsPage';
import PlanCruisePage from './pages/PlanCruisePage';
import SelectCabinPage from './pages/SelectCabinPage';
import AmbassadorSuitePage from './pages/AmbassadorSuitePage';
import SignInPage from './pages/SignInPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/login" replace />} /> */}
        <Route path="/" element={<MenuPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/faq" element={<FaqPage/>}/>
        <Route path="/term-condition" element={<TermConditionPage/>}/>
        <Route path="/plan-cruise" element={<PlanCruisePage/>}/>
        <Route path="/profile-page" element={<ProfilePage/>}/>
        <Route path="/news" element={<NewsPage/>}/>
        <Route path="/select-your-cabin" element={<SelectCabinPage/>}/>
        <Route path="/ambassador-suite" element={<AmbassadorSuitePage/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
