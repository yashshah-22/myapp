import React from 'react';
//import ElectionCard from './ElectionCard';
import comp1 from './components/comp1.jpg';
import comp2 from './components/comp2.jpg';
import comp3 from './components/comp3.jpg';
import comp4 from './components/comp4.jpg';
import './Card.css';
import Fest from './Fest';
import './ElectionCard.css';
import { Link } from 'react-router-dom';
import Electioncard2 from './Electioncard2';
const Competition = () => {
  return (
    <div>
    <Fest/>
    <p className='para'>
    Guidelines:<br></br>
1.You can make memes on political matters without hurting the sentiments of a community , race or caste.<br></br>
2.You can include unknown facts about democracy in your creative<br></br>
3.You can create a cartoon content<br></br>
4.You can mimic the politicians in a non defensive manner<br></br>
5.Below belt Comedy is not admissible<br></br>
6.You can show your creativity by editing the videos.<br></br>
For Additional Guidelines refer <Link to="/additionalrules"><a>Additional Guidelines</a></Link>
</p>
    <div className='con'>
    <div className="container">
      <Electioncard2
        name="Poster Making"
        designation="Last Date to Register : 31st April 2023"
        imageSrc={comp4}
      />,
      <Electioncard2
        name="Rangoli Competition"
        designation="Last Date to Register : 31st June 2023"
        imageSrc={comp3}
      />,
    
    </div>,
    <div className="container">
    <Electioncard2
      name="Meme Making Competition"
      designation="Last Date to Register : 31st May 2023"
      imageSrc={comp2}
    />,
    <Electioncard2
      name="Dub Smash"
      designation="Last Date to Register : 15th May 2023"
      imageSrc={comp1}
    />,
  
  </div>
  </div>
  </div>
  );
};

export default Competition;
