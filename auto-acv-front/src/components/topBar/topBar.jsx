import './topBar.css';
import { Link } from 'react-router-dom';

function TopBar(){
    const token = localStorage.getItem('token');
    return(
        <div id="topBar" className="copperBorder">
            <div id="topBar_logo">
                {/* <img src=""/> */}
            </div>
            <div id="topBar_menu">
                {token ? (
                    //Si l'utilisateur est connecté
                    <>
                        <button id="ticket_button" className="topBar_button">tickets</button>
                        <button id="energy_button" className="topBar_button">energy</button>
                        <Link to="/profil"><button id="profile_button" className="topBar_button">profile</button></Link>
                    </>
                ) : (
                    //Si l'utilisateur n'est pas connecté
                    <div>
                        <Link to="/login"><button id="login_button" className="topBar_button">log in</button></Link>
                        <Link to="/register"><button id="register_button" className="topBar_button">register</button></Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TopBar;
