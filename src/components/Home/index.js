import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import styled from 'styled-components';
import { Link, Route, Router } from 'react-router-dom';
const Container = styled.section`
`;

export default class Home extends Component {
    state = {
        open: false
    }
    handleToggle = () => this.setState({open: !this.state.open})
    handleClose = () => this.setState({open: false})
    render() {
        return (
            <Container>
                <AppBar onLeftIconButtonTouchTap={this.handleToggle}/>
                <Drawer open={this.state.open} onRequestChange={open => this.setState({open: open})} docked={false}>
                    <MenuItem onClick={this.handleClose}><Link to="/art">Art</Link></MenuItem>
                    <MenuItem onClick={this.handleClose}><Link to="/search">Search</Link></MenuItem>
                    <MenuItem onClick={this.handleClose}><Link to="/class">Classification</Link></MenuItem>
                </Drawer>
                {this.props.children}
            </Container>
        );
    }
}