import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"
export default function Setting() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Your Account</span>
          </div>
          <form  className="settingsForm">
            <label Profile Picture></label>
            <div className="settingsPP">
              <img src="https://media.istockphoto.com/photos/winter-landscape-with-snow-and-trees-picture-id623496872" alt="" />

              <label htmlFor="fileInput" >
              <i className="settingsPPIcon fa-solid fa-circle-user"></i>
              </label>
              <input type="file" id="fileInput" style={{display:"none"}}/>
            </div>
            <label >Username</label>
            <input type="text"placeholder="Adma" />
            <label >Email</label>
            <input type="email"placeholder="adma@gmail.com" />
            <label >Password</label>
            <input type="password" />
            <button className="settingsSubmit">Update</button>
          </form>
        </div>
        <Sidebar />

    </div>
  )
}
