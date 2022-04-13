import logo from "./mrdoc.png"
import './App.css';
import {useState} from "react";
import Start from './components/Start';
import Login from "./components/Login";
import Register from "./components/Register";
const state={page:2};

function App() {

    if(state.page===0)
    {
        return (
            <div >
                <Start />
            </div>

        )
    }
    else if(state.page===1)
    {
        return (
            <div className={"Background"}>
                <Login/>
            </div>
        )
    }
    else if(state.page===2)
    {
        return(
            <div className={"Background"}>
                <Register/>
            </div>
            
        )
    }


  return (
      <>

      </>
  );
}

export default App;
