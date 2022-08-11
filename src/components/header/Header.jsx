import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
      <span className="headerTitleSm">Comic</span>
        <span className="headerTitleSm2">Book</span>
      </div>
      <img
        className="headerImg"
        src="https://free4kwallpapers.com/uploads/originals/2016/05/28/avengers-wallpaper.jpg"
        alt=""
      />
    </div>
  );
}
