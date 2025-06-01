import Styles from "./footer.module.scss";
import Image from "next/image";
import Logo from "/public/images/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className={Styles.container}>
        <div className={`${Styles.column} ${Styles.columnPrincipal}`}>
          <Image
            src={Logo}
            alt="Logo"
            width={120}
            height={60}
            style={{ height: "auto", width: "auto" }}
          />
          <h1 className={Styles.title}>(21) 98954-6413</h1>
          <h1 className={Styles.title}>(21) 97966-3432</h1>
          <p>luiz2artes@gmail.com</p>
        </div>

        {/* <div className={Styles.column}>
          <h1>MENU</h1>
          <p>Quem somos</p>
          <p>Cases</p>
        </div>

        <div className={Styles.column}>
          <h1>CONTEUDO</h1>
          <p>E-books</p>
          <p>Fórmulas prontas</p>
        </div> */}

        {/* <div className={Styles.column}>
          <h1>SOCIAL</h1>
        </div> */}

        <div className={Styles.allRightReserved}>
          {" "}
          <p>©2025 ARTLAF - Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
