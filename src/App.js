import FunctionCount from "./Components/FunctionCount";
import Container from "./Components/Container";
import React,{Component, useState, useCallback, useEffect} from "react";
// import Profile from "./Contexte/Profile";
import {UserContext, ColorContext} from './Contexte/MyContext';
// import Count from "./Reducers/Count";
import Count from "./Callback/Count";
import Count1 from "./Reducers/Count1";
import Button  from "./Callback/Button";
import Profile from "./Memo/Profile";
import axios from 'axios'

const App = () => {

  const [count, setCount] = useState(1);
  const [profile, setProfile] = useState({})

  useEffect(() => {
    axios
    .get()
    .then(response => {
      setProfile(response.data);
    })
    .catch(err => {
      console.log(err)
    })
  }, [count])

  return (
    <div className="container">
      <h1 className="text-center">useMemo()</h1>
      <button className="btn btn-info mb-3" onClick={() => setCount(count+1)} >increment {count} </button>
      <button className="btn btn-dark mb-3 float-right">Modifier</button>
      <Profile count={count} profile={profile}/>
    </div>
  )

  // const [countOne, setCountOne] = useState({value : 0, btnColor : 'success', increment : 25});
  // const [countTwo, setCountTwo] = useState({value : 0, btnColor : 'danger', increment : 20});

  // const incrementCountOne = useCallback((increment) => {
  //   countOne.value < 100 && setCountOne({...countOne, value : countOne.value + increment});
  //   console.log("Je suis dans incrementCountOne")
  // }, [countOne])

  // const incrementCountTwo = useCallback((increment) => {
  //   console.log("Je suis dans incrementCountTwo")
  //   countTwo.value < 100 && setCountTwo({...countTwo, value : countTwo.value + increment})
  // }, [countTwo])

  // return (
  //   <div className="container">
  //     <Count text="countOne" count={countOne.value} bgColor={countOne.btnColor} />
  //     <Count text="countTwo" count={countTwo.value} bgColor={countTwo.btnColor} />

  //     <Button handleClick={incrementCountOne} bgColor={countOne.btnColor} increment={countOne.increment} >Count 1</Button>
  //     <Button handleClick={incrementCountTwo} bgColor={countTwo.btnColor} increment={countTwo.increment} >Count 2</Button>
            {/* <Count1/> */}
            {/* <UserContext.Provider value={this.state.user}>
            <ColorContext.Provider value={'red'}>
              <Profile/>
            </ColorContext.Provider>
            </UserContext.Provider> */}
            {/* <Container/>  */}
  //   </div>
  // )
}

export default App;
