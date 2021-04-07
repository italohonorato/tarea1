import React, { Component } from 'react';
import "./footer.styles.scss";
import "../../../node_modules/bootstrap/scss/bootstrap.scss";

class Footer extends Component {
    render() {
        return (
            <div className="footer-basic">
                <footer>
                    <p className="copyright">Italo Honorato © 2021</p>
                </footer>
            </div>
        );
    }
}

export default Footer;
