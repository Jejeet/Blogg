import "./write.css"
export default function Write() {
  return (
    <div className="write">
      <img
      className="writeImg"
       src="https://media.istockphoto.com/photos/winter-landscape-with-snow-and-trees-picture-id623496872" alt="" />
       <form className="writeform">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
          <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{display:"none"}} />
          <input type="text"
           placeholder="Title"
            className="writeInput" 
            autoFocus={true}
            />
        </div>
        <div className="writeFormGroup">
          <textarea
           placeholder="Tell your story..." 
           type ="text" 
          className="writeInput writeText">

          </textarea>
        </div>
        <button className="writeSubmit">Publish</button>
       </form>
        </div>
  )
}
