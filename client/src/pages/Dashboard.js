import { Link } from "react-router-dom";

function Dashboard () {
    return (
        <div>
            This is the user's dashboard. You are 'logged in'. <br></br>
            <Link to="/">Go back to the Home screen</Link>
        </div>
    )
}

export default Dashboard;