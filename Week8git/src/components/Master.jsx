import Electronics from "./Electronics";
import Kids from "./Kids";
import Fashion from "./Fashion";
import {Link,Route,Routes} from "react-router-dom";
import Laptops from "./Laptops";
import Mobiles from "./Mobiles";
const Master = ()=>{
    return(
        <>
           <Link to="/Electronics" style={{marginRight:200}}>
             Electronics
           </Link>
           <Link to="/Kids" style={{marginRight:200}}>
             Kids
           </Link>
           <Link to="/Fashion">
             Fashion
           </Link>
           <Routes>
               <Route path ="/Electronics" element={<Electronics></Electronics>}>
                  <Route path="Electronics/Laptops" element={<Laptops></Laptops>}></Route>
                  <Route path="Electronics/Mobiles" element={<Mobiles></Mobiles>}></Route>
               </Route>
               <Route path ="/Kids" element={<Kids></Kids>}></Route>
               <Route path ="/Fashion" element={<Fashion></Fashion>}></Route>
           </Routes>            
        </>
    )
} 
export default Master;