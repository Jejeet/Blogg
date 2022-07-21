import {Link} from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
  const user= false;
  return (
    <div className='top'>
      <div className="topLeft">
      <i className="topIcon fa-brands fa-facebook-square"></i>
      <i className="topIcon fa-brands fa-twitter-square"></i>
      <i className="topIcon fa-brands fa-pinterest-square"></i>
      <i className="topIcon fa-brands fa-instagram-square"></i>
      </div>
      <div className="topCenter">
     <ul className="topList">
        <li className="topListItem"><Link to={"/"}>HOME</Link></li>
        <li className="topListItem">ABOUT</li>
        <li className="topListItem">CONTACT</li>
        <li className="topListItem">WRITE</li>
        <li className="topListItem">{user && "LOGOUT"}</li>

     </ul>
      </div>
      
      <div className="topRight">
        <img className="topImg"
           src="https://images.unsplash.com/photo-1613876215075-276fd62c89a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhbiUyMGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt="fgfh" />
            
     <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
   </div>
  )
}
