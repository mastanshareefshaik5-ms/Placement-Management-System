import { useState } from "react";
import { useState } from "react";
function authRegister(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [role,setRole] = useState(null);
    
    return(
        <form>
            <input>
            type ="text"
            placeholder ="Full Name"
            value={name}
            onChange={()=>setName(email.target.value)}

            </input>
             <input>
            type ="email"
            placeholder ="Email"
            value={email}
            onChange={(e)=>setEmail(email.target.value)}
            
            </input>
             <input>
            type ="password"
            placeholder ="Password"
            value={email}
            onChange={(e)=>setPassword(e.target.value)}
            
            </input>
            <select value="role"
            onChange={(e)=>setRole(e.target.value)}
            >
                
            </select>
        </form>
    )

    

}