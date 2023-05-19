import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to={'/ingredient/garlic'}>Garlic</Link>
            <Link to={'/ingredient/oil'}>Oil</Link>
            <Link to={'/ingredient/tomatoes'}>Tomatoes</Link>
        </div>
    );
}

export default Navbar;