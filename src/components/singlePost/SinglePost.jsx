import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="https://images.unsplash.com/photo-1657078689708-975e3d995a3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" 
            className="singlePostImg" />
            <h1 className="singlePostTitle">Lorem ipsum dolor, sit amet.
            <div className="singlePostEdit">

            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
            </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor" >Author: <b>Debbie</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
               <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sed quas cum animi aliquid quae porro enim omnis perspiciatis, unde modi consequuntur quisquam quo esse ut consectetur recusandae? Ut, minus!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptas, amet officia possimus impedit harum et cumque ab fugiat ea. Eum quam recusandae consequatur atque adipisci inventore ratione incidunt iure.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nam officia voluptate ipsum iste quia ab quasi exercitationem nobis incidunt dolorem natus consequatur distinctio recusandae deserunt ex veniam, vitae nulla.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure libero minima et adipisci, quos commodi sint aperiam at facere, laudantium iste. Quos illum beatae deserunt reprehenderit sapiente recusandae! Autem, hic.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quis, labore cupiditate voluptatem, perferendis, eveniet consequuntur in laboriosam aut illo sit saepe autem consequatur magni ducimus quasi quos quae velit!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis reprehenderit, sed, deserunt blanditiis neque inventore ipsa eius facere eveniet minus culpa earum ex quaerat dolor quis non temporibus exercitationem? Quas?
               </p>
        </div>
        </div>
  )
}
