import { Link } from "react-router-dom";

function About() {
  return (
    <div>
     About Wollet <br></br>
      <p>Introducing Wollet App - your personal finance partner to help you track, manage, and budget your money. With Wollet, you can create and manage personalised 'pots' to save for specific goals, like a rainy day fund or a house deposit.
      <br></br>
      <br></br>
Our app generates financial accountability reports and sends custom notifications to help you stay on top of your spending. Whether it's a daily, weekly, or monthly report, you'll always know how much you have in each 'pot'.
<br></br>
<br></br>
Create your financial profile and secure authorisation for added peace of mind. With Wollet, you can set and reach your savings goals with ease. So what are you waiting for? Sign up today and take control of your finances with Wollet.
<br></br>
<br></br>
Download Wollet app now and start managing your finances.</p>

      <Link to="/">Go back to the Home screen</Link>
    </div>
  );
}

export default About;
