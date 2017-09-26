import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import Image from 'material-ui/svg-icons/image/photo-library';
import styled from 'styled-components';
import Dropzone from 'react-dropzone';

const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Toolbar = styled.div`
    margin: 20px;
    width: 500px;
`;

const Actions = styled.div`
    padding: 5px 20px;
    display: flex;
`;

export default class Search extends Component {
    state = {
        query: ''
    }
    handleInput = (event, query) => this.setState({ query })
    handleDrop = (files) => {
        console.log(files);
    }
    render() {
        return(
            <Container>
                    <Toolbar>
                        <Paper>
                            <Actions>
                                <TextField
                                    hintText="Search..."
                                    fullWidth={true}
                                    onChange={this.handleInput}
                                    value={this.state.query}
                                />
                                <Dropzone style={{}} onDrop={this.handleDrop}>
                                    <IconButton><Image /></IconButton>
                                </Dropzone>
                            </Actions>
                        </Paper>
                    </Toolbar>
            </Container>
        );
    }
}