// import icons
import Dashboard  from "../assets/Dashboard.png";
import DashboardActive  from "../assets/DashboardActive.png";
import TradingIcon  from "../assets/TradingIcon.png";
import TradingActive  from "../assets/TradingActive.png";
import JourneyIcon  from "../assets/JourneyIcon.png";
import JourneyActive  from "../assets/JourneyActive.png";
import Phone  from "../assets/Phone.png";
import PhoneActive  from "../assets/PhoneActive.png";

// import components
import Trading from '../Pages/Trading';
import Journey from '../Pages/Journey';
import Contact from '../Pages/Contact';
import ForexTracker from "../Pages/Home";

const routes = [

      {
            label: 'Home',
            path: '/',
            icon: Dashboard,
            activeIcon: DashboardActive,
            component: ForexTracker,
      },
      {
            label: 'Trading',
            path: '/crypto-trading',
            icon: TradingIcon,
            activeIcon: TradingActive,
            component: Trading,
      },
      {
            label: 'Our Journey',
            path: '/our-journey',
            icon: JourneyIcon,
            activeIcon: JourneyActive,
            component: Journey,
      },
      {
            label: 'Contact',
            path: '/contact-us',
            icon: Phone,
            activeIcon: PhoneActive,
            component: Contact,
      },
      
]

export default routes;