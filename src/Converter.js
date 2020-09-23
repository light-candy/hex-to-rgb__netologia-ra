import React from 'react';

export class Converter extends React.Component {
    state = {
        hex:"#34495e",
        rgb:"rgb(52, 73, 94)",
    };

    handleInputChange = event => {
           const regexp =  /^#([A-Fa-f0-9]{6})/
        const inp = event.target.value.slice(0,7);
        this.setState({hex:inp});
           if (inp.length === 7){
               if (regexp.test(inp) === false){
                   this.setState({rgb:""});
               }
                   else {
        const r = parseInt(inp.slice(1,3), 16);
        const g = parseInt(inp.slice(2,4), 16);
        const b = parseInt(inp.slice(5,7), 16);
        this.setState({rgb:"rgb(" + r + ", " + g +", " + b + ")"});
               }
               }
           }
    render() {
        const error = "#ea4b35";
    return(
            <form style={{backgroundColor:`${!this.state.rgb.length ? error : this.state.rgb}`}} >
            <input id="hex" type="text" value={this.state.hex} onChange={this.handleInputChange} />
            <div>{!this.state.rgb.length ? "Ошибка!" : this.state.rgb}</div>
            </form>
    );
    }
}
