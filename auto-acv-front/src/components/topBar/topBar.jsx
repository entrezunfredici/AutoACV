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
                        <button id="ticket_button" class="topBar_button">tickets</button>
                        <button id="energy_button" class="topBar_button">energy</button>
                        <button id="profile_button" class="topBar_button">profile</button>
                    </>
                ) : (
                    //Si l'utilisateur n'est pas connecté
                    <>
                        <Link to="/login"><button id="login_button" class="topBar_button">log in</button></Link>
                        <button id="register_button" class="topBar_button">register</button>
                    </>
                )}
            </div>
        </div>
    );
}

export default TopBar;
