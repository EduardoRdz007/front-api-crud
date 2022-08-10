import "./post.css";
import { Link } from "react-router-dom";
import FavoriteContext from "../../context/global/likecontext.context";
import { useContext } from "react";
export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  const {favoritePokemons, updateFavorite} = useContext(FavoriteContext);
  const redHeart = "👍";
    const blackHeart = "👨";
    const heart = favoritePokemons.includes() ? blackHeart : redHeart ;
  const clickHeart = (e) => {
    e.preventDefault();
      updateFavorite();
}
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <button onClick={clickHeart}>
                        <div className="favorite">{heart}</div>
                    </button>
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
