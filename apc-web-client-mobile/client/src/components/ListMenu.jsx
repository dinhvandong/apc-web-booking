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
const ListMenu = () => {
  // const { data } = props;
  // console.log("data:"+ data);
  const navigate = useNavigate();

  const gotoManageBooking = () => {
    console.log('Button clicked!');
  };
  const gotoPromotion = () => {
    console.log('Button clicked!');
  };
  const gotoVoucher = () => {
    console.log('Button clicked!');
  };
  const gotoItinerary = () => {
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
  };
  const gotoGallary = () => {
    console.log('Button clicked!');
  };

  const gotoSetting = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="grid grid-cols-3 md:grid-cols-5 gap-4">

      <ListItem title={iconMenu1} onClick={ gotoManageBooking} description={"Manage Booking"} />

      <ListItem title={iconMenu2} onClick={gotoPromotion } description={"Promotion"} />

      <ListItem title={iconMenu3} onClick={gotoVoucher } description={"Vouchers"} />

      <ListItem title={iconMenu4} onClick={ gotoItinerary} description={"Itinerary"} />

      <ListItem title={iconMenu5} onClick={gotoTc } description={"T&C"} />

      <ListItem title={iconMenu6} onClick={gotoNews } description={"News"} />

      <ListItem title={iconMenu7} onClick={gotoPrivacy } description={"Privacy"} />

      <ListItem title={iconMenu8} onClick={ gotoFq} description={"F&Q"} />

      <ListItem title={iconMenu9} onClick={ gotoContactus} description={"Contact Us"} />

      <ListItem title={iconMenu10} onClick={gotoGallary } description={"Gallery"} />

      <ListItem title={iconMenu11} onClick={gotoSetting } description={"Setting"} />

      {/* {data.map((item, index) => (
        ))} */}
    </div>
  );
};
export default ListMenu;