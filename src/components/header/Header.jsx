import "./header.css"

export default function Header() {
  return (
    <div className="header">
       <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span  className="headerTitleLg">Blog</span>
       </div>
       <img className="headerImg" src="https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80"  alt="gard" />
    </div>
  )
}
