import React, {Component} from 'react';
import {Card, CardHeader, CardMedia} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import styled from 'styled-components';
import StyleIcon from 'material-ui/svg-icons/editor/format-color-fill';
import Dialog from 'material-ui/Dialog';
import vanGogh from '../../img/van-gogh.jpg'
import southPark from '../../img/south-park.jpg'

const Container = styled.section`
    width: 150px;
    padding: 50px;

`;

const Content = styled.div`
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyleButton = ({onClick}) => (
    <IconButton onClick={onClick}>
        <StyleIcon />
    </IconButton>
);

export default class extends Component {
    state = {
        img: null,
        open: false
    }
    handleToggle = () => this.setState({open: !this.state.open});
    handleClose = () => this.setState({open: false});
    render() {
        const {img, open} = this.state;
        return(
            <Container>
                <Card>>
                    <Content>
                        <CardMedia>
                            {(img) ? <img src={img} /> : <StyleButton onClick={this.handleToggle}/>}
                        </CardMedia>
                    </Content>
                </Card>
                <Dialog
                    open={open}
                    modal={false}
                    onRequestClose={this.handleClose}
                >
                    <img src={vanGogh} />
                    <img src={southPark} />
                </Dialog>
            </Container>
        );
    }
}