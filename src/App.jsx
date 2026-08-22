import { useState } from "react";
import Bill from "./components/Bill";
import Calculation from "./components/Calculation";
import Service from "./components/Service";
const App = () => {
  const [bill,setBill] = useState(NaN)
  const [tip,setTip] = useState("")
  const [friendTip,setFriendTip] = useState("")
  return (
    <div>
      <Bill bill={bill} setBill={setBill}/>
      <Service>
        How did you like the Service?
        <select value={tip} onChange={(e)=>setTip(Number(e.target.value))}>
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">It was okay (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="20">Absolutely amazing (20%)</option>
        </select>
      </Service>
      <Service>
        How did your friend like the Service?
        <select value={friendTip} onChange={(e)=>setFriendTip(Number(e.target.value))}>
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">It was okay (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="20">Absolutely amazing (20%)</option>
        </select>
      </Service>
      <Calculation bill={bill} tip={tip} friendTip={friendTip}></Calculation>
    </div>
  );
};

export default App;
