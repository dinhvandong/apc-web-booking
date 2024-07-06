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
import MyBooking2Page from './pages/MyBooking2Page';
import MyBooking3Page from './pages/MyBooking3Page';
import ItineraryPage from './pages/ItineraryPage';
import ItineraryDetailPage from './pages/ItineraryDetailPage';
import MyBookingImportExcelPage from './pages/MyBookingImportExcelPage';
import HistoryBookingPage from './pages/HistoryBookingPage';
import ConfirmRegisterCodePage from './pages/ConfirmRegisterCodePage';
import ConfirmRegistAccountPage from './pages/ConfirmRegistAccountPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/login" replace />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/confirm-code/:path" element={<ConfirmRegisterCodePage />} />
        <Route path="/confirm-account" element={<ConfirmRegistAccountPage />} />

        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/registration-success" element={<SignUpSuccessPage />} />
        <Route path="/forgot-password1" element={<ForgotPassword1Page />} />
        <Route path="/forgot-password2/:email" element={<ForgotPassword2Page />} />
        <Route path="/forgot-password3" element={<ForgotPassword3Page />} />
        <Route path="/my-booking" element={<MyBookingPage />} />
        <Route path="/my-booking2/:bookingCode" element={<MyBooking2Page />} />
        <Route path="/history-booking" element={<HistoryBookingPage />} />

        <Route path="/my-booking-import-excel/:bookingCode" element={<MyBookingImportExcelPage />} />

        <Route path="/my-booking3/:bookingCode" element={<MyBooking3Page />} />

        {/* <Route path="/admin/gallery/update/:id" element={<GalleryEditPage />} /> */}

        <Route path="/booking-search/:bookingCode" element={<MyBookingSearchPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/contactUs" element={<ContactUsPage />} />

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/galleryDetail/:id" element={<GalleryDetailPage />} />

        <Route path="/tiktok" element={<TiktokVideoPage />} />

        <Route path="/ancillary/:bookingCode" element={<AncillaryPage />} />
        <Route path="/payment-confirm/:bookingCode" element={<PaymentConfirmPage />} />
        <Route path="/booking-success/:bookingCode" element={<BookingSuccessfulPage />} />
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

        <Route path="/itinerary" element={<ItineraryPage />} />
        <Route path="/itinerary-detail/:id" element={<ItineraryDetailPage />} />

        <Route path="/select-your-cabin/flexible" element={<SelectCabinPage />} />
        <Route path="/select-your-cabin/non-refundable" element={<SelectCabinNonRefundPage />} />

        <Route path="/ambassador-suite" element={<AmbassadorSuitePage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
