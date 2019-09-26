import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import * as actionTypes from '../Actions';

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
            className,
            counter,
            onAdd,
            onRemove
        } = this.props;

        return (
            <StyledMainContainer className={className}>
                <StyledCounter
                    counter={ counter }
                />
                <StyledControls
                    onAdd={ onAdd }
                    onRemove={ onRemove }
                />
            </StyledMainContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter.counter
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: () => dispatch({type: actionTypes.ADD}),
        onRemove: () => dispatch({type: actionTypes.REMOVE})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);