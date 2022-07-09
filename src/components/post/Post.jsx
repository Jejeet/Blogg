import "./post.css"

export default function Post() {
  return (
       <div className="post">
         <img 
         className="postImg"
         src="https://images.unsplash.com/photo-1657078689708-975e3d995a3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"          alt="" />

          <div className="postInfo">
            <div className="postCats">
                <span className="postCat"> Musics</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor, sit amet 
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
          </div>
          <p className="postDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime impedit cupiditate minus, saepe veritatis et, pariatur error quae, natus perferendis amet hic explicabo quia sit! Aliquam recusandae laboriosam officia reiciendis.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed architecto facere tenetur molestiae ab alias voluptatem soluta ducimus, hic, tempore quae recusandae repellendus quasi aliquid quibusdam quis maiores corrupti numquam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iste assumenda aspernatur perspiciatis voluptas odit quia cum esse et dignissimos reprehenderit minima, hic tempora soluta, quibusdam exercitationem tenetur. Dignissimos, veritatis.</p>
       </div>
  );
}
