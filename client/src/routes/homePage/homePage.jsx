import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Sở hữu không gian mơ ước của bạn!</h1>
          <p>
          Khám phá thế giới với vô vàn cơ hội bất động sản, tìm kiếm ngôi nhà mơ ước của bạn và hiện thực hóa không gian sống lý tưởng ngay hôm nay!
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Năm kinh nghiệm</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Giải thưởng</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Bất động sản</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
