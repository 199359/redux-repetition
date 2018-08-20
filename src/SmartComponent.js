import React from 'react'
import {connect} from 'react-redux'
import {inputAction, displayText} from './state/smartComponent'

const SmartComponent = (props) => (
    <div>
        <p>{props.displayedText}</p>
        <input
            type='text'
            placeholder={'Wpisz tekst'}
            value={props.inputText}
            onChange={(event)=>props.onChangeHandler(event.target.value)} />
        <button onClick={props.onClickHandler}>Pokaż tekst</button>
    </div>
)

const  mapStateToProps = state => ({
    displayedText: state.smartComponent.displayedText,
    inputText: state.smartComponent.inputText
})

const mapDispatchToProps = dispatch => ({
    onChangeHandler: (value) => dispatch(inputAction(value)),
    onClickHandler: () => dispatch(displayText())
})

export default connect(mapStateToProps, mapDispatchToProps)(SmartComponent)