import ListItem from "./ListItem";
import iconMenu1 from '../assets/icon-menu1.png'
import iconMenu2 from '../assets/icon-menu2.png'
import iconMenu3 from '../assets/icon-menu3.png'
import iconMenu4 from '../assets/icon-menu4.png'
import iconMenu5 from '../assets/icon-menu5.png'
import iconMenu6 from '../assets/icon-menu6.png'
import iconMenu7 from '../assets/icon-menu7.png'
import iconMenu8 from '../assets/icon-menu8.png'
import iconMenu9 from '../assets/icon-menu9.png'
import iconMenu10 from '../assets/icon-menu10.png'
import iconMenu11 from '../assets/icon-menu11.png'
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";
import { authenticated } from "../services/api";

const ListMenu = () => {

  const [user, setUser] = useState(null);

    useEffect(() => {
        const checkAuthentication = async () => {
          const authentic = await authenticated();
          console.log("authentic", authentic);
          if (!authentic || authentic == null) {
            // navigate('/sign-in');
            setUser(null);
          } else {
            setUser(authentic);
          }
        };
          // eslint-disable-next-line react-hooks/exhaustive-deps
        checkAuthentication();
      }, []);

  const { t } = useTranslation();

  // const { data } = props;
  // console.log("data:"+ data);
  const navigate = useNavigate();

  const gotoManageBooking = () => {
    console.log('Button clicked!');
    if(user != null){
      navigate("/history-booking");

    }else {

      alert("You must login before go to history booking!")
    }
  };
  const gotoPromotion = () => {
    console.log('Button clicked!');
    navigate("/promotion");

  };
  const gotoVoucher = () => {
    console.log('Button clicked!');
  };
  const gotoItinerary = () => {

    navigate("/itinerary");

    console.log('Button clicked!');
  };
  const gotoTc = () => {
    console.log('Button clicked!');
    navigate("/term-condition");

  };
  const gotoNews = () => {
    console.log('Button clicked!');
    navigate("/news");

  };
  const gotoPrivacy = () => {
    console.log('Button clicked!');
    navigate("/term-condition");
    //term-condition
  };
  const gotoFq = () => {
    console.log('Button clicked!');
    navigate("/faq")
  };
  const gotoContactus = () => {
    console.log('Button clicked!');
    navigate('/contactUs');
  };
  const gotoGallary = () => {
    console.log('Button clicked!');
    navigate('/gallery');

  };

  const gotoSetting = () => {
    console.log('Button clicked!');
  };

  // btnMn_ManageBooking:"管理预订",
  // btnMn_Promotion: "促销",
  // btnMn_Vouchers:"优惠券",
  // btnMn_Itinerary:"行程",
  // btnMn_Tc:"条款和条件",
  // btnMn_News :"新闻",
  // btnMn_Privacy:"隐私",
  // btnMn_FaQ:"常见问题",
  // btnMn_ContactUs:"联系我们",
  // btnMn_Gallery:"图库",
  // btn_Setting:"设置"
  return (
    <div className="grid grid-cols-3 gap-4 md:grid-cols-5">

      <ListItem title={iconMenu1} onClick={ gotoManageBooking} description={ t(`btnMn_ManageBooking`)} />

      <ListItem title={iconMenu2} onClick={gotoPromotion } description={t(`btnMn_Promotion`)} />

      <ListItem title={iconMenu3} onClick={gotoVoucher } description={t(`btnMn_Vouchers`)} />

      <ListItem title={iconMenu4} onClick={ gotoItinerary} description={t(`btnMn_Itinerary`)} />

      <ListItem title={iconMenu5} onClick={gotoTc } description={t(`btnMn_Tc`)} />

      <ListItem title={iconMenu6} onClick={gotoNews } description={t(`btnMn_News`)} />

      <ListItem title={iconMenu7} onClick={gotoPrivacy } description={t(`btnMn_Privacy`)} />

      <ListItem title={iconMenu8} onClick={ gotoFq} description={t(`btnMn_FaQ`)} />

      <ListItem title={iconMenu9} onClick={ gotoContactus} description={t(`btnMn_ContactUs`)} />

      <ListItem title={iconMenu10} onClick={gotoGallary } description={t(`btnMn_Gallery`)} />

      <ListItem title={iconMenu11} onClick={gotoSetting } description={t(`btn_Setting`)} />

      {/* {data.map((item, index) => (
        ))} */}
    </div>
  );
};
export default ListMenu;