import logo from './logo.svg';
import './App.css';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import AboutMe from './components/me/Me';
import SyllabusComponent from './components/Sillabus/Sillabus';
import Recommendations from './components/recommends/Recommends';
import ThirdScreen from './screens/ThirdScreen';
import ForthScreen from './screens/ForthScreen';
import ByMe from './components/ByMe/ByMe';
import ParentalGuidanceScreen from './components/fit/WhoFits';
import ContactForm from './screens/ContactScreen';
import HeaderComponent from './screens/FifthScreen';

function App() {
  return <>
  <FirstScreen/>
  <SecondScreen/>
  <AboutMe/>
 
  <ThirdScreen/>
  <ParentalGuidanceScreen/>
  
<ForthScreen/>

<HeaderComponent/>
 <Recommendations/>
<ContactForm/>
<ByMe/>
  </>
}

export default App;
