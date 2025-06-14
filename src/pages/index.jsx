import ButtonWpp from "../components/buttonwpp";
import Contato from "../components/contato";
import Features from "../components/features";
import Footer from "../components/footer";
import Header from "../components/header";
import Welcome from "../components/welcome";



import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Welcome />
      <Features />
      <Contato />
      <Footer />
      <ButtonWpp
        phoneNumber="5521979663432" 
        message="Olá, gostaria de mais informações!" 
      />
      
    </div>
  );
}


