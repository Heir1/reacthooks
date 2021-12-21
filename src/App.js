import FunctionCount from "./Components/FunctionCount";
import Container from "./Components/Container";
import React,{Component} from "react";
import Profile from "./Contexte/Profile";
import {UserContext, ColorContext} from './Contexte/MyContext';
import Count from "./Reducers/Count";
import Count1 from "./Reducers/Count1";

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      user : {
        name : "Lisa",
        age : 8
      }
    }
  }
  
  render(){
    return (
      <div className="container">
        <Count1/>
      {/* <UserContext.Provider value={this.state.user}>
        <ColorContext.Provider value={'red'}>
          <Profile/>
        </ColorContext.Provider>
      </UserContext.Provider> */}
        {/* <Container/>  */}
      </div>
    )
  }
}

export default App;
