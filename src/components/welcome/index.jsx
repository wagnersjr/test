import Styles from "./welcome.module.scss";


const Welcome = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.shadow}></div>
      <div className={Styles.text}>
        <h1>ART LAF</h1>
        <h2>REFORMAS E DECORAÇÃO</h2>

        <p>
          Na <span>ARTLAF</span>, unimos criatividade, experiência e compromisso
          para oferecer serviços de reformas e decoração personalizados. Do
          projeto à execução, cuidamos de cada detalhe para que seu ambiente
          reflita estilo, conforto e funcionalidade.
        </p>
       
      </div>
      {/* <div className={Styles.image}>
        <Image src={BannerWelcome} alt="Banner Welcome" />
      </div> */}
    </div>
  );
};

export default Welcome;
