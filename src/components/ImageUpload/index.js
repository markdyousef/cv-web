import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import Paper from 'material-ui/Paper';
import styled from 'styled-components';

const Container = styled.section`
    cursor: pointer;
    max-height: 400px;
    max-width: 400px;
`;

const style = {
    width: '100%',
    height: '100%',
    // minHeight: '300px'
}

const Content = styled.div`
    img {
        height: 100%;
        width: 100%;
    }
`;

const Text = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
    width: 400px;
`;

export default class ImageUpload extends Component {
    state = {
        preview: null
    }
    onDrop = (acceptedFiles, rejectedFiles) => {
        console.log(acceptedFiles);
        const img = acceptedFiles[0];
        this.setState({preview: img.preview})
    }
    render() {
        const {preview} = this.state;
        return (
            <Container>
                <Paper zDepth={3}>
                    <Dropzone onDrop={this.onDrop} style={style}>
                        <Content>
                            {(preview) ? <img src={preview} /> : <Text>Upload image</Text>}
                        </Content>
                    </Dropzone>
                </Paper>
            </Container>
        );
    }
}