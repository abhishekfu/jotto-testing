import React from 'react'
import PropTypes from 'prop-types';
export default function Congrats(props) {
    if(props.success){
        return(
            <div data-test="component-congrats" className='alert alert-success'>
                <span data-test="congrats-message">
                    Congratulations! You guessed the word!
                </span>
            </div>
        )
    }
    return (
        <div data-test="component-congrats">
            
        </div>
    )
}

Congrats.propTypes={
    success:PropTypes.bool.isRequired
}