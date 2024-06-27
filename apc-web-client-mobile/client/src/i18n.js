import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Language resources
const resources = {
  en: {
    translation: {
      greeting: 'Hello!',
      message: 'Welcome to my app.',
      menuHome: 'Home',
      menuMyBooking: 'My Booking',
      menuPlanYourCruise: 'Plan your cruise',
      menuAccount: "Account",
      menuMenu: "Menu",
      topic1: "Unveil the Breathtaking Splendor",
      topic2: "Indulge in Exquisite Relaxation",
      topic3: "Embark on a Gastronomic Journey",
      topic4: "Capture Your Timeless Memories",
      topic5: "Plan Your Halong Bay Cruise",
      topicDetail1: "Bask in the awe-inspiring beauty of Halong Bay from the Ambassador Cruise's twin sundecks, offering stunning panoramic views that will leave you in awe.",
      topicDetail2: " Relax in style amidst the breathtaking scenery of Halong Bay on Ambassador Cruise's premium cabins with stunning mesmerizing views.",
      topicDetail3: " Embark on a culinary adventure with Ambassador Cruise, and savor finest flavors while enjoying stunning views and an intimate atmosphere.",
      topicDetail4: " Create timeless memories with your loved ones on extraordinary voyage aboard Ambassador Cruise, cherishing every precious moment together.",
      topicDetail5: "Uncover the UNESCO World Heritage Site - Halong Bay, embark on the largest premium Ambassador Cruise for an astonishing experience.",
      buttonPlansCruise: "Day Cruise",
      buttonOvernightCruise: "Dinner Cruise",
      btnMn_ManageBooking:"Manage Booking",
      btnMn_Promotion: "Promotion",
      btnMn_Vouchers:"Vouchers",
      btnMn_Itinerary:"Itinerary",
      btnMn_Tc:"Term & Condition",
      btnMn_News :"News",
      btnMn_Privacy:"Privacy",
      btnMn_FaQ:"F&Q",
      btnMn_ContactUs:"Contact Us",
      btnMn_Gallery:"Gallery",
      btn_Setting:"Setting"

    }
  },
  fr: {
    translation: {
      greeting: 'Bonjour!',
      message: 'Bienvenue sur mon application.',
      menuHome: 'Home',
      menuMyBooking: '',
      menuPlanYourCruise: 'Plan your cruise',
      menuAccount: "Account",
      menuMenu: "Menu",
      topic1: "Unveil the Breathtaking Splendor",
      topic2: "Indulge in Exquisite Relaxation",
      topic3: "Embark on a Gastronomic Journey",
      topic4: "Capture Your Timeless Memories",
      topic5: "Plan Your Halong Bay Cruise",
      topicDetail1: "Bask in the awe-inspiring beauty of Halong Bay from the Ambassador Cruise's twin sundecks, offering stunning panoramic views that will leave you in awe.",
      topicDetail2: " Relax in style amidst the breathtaking scenery of Halong Bay on Ambassador Cruise's premium cabins with stunning mesmerizing views.",
      topicDetail3: " Embark on a culinary adventure with Ambassador Cruise, and savor finest flavors while enjoying stunning views and an intimate atmosphere.",
      topicDetail4: " Create timeless memories with your loved ones on extraordinary voyage aboard Ambassador Cruise, cherishing every precious moment together.",
      topicDetail5: "Uncover the UNESCO World Heritage Site - Halong Bay, embark on the largest premium Ambassador Cruise for an astonishing experience.",
      buttonPlansCruise: "Day Cruise",
      buttonOvernightCruise: "Dinner Cruise",
      btnMn_ManageBooking:"Manage Booking",
      btnMn_Promotion: "Promotion",
      btnMn_Vouchers:"Vouchers",
      btnMn_Itinerary:"Itinerary",
      btnMn_Tc:"Term & Condition",
      btnMn_News :"News",
      btnMn_Privacy:"Privacy",
      btnMn_FaQ:"F&Q",
      btnMn_ContactUs:"Contact Us",
      btnMn_Gallery:"Gallery",
      btn_Setting:"Setting"
    }
  },
  vi: {
    translation: {
      greeting: 'Xin chào!',
      message: 'Chào mừng bạn đến với ứng dụng của tôi.',
      menuHome: 'Trang chủ',
      menuMyBooking: 'Đặt phòng của tôi',
      menuPlanYourCruise: 'Plan your cruise',
      menuAccount: "Tài khoản",
      menuMenu: "Hạng mục",
      topic1: "Tiết lộ vẻ đẹp lộng lẫy ngoạn mục",
      topic2: "Thưởng thức sự thư giãn tinh tế",
      topic3: "Bắt đầu hành trình ẩm thực",
      topic4: "Ghi lại những kỷ niệm vượt thời gian của bạn",
      topic5: "Lên kế hoạch cho chuyến du ngoạn Vịnh Hạ Long của bạn",
      topicDetail1: "Đắm mình trong vẻ đẹp đầy cảm hứng của Vịnh Hạ Long từ boong tắm nắng đôi của Ambassador Cruise, mang đến tầm nhìn toàn cảnh tuyệt đẹp khiến bạn phải kinh ngạc.",
      topicDetail2: "Thư giãn thật phong cách giữa khung cảnh ngoạn mục của Vịnh Hạ Long trên các cabin cao cấp của Ambassador Cruise với khung cảnh mê hoặc tuyệt đẹp.",
      topicDetail3: "Bắt tay vào cuộc phiêu lưu ẩm thực với Ambassador Cruise và thưởng thức những hương vị tuyệt vời nhất trong khi tận hưởng khung cảnh tuyệt đẹp và bầu không khí thân mật.",
      topicDetail4: "Tạo nên những kỷ niệm vượt thời gian cùng những người thân yêu của bạn trong chuyến hành trình đặc biệt trên du thuyền Ambassador, cùng nhau trân trọng từng khoảnh khắc quý giá.",
      topicDetail5: "Khám phá Di sản Thế giới được UNESCO công nhận - Vịnh Hạ Long, bắt tay vào Du thuyền Ambassador cao cấp lớn nhất để có trải nghiệm đáng kinh ngạc.",
      buttonPlansCruise: "Đi trong ngày",
      buttonOvernightCruise: "Đi qua đêm",
      btnMn_ManageBooking:"Quản lý đặt chỗ",
      btnMn_Promotion: "Khuyến mãi",
      btnMn_Vouchers:"Phiếu thưởng",
      btnMn_Itinerary:"Hành trình",
      btnMn_Tc:"Điều khoản & Điều kiện",
      btnMn_News :"Tin tức",
      btnMn_Privacy:"Quyền riêng tư",
      btnMn_FaQ:"Hỏi đáp",
      btnMn_ContactUs:"Liên hệ với chúng tôi",
      btnMn_Gallery:"Thư viện",
      btn_Setting:"Cài đặt"






    }
  },
  ko: {
    translation: {
      greeting: '안녕하세요!',
      message: '내 앱에 오신 것을 환영합니다.',
      menuHome: '홈 메뉴',
      menuMyBooking: '내 예약',
      menuPlanYourCruise: '크루즈 계획을 세우세요',
      menuAccount: "계정",
      menuMenu: "메뉴",
      topic1: "숨막히는 화려함을 공개하다",
      topic2: "절묘한 휴식에 빠지다",
      topic3: "미식 여행을 떠나다",
      topic4: "시대를 초월한 추억을 포착하세요",
      topic5: "하롱베이 크루즈 계획하기",
      topicDetail1: "경외심을 불러일으키는 멋진 파노라마 전망을 제공하는 앰버서더 크루즈의 트윈 선데크에서 하롱베이의 장엄한 아름다움을 만끽하세요.",
      topicDetail2: "눈부시게 매혹적인 전망을 자랑하는 앰배서더 크루즈의 프리미엄 선실에서 하롱베이의 숨막히는 풍경 속에서 스타일리쉬하게 휴식을 취해보세요.",
      topicDetail3: "앰배서더 크루즈(Ambassador Cruise)와 함께 요리 모험을 시작하고 멋진 전망과 친밀한 분위기를 즐기면서 최고의 맛을 맛보세요.",
      topicDetail4: "소중한 모든 순간을 함께 소중히 여기며 앰버서더 크루즈를 타고 특별한 항해를 통해 사랑하는 사람들과 함께 시간이 흘러도 변치 않는 추억을 만들어보세요.",

      topicDetail5: "유네스코 세계문화유산인 하롱베이를 발견하고, 놀라운 경험을 위해 가장 큰 프리미엄 앰배서더 크루즈에 승선하세요.",
      buttonPlansCruise: "데이 크루즈",
      buttonOvernightCruise: "오버나이트 크루즈",
      btnMn_ManageBooking:"예약 관리",
      btnMn_Promotion: "승격",
      btnMn_Vouchers:"상품권",
      btnMn_Itinerary:"여행 일정",
      btnMn_Tc:"이용 약관",
      btnMn_News :"뉴스",
      btnMn_Privacy:"개인정보 보호",
      btnMn_FaQ:"질문&질문",
      btnMn_ContactUs:"문의하기",
      btnMn_Gallery:"갤러리",
      btn_Setting:"설정"





    }
  },
  zh: {
    translation: {
      greeting: '你好！',
      message: '欢迎来到我的应用。',
      menuHome: '主菜单',
      menuMyBooking: '我的预订',
      menuPlanYourCruise: '计划你的游轮',
      menuAccount: "帐户",
      menuMenu: "菜单",
      topic1: "揭开令人惊叹的壮丽景色",
      topic2: "尽情享受精致的放松",
      topic3: "踏上美食之旅",
      topic4: "捕捉您永恒的回忆",
      topic5: "规划您的下龙湾游轮之旅",
      topicDetail1: "大使邮轮的双日光浴甲板可让您尽情享受令人惊叹的下龙湾美景，壮丽的全景将让您惊叹不已。",
      topicDetail2: "大使邮轮的高级客舱可让您在下龙湾的壮丽景色中尽情放松，欣赏迷人的景色。",
      topicDetail3: "跟随大使邮轮踏上美食之旅，在壮丽景色和温馨氛围中品尝最美味的食物。",
      topicDetail4: "乘坐大使邮轮，与亲朋好友一起踏上非凡的旅程，创造永恒的回忆，珍惜在一起的每一个珍贵时刻。",
      topicDetail5: "探索联合国教科文组织世界遗产 - 下龙湾，登上最大的高级大使邮轮，享受令人惊叹的体验。",
      buttonPlansCruise: "日间巡游",
      buttonOvernightCruise: "夜间巡游",
      btnMn_ManageBooking:"管理预订",
      btnMn_Promotion: "促销",
      btnMn_Vouchers:"优惠券",
      btnMn_Itinerary:"行程",
      btnMn_Tc:"条款和条件",
      btnMn_News :"新闻",
      btnMn_Privacy:"隐私",
      btnMn_FaQ:"常见问题",
      btnMn_ContactUs:"联系我们",
      btnMn_Gallery:"图库",
      btn_Setting:"设置"

    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    interpolation: {
      escapeValue: false // React already escapes the values
    }
  });

export default i18n;