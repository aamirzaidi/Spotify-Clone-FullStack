import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <h2 className="navbar-brand left-space right-space">Spotify</h2>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link active" href="/">Home <span class="sr-only"></span></a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0 align ">
          <input className="form-control mr-sm-2" type="search" placeholder="Start Searching" aria-label="Search" />

        </form>
      </div>
    </nav>
  );
}

export default Header;