import React, { Component } from 'react'

class ClassDisplayKey extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             keycode : null
        }
    }

    handleKeyCode = (e) => {
        this.setState({
            keycode : e.code
        })
    }

    componentDidMount() {
        document.addEventListener("keyup", this.handleKeyCode);       
    }

    componentWillUnmount() {
        console.log("addEventListener arreté");
        document.removeEventListener("keyup", this.handleKeyCode);
    }
    
    
    
    render() {
        const {keycode} = this.state
        return (
            <div>
                <hr/>
                    <h1> {keycode}</h1>
                <hr/>            
            </div>
        )
    }
}

export default ClassDisplayKey