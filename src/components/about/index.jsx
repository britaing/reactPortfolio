import { Figure } from 'react-bootstrap';
import profilePic from '../../assets/profileImage.jpg'
function About() {
  return (
  <>
   <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src={ profilePic }
      />
      <Figure.Caption>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </Figure.Caption>
    </Figure>
  
  
  </>
  );
}

export default About;
