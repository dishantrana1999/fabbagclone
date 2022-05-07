import React from "react";

import "./App.css";




import Cartroutes from "./Myroutes/Cartroutes";
import Checkout from "./components/Checkout/Checkout";

function App({ current }) {
  // const Navigate=useNavigate()
  
  return (
    
      <div className="app">
        <Cartroutes/>
        {/* <Checkout/> */}
      </div>
    
  );
}



export default App
