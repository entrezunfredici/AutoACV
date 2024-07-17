import './topBar.css';
import { Link } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

function TopBar(){
    const token = localStorage.getItem('token');
    let decodedToken;
    let admin = false;

    if (token) {
        decodedToken = jwtDecode(token);
        admin = decodedToken.data.admin;
    }
    
    return(
        <div id="topBar" className="copperBorder">
            <div id="topBar_logo">
                <Link to="/"><img src="../../images/logoAutoAcv.png" alt="logo" id="logo"/></Link>
            </div>
            <div id="topBar_menu">
                {token ? (
                    admin ? (
                        //Si l'utilisateur est connecté et est admin
                        <>
                            <Link to="/tiquets"><button id="ticket_button" className="topBar_button">Tickets</button></Link>
                            <Link to="/profil"><button id="profile_button" className="topBar_button">Profile</button></Link>
                        </>
                    ) : (
                        //Si l'utilisateur est connecté et est pas admin
                        <>
                            <button id="energy_button" className="topBar_button">energy</button>
                            <Link to="/profil"><button id="profile_button" className="topBar_button">Profile</button></Link>
                        </>
                    )
                ) : (
                    //Si l'utilisateur n'est pas connecté
                    <>
                        <Link to="/login"><button id="login_button" className="topBar_button">Log in</button></Link>
                        <Link to="/register"><button id="register_button" className="topBar_button">Register</button></Link>
                    </>
                )}
            </div>
        </div>
    );
}

export default TopBar;
