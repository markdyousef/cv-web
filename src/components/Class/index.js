import React,{Component} from 'react';
import styled from 'styled-components';
import ImageUpload from '../ImageUpload';

const Container = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export default class Class extends Component {
    render() {
        return(
            <Container>
                <ImageUpload />
            </Container>
        );
    }
}