import {Link, Outlet} from "react-router-dom";
const Electronics = ()=>{
    return(
        <>
          <h1>Electronics...</h1>
          <br></br>
          <Link to="electronics/Laptops" style={{marginRight:200}}>
             Laptops
          </Link>
          <Link to="electronics/Mobiles">
             Mobiles
          </Link>
          <br></br>
          <Outlet></Outlet>
        </>
    )
}
export default Electronics;