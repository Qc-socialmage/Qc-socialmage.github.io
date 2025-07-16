import logo from '../../assets/logo.png';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div style={{textAlign: 'center', padding: '4rem'}}>
            <img
                src={logo}
                alt="logo"
                style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
            />
            <h1 style={{ fontSize: '120px', color: 'purple' }}>
                404
            </h1>
            <h2>Sorry we couldn't find that page</h2>
            <Link
                to="/" style={{color: '#007bff'}}>
                Go back to the homepage
            </Link>
        </div>
    )
}

export default NotFound;