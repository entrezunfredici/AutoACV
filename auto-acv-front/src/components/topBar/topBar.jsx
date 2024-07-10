import './topBar.css';

function TopBar(){
    return(
        <div id="topBar">
            <div id="topBar_logo">
                {/* <img src=""/> */}
            </div>
            <div id="topBar_menu">
                <button id="ticket_button" class="topBar_button">tickets</button>
                <button id="energy_button" class="topBar_button">energy</button>
                <button id="login_button" class="topBar_button">log in</button>
            </div>
        </div>
    );
}

export default TopBar;
