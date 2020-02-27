import React, {Component} from "react";
import {MenuItem, Segment} from "semantic-ui-react";
import Logo from '../img/Branco.png'
import {Link} from "react-router-dom";

export default class Navbar extends Component {

    render() {
        return(


            <Segment id='navbar'>


                <Link to={'/'}>
                    <MenuItem name='Logo' id='logo-style'>
                    <img src={Logo} alt='Nave.rs'/>
                    </MenuItem>
                </Link>
            </Segment>

        );
    }

}