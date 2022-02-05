// import icons
import Dashboard  from "../assets/Dashboard.png";
import DashboardActive  from "../assets/DashboardActive.png";
import TradingIcon  from "../assets/TradingIcon.png";
import TradingActive  from "../assets/TradingActive.png";
import CoinIcon from "../assets/CoinIcon.png";
import CoinActive from "../assets/CoinActive.png";
import Phone  from "../assets/Phone.png";
import PhoneActive  from "../assets/PhoneActive.png";

// import components
import Trading from '../Pages/Trading';
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
            label: 'Coins',
            path: '/coins-page',
            icon: CoinIcon,
            activeIcon: CoinActive,
            component: Contact,
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