import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "/public/images/logo.png";
import Styles from "./header.module.scss";
import Button from "../button";
import { ScrollTo } from "../../utils/scrollTo";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${Styles.container} ${scrolled ? Styles.scrolled : ""}`}>
      <div className={Styles.logotipo}>
       <Image
          src={Logo}
          alt="Logo"
          width={120}
          height={40}
          style={{ height: "auto", width: "auto"}}
        />
      </div>
      <nav className={Styles.menu}>{/* <Link href="/">Home</Link> */}</nav>
      <div className={Styles.action}>
        <Button title="Fale conosco" onClick={() => ScrollTo("contato")} />
      </div>
    </div>
  );
};

export default Header;
