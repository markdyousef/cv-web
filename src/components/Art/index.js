import React, {Component} from 'react';
import styled from 'styled-components';
import ImageUpload from '../ImageUpload';
import StylePicker from '../StylePicker';

const Container = styled.section`
    background-color: #fafafa;
    display: flex;
    align-items: center;
    height: 400px;
    padding: 20px;
`;

export default class Art extends Component {
    render() {
        return(
            <Container>
                <ImageUpload />
                <StylePicker />
            </Container>
        );
    }
}