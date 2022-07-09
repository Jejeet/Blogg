import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://images.unsplash.com/photo-1657089841529-af2740d9dc08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos corrupti non hic dolorem, facere harum veritatis vero minima ad quam debitis impedit tempora.</p>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">CATEGORIES</span>
      <ul className="sidebarList">
        <li className="sidebarListItem">Life</li>
        <li className="sidebarListItem">Music</li>
        <li className="sidebarListItem">Style</li>
        <li className="sidebarListItem">Sport</li>
        <li className="sidebarListItem">Tech</li>
        <li className="sidebarListItem">Cinema</li>

      </ul>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOWERS</span>
      <div className="sidebarSocial">
      <i className="sidebarIcon fa-brands fa-facebook-square"></i>
      <i className="sidebarIcon fa-brands fa-twitter-square"></i>
      <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
      <i className="sidebarIcon fa-brands fa-instagram-square"></i>
      </div>
      </div>

    </div>
  )
}
