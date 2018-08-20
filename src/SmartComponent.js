import React from 'react'

class SmartComponent extends React.Component {
    state = {
        inputText: '',
        displayedText: ''
    }

    onChangeHandler = event => {
        this.setState({
            inputText: event.target.value
        })
    }

    onClickHandler = () => {
        this.setState((prevState, props) => ({
            displayedText: prevState.inputText
        }))
    }

    render() {
        return (
            <div>
                <p>{this.state.displayedText}</p>
                <input
                    type='text'
                    placeholder={'Wpisz tekst'}
                    value={this.state.input}
                    onChange={this.onChangeHandler} />
                <button onClick={this.onClickHandler}>Pokaż tekst</button>
            </div>
        )
    }
}

export default SmartComponent