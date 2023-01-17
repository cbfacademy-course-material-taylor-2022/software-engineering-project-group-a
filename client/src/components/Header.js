// This Header Component should cover the following pages:
import{Link} from 'react-router-dom';



// * Home
// * About
// * My Dashboard
// >>> My Account
// >>> My Expenses
// >>> My Pots

// The Header / Navigation bar should make sure that it is in line with the UI and design. (Colours and such)

function Header() {
    return(
        <div>
            <>
    <h1> Home </h1>
    <h1>About</h1>
  <h1>My Dashboard</h1>
<Link to="/"> My Dashboard </Link>
<Link to="/My Dashboard" className="My Account"> My Dashboard</Link>
<Link to="/My Dashboard" className="My Expenses"> My Dashboard</Link>
<Link to="/My Dashboard" className="My Expenses"> My Pots</Link>
</>

        </div>
    )
}

export default Header