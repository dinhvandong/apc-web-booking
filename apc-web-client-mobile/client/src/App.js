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
import MyBookingPage from './pages/MyBookingPage';
import MyBookingSearchPage from './pages/MyBookingSearchPage';
import ContactPage from './pages/ContactPage';
import AncillaryPage from './pages/AncillaryPage';
import PaymentConfirmPage from './pages/PaymentConfirmPage';
import BookingSuccessfulPage from './pages/BookingSuccessfulPage';
import SelectCabinNonRefundPage from './pages/SelectCabinNonRefundPage';
import GalleryPage from './pages/GalleryPage';
import TiktokVideoPage from './pages/TiktokVideoPage';
import GalleryDetailPage from './pages/GalleryDetailPage';
import ContactUsPage from './pages/ContactUsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import PromotionPage from './pages/PromotionPage';
import PromotionDetailPage from './pages/PromotionDetailPage';
import NotificationPage from './pages/NotificationPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/login" replace />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/registration-success" element={<SignUpSuccessPage />} />
        <Route path="/forgot-password1" element={<ForgotPassword1Page />} />
        <Route path="/forgot-password2" element={<ForgotPassword2Page />} />
        <Route path="/forgot-password3" element={<ForgotPassword3Page />} />
        <Route path="/my-booking" element={<MyBookingPage />} />
        {/* <Route path="/admin/gallery/update/:id" element={<GalleryEditPage />} /> */}

        <Route path="/booking-search/:bookingCode" element={<MyBookingSearchPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/contactUs" element={<ContactUsPage />} />

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/galleryDetail" element={<GalleryDetailPage />} />

        <Route path="/tiktok" element={<TiktokVideoPage />} />

        <Route path="/ancillary" element={<AncillaryPage />} />
        <Route path="/payment-confirm" element={<PaymentConfirmPage />} />
        <Route path="/booking-success" element={<BookingSuccessfulPage />} />
        <Route path="/notification" element={<NotificationPage />} />

        <Route path="/menu" element={<MenuPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/term-condition" element={<TermConditionPage />} />
        <Route path="/plan-cruise/:id" element={<PlanCruisePage />} />
        <Route path="/profile-page" element={<ProfilePage />} />


        <Route path="/news" element={<NewsPage />} />
        <Route path="/news-detail/:id" element={<NewsDetailPage />} />

        <Route path="/promotion" element={<PromotionPage />} />
        <Route path="/promotion-detail/:id" element={<PromotionDetailPage />} />


        <Route path="/select-your-cabin/flexible" element={<SelectCabinPage />} />
        <Route path="/select-your-cabin/non-refundable" element={<SelectCabinNonRefundPage />} />

        <Route path="/ambassador-suite" element={<AmbassadorSuitePage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
