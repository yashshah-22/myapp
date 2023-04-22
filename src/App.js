import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import VoteIndia from './components/voteindia.png'
import './components/navbar.css';
import { Link } from "react-router-dom";
import Form from "./Form";
import ReferralSystem from "./ReferralSystem";
import Leaderboard from "./LeaderBoard";
import Feed from "./Feed";
import ChunavPathshaala from "./ChunavPathshaala";
import { Container } from 'react-bootstrap';
import FeedbackPage from "./FeedbackPage";
import Card from "./Card";
import Location from "./Location";
import Coupons from './Coupons';
//import Landing from "./Landing";
import Signup from "./Signup";
import Login from "./Login";
import AdditionalRules from './AdditionalRules.js';
import Competition from "./Competition";
import RegisterForm from "./RegisterForm";
import Landing from "./Landing";
import VotingCalendar from "./VotingCalendar";
import VoterStatus from "./VoterStatus";
const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <img src={VoteIndia} alt=" "></img>
        <div className="contents">
        <div className="slogan">
        <h1 className="animated-text">Your vote is your voice<br/>Make it count!!!
        </h1>
        <br></br>
        <div class="animated-text">
  <span>#</span>
  <span>V</span>
  <span>o</span>
  <span>t</span>
  <span>e </span>
  <span>t  </span>
  <span>o</span>
  <span>d</span>
  <span>a</span>
  <span>y</span>
<span> F </span>
  <span>o</span>
  <span>r</span>
  <span>a  </span>
  <span>b</span>
  <span>e</span>
  <span>t</span>
  <span>t</span>
  <span>e</span>
  <span>r</span>
  <span>T</span>
  <span>o</span>
  <span>m</span>
  <span>m</span>
  <span>o</span>
  <span>r</span>
  <span>r</span>
  <span>o</span>
  <span>w</span>
</div>

        <h1>#देश के विकास में दे अपना योगदान
हर हाल में करना अपना मतदान!!!</h1>
        </div>
        <div className='buttons'>
        <Link to="/form">
        <button>BOOK YOUR SLOT</button>
        </Link>
        <br/>
        <button>CHAT ROOM</button>
        </div>
        </div>
      </section>
      <div className="route">
        <h1>Wanna Reach your nearest poll ? </h1>
        <h2>Click on below button to get the fastest route</h2>
        <Link to="/maps">
        <button>Get Fastest Route</button>
        </Link>
      </div>
      <center><p className="quot">Famous Quotes on Importance of Voting :</p></center>
<Card/>
<div className='video'>
      <center><p><u>Process of Voting - Virtual Demo</u></p></center>
      <Container>
      <iframe width="900" height="400" src="https://www.youtube.com/embed/XGJQNKFYqYI?rel=0" title="Youtube video player" frameborder="0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
      allowFullScreen></iframe>
      </Container>
      </div>
      <Link to="/chunavpathshala">
      <center><button className="explore">Explore Chunaav Pathshaala</button> </center>
      </Link>

      
    </>
  );
};






const App = () => {
  return (
    <Routes>
      <Route path="/" element={<><Home/></>}></Route>
      <Route path="/additionalrules" element={<><AdditionalRules/></>}></Route>
      
      <Route path="/signup" element={<><Signup/></>}/>
      <Route path="/maps" element={<><Location/></>}/>
      
      <Route path="/signup" element={<><Signup/></>}/>
      <Route path="/login" element={<><Login/></>}>
        
      </Route>
      <Route path="/coupons" element={<><Navbar/><Coupons/></>}></Route>
      <Route path="/votingcalendar" element={<><Navbar/><VotingCalendar/></>}/>
      <Route path="/landing" element={<><Landing/></>}></Route>
      <Route path="/leaderboard" element={<><Navbar/><Leaderboard/></>}>
        
      </Route>

      <Route path="/contentcreation" element={<><Navbar/><Feed/></>}></Route>
      <Route path="/competition" element={<><Navbar/><Competition/></>}></Route>
        <Route path="/votingstatus" element={<><Navbar/><VoterStatus/></>}></Route>
      
      <Route path="/chunavpathshala" element={<><Navbar/><ChunavPathshaala/></>}>
        
      </Route>
      <Route path="/slotbooking" element={<><Navbar/><Form/></>}>
        
      </Route>
      <Route path="/feedbackform" element={<><Navbar/><FeedbackPage/></>}> </Route>
      <Route path="/registerform" element={<><Navbar/><RegisterForm/></>}></Route>
        
     
      <Route path="/referralsystem" element={<><Navbar/><ReferralSystem/></>}>
</Route>
<Route path="/form" element={<><Navbar/><Form /></>}>
  
</Route>
    </Routes>
  );
};

export default App;