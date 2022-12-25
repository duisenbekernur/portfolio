import "./style.css";

const Header = () => {
  const pathToCv = "/cv.pdf";

  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Ernur</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a href={pathToCv} download className="btn" target="_blank">
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
