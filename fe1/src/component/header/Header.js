import * as React from "react";
import styles from "../../../styles/header.module.css";
import logo from "../../../public/Logoheader.png";
import cart from "../../../public/cart.png";
import Unionsearch from "../../../public/Unionsearch.png";
import Image from "next/image";
import TopHeader from "./TopHeader";
import data from "../../../public/data/data.json";
import bag from "../../../public/bag.png";
import ShopCard from "../shopcard/Shopcard";


const Header = () => {
  const handleClick = (ev)=>{
    ev.stopPropagation();
  }
  return (
    <>
      <TopHeader />
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/home">
          <Image src={logo} alt={data.main_header_data.alt} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            {data.main_header_data.navOptions.map((item, index) => {
              return (
                <div key={index} className={styles.navOptions}>
                  {!item.isdropdown && (
                    <button className={styles.navItemText + " nav-item"}>
                      {" "}
                      {item.value}
                    </button>
                  )}
                  {item.isdropdown && (
                    <div className={styles.navItemText + " nav-item"}>
                      <button
                        tabIndex={0}
                        className="nav-item dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        id="dropdownMenuButton1"
                        aria-expanded="false"
                      >
                        {item.value}
                      </button>
                      <ul
                        className={styles.dropdownWrapper + " dropdown-menu"}
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li onClick={(ev)=>handleClick(ev)}>
                          <ShopCard />
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </ul>
        </div>
        <div className={styles.searchWrapper +" col"} >
        <Image src={Unionsearch} alt={"search icon"} height={15} width={15}/>
        </div>
        <div className="col">
        <Image src={bag} alt={"cart"} height={15} width={15}/>
        </div>
      </nav>
    </>
  );
};

export default Header;
