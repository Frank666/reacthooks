//import React, { useState } from "react";
import { CustomState } from './CustomState'

const UseStateExample = () => {
    // const [count, setCount] = useState(0);

    // one by one
    // const [userId, setUserId] = useState("");
    // const [password, setPassword] = useState("");

    //using just one state hook

    const [values, handleChange] = CustomState({ email: "", password: ""})

    return(
    <div>
            {/* <button onClick={() => setCount(count+1)}>+</button>
            <div>{count}</div> */}

            <input name="email" value={values.email} onChange={handleChange}></input>
            <input type="password" name="password" value={values.password} onChange={handleChange}></input>
            
    </div>);
}

export default UseStateExample;