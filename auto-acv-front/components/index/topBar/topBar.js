'use strict';

const e = React.createElement;

class TopBar extends React.Component {
    render() {
        return React.createElement('div', {className: 'top-bar'},
            React.createElement('div', {className:"topBar__logo"}),
            React.createElement('a', {href: "/"}, React.createElement('img', {src: "../../../img/logo.png", alt: "logo"})),
            React.createElement('div', {className: "topBar__menu"},
                React.createElement('ul', null,
                    React.createElement('li', null, React.createElement('a', {href: "/"}, React.createElement('i', {className: ""}))),
                    React.createElement('li', null, React.createElement('a', {href: "/"}, React.createElement('i', {className: ""}))),
                    React.createElement('li', null, React.createElement('a', {href: "/"}, React.createElement('i', {className: ""})))
                )
            )
        );
    }
}

const domContainer = document.querySelector('#index_topBar');
const root = ReactDOM.createRoot(domContainer);
root.render(e(TopBar));