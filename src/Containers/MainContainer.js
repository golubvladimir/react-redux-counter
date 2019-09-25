import React, { Component } from 'react';
import styled from 'styled-components';

import Counter from 'Components/MainContainer/Counter';
import Controls from 'Components/MainContainer/Controls';

const StyledMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledCounter = styled(Counter)`
    width: 400px; 
    height: 400px;
`;

const StyledControls = styled(Controls)`
    width: 400px;
`;

class MainContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {
            className
        } = this.props;

        return (
            <StyledMainContainer className={className}>
                <StyledCounter />
                <StyledControls />
            </StyledMainContainer>
        )
    }
}

export default MainContainer;