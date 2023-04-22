import React from 'react'
//import Navbar from './components/Navbar';
import img8 from './components/img7.jpg';
import img7 from './components/img8.jpg';
import './ChunavPathshaala.css';
import img5 from './components/cp2.jpg';
import img6 from './components/cp3.jpg';
import votersguide from './components/voterguide.jpeg';
import { Container } from 'react-bootstrap';
const ChunavPathshaala = () => {
  return (
    <div className='chunavpathshala'>
      <section className="hero-section">
      <div className="imag">
        <img className="img5" src={img5} alt=""></img>
        <img src={img6} alt=""></img>
        </div>
      </section>
      <div className='essay'>
      <p>What is Chunav Pathshaala ?</p>
      <i>"Chunav Pathshaala" is a Hindi term that translates to "Election School" in English. It is an initiative launched by the Election Commission of India to create awareness and educate citizens about the importance of voting and the electoral process. The objective of Chunav Pathshaala is to make people aware of their rights and duties as voters, and to encourage them to participate in the electoral process.

Chunav Pathshaala is conducted in the run-up to elections, with the aim of reaching out to as many people as possible. The program is typically carried out by teams of trained professionals who visit schools, colleges, and other public places to educate people about the electoral process. The program is also promoted through various media channels, including television, radio, and social media.
<div className='midimage'>
<img src={img7} className='img5' alt=" "></img>
<img src={img8} alt=" " className='img6'></img>
</div>
<div className='lower'>
The curriculum of Chunav Pathshaala includes various topics related to the electoral process. This includes the history of the Indian electoral system, the importance of voting, the role of political parties, and the rights and duties of voters. The program also includes interactive sessions where participants can ask questions and clarify their doubts about the electoral process.

Chunav Pathshaala has been successful in creating awareness among citizens about the importance of voting. It has helped to dispel many misconceptions and myths surrounding the electoral process and has encouraged people to take an active interest in politics. The program has also helped to increase voter turnout in many parts of the country.

In conclusion, Chunav Pathshaala is a great initiative by the Election Commission of India to promote awareness and education about the electoral process. The program has been successful in creating a positive impact on the citizens and has encouraged more people to participate in the democratic process. With more and more people becoming aware of their rights and duties as voters, India is moving towards a more vibrant and inclusive democracy.</div></i>

      </div>
      
      <center><p className='guide'>VOTER'S GUIDE</p></center>
      <div className='votersguide'>
<div>
  <img src={votersguide} alt=" "></img>
</div>
<div className='sidetext'>
1. Register to vote: Before you can vote, you must first register to vote. You can typically do this online or by mail, depending on your state's requirements.<br/>

2. Check your registration status: Make sure to check your registration status before the election to ensure that your information is up-to-date and accurate.<br/>

3. Know your voting options: Find out what your voting options are, including early voting, mail-in voting, and in-person voting. Make sure to note any deadlines or requirements for each option.<br/>

4. Research the candidates and issues: Research the candidates running for office and their positions on key issues. You can find this information on candidate websites, nonpartisan voter guides, and news articles.<br/>

5. Make a plan to vote: Decide when and how you will vote, and make a plan to follow through. This may include setting a reminder on your calendar, finding your polling place, or requesting a mail-in ballot.<br/>

6. Bring proper identification: Make sure to bring proper identification to the polling place, such as a driver's license or passport. Check your state's requirements for acceptable forms of ID.<br/>

7. Cast your ballot: Finally, cast your ballot! Follow the instructions carefully and make sure to double-check your selections before submitting your ballot<br/>
</div>
      </div>
      
     
</div>
  )
}

export default ChunavPathshaala;