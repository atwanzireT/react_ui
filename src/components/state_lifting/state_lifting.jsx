import React from "react";

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>Water boiling </p>
    }
    return <p>Water would not boil</p>
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { temperature: "0"};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ temperature: e.target.value })
    }

    render() {
        const temperature = this.state.temperature
        return (
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input value={temperature} onChange={this.handleChange} />        
                <BoilingVerdict celsius={parseFloat(temperature)} />      </fieldset>
        );
    }
}
export default Calculator