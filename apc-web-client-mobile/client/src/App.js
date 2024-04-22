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
import SignUpPage from './pages/SignUpPage';
import SignUpSuccessPage from './pages/SignUpSuccessPage';
import ForgotPassword1Page from './pages/ForgotPassword1Page';
import ForgotPassword2Page from './pages/ForgotPassword2Page';
import ForgotPassword3Page from './pages/ForgotPassword3Page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/login" replace />} /> */}
        <Route path="/" element={<MenuPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/registration-success" element={<SignUpSuccessPage />} />
        <Route path="/forgot-password1" element={<ForgotPassword1Page />} />
        <Route path="/forgot-password2" element={<ForgotPassword2Page />} />
        <Route path="/forgot-password3" element={<ForgotPassword3Page />} />

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
