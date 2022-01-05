import FunctionCount from "./Components/FunctionCount";
import Container from "./Components/Container";
import React,{Component, useState, useCallback, useEffect, useMemo, useRef} from "react";
// import Profile from "./Contexte/Profile";
import {UserContext, ColorContext} from './Contexte/MyContext';
// import Count from "./Reducers/Count";
import Count from "./Callback/Count";
import Count1 from "./Reducers/Count1";
import Button  from "./Callback/Button";
import Profile from "./Memo/Profile";
import axios from 'axios'
import Input from "./Ref/Input";
import Title from "./Ref/Title";
import FancyInput from "./Imperative/FancyInput";
import Layout from "./Layout/Layout";
import Box from "./Layout/Box";

const App = () => {

  return(
    <div align="center">
      <h1>useLayoutEffect </h1>
      <Box/>
      {/* <Layout/> */}
    </div>
  )
  // const fancyInput = useRef();
  // const date = new Date();

  // const focusInput = (date) => {
  //   fancyInput.current.focus(date);
  //   console.log(date)
  //   fancyInput.current.countMax();
  //   console.log(fancyInput.current)
  // }
  // return (
  //     <div className="container">
  //       <FancyInput ref={fancyInput} />
  //       <button onClick={() => focusInput(date.getDay())}>Cliquer</button>
  //     </div>
  // )

  // return (
  //     <div className="container">
  //       {/* <Title/> */}
  //       <Input/>
  //     </div>
  // )

  // const [count, setCount] = useState(1);
  // const [profile, setProfile] = useState({});
  // const [dark, setDark] = useState(false);

  // useEffect(() => {
  //   axios
  //   .get(`https://jsonplaceholder.typicode.com/users/${count}`)
  //   .then(response => {
  //     setProfile(response.data);
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }, [count]);

  // const buttonTheme = !dark ? "btn-dark" : "btn-light";

  // const isOverTen = useMemo(() => {
  //   console.log("Je suis dans isOverTen");
  //   return count > 10
  // }, [count])

  // console.log(isOverTen)

  // const goDark = () => {
  //     setDark(!dark);
  //     !dark ? document.body.classList.add("bg-secondary") : document.body.classList.remove("bg-secondary");
  // }

  // return (
  //   <div className="container">
  //     <h1 className="text-center">useMemo()</h1>
  //     {isOverTen && <div className="alert alert-danger">STOP !!!</div>}
  //     <button className="btn btn-info mb-3" onClick={() => setCount(count+1)} >increment {count} </button>
  //     <button className={`btn ${buttonTheme} mb-3 float-right`} onClick={goDark}>{dark ? "Eclairer" : "Sombrir"}</button>
  //     <Profile count={count} profile={profile}/>
  //   </div>
  // )

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
