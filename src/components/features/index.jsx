import Image from "next/image";
import Styles from "./features.module.scss";
import Icon from "/public/images/icon.svg";
import Toldo from "/public/images/toldo.jpg";
import Rebaixamento from "/public/images/rebaixamento.jpg";
import Porcelanato from "/public/images/porcelanato.jpg";
import Grafiato from "/public/images/grafiato.jpg";

const Features = () => {
  return (
    <div className={Styles.container}>
      <h1>Quem Somos:</h1>
      <p>
        Somos uma empresa especializada em reformas e decoração,
        com foco na excelência, no bom gosto e no compromisso com a satisfação
        de nossos clientes. Atuamos com uma equipe experiente e dedicada, pronta
        para transformar qualquer ambiente em um espaço único, funcional e
        acolhedor.
      </p>

      <div className={Styles.features}>
        <div className={Styles.feature}>
          <div className={Styles.icon}>
          <Image src={Toldo} alt="foto-toldo" className={Styles.photo}/>
          </div>
          <h2>Instalação de Toldos e Coberturas</h2>
          <p>
            Trabalho especializado na instalação, manutenção e reparo de toldos
            e coberturas, com opções elétricas e hidráulicas. Atendo projetos
            residenciais, comerciais e industriais, sempre prezando pela
            qualidade, segurança e funcionalidade.
          </p>

          <p>
           
            O que você pode esperar do meu serviço: Qualidade e Durabilidade:
            Utilizo materiais de alta resistência, garantindo um serviço durável
            e seguro, ideal para diferentes condições climáticas. Design Sob
            Medida: As coberturas e toldos são projetados para se integrar
            perfeitamente ao seu espaço, proporcionando um visual moderno e
            elegante. Tecnologia de Ponta: Conto com sistemas elétricos e
            hidráulicos avançados para facilitar a operação, com controle remoto
            e funcionalidades inovadoras.
          </p>
        </div>
        <div className={Styles.feature}>
         <div className={Styles.icon}>
          <Image src={Rebaixamento} alt="foto-rebaixamento" className={Styles.photo}/>
          </div>
          <h2>Instalação de Rebaixamento em Gesso, PVC, Drywall e Isopor</h2>
          <p>
            Somos profissionais especializados na instalação de rebaixamento de
            teto, trabalhando com gesso, PVC, drywall e isopor. Realizo serviços
            com acabamento de qualidade, alinhados com o que há de mais moderno
            em estética e funcionalidade para interiores.
          </p>
          <p>
            Atendo projetos residenciais, comerciais e corporativos, sempre com
            atenção aos detalhes, prazos e às necessidades de cada cliente. Seja
            para valorizar o ambiente, melhorar a iluminação ou dar um toque de
            sofisticação, estou pronto para entregar um serviço de confiança e
            alto padrão. Entre em contato e peça seu orçamento!
          </p>
        </div>
        <div className={Styles.feature}>
         <div className={Styles.icon}>
          <Image src={Grafiato} alt="foto-pintura" className={Styles.photo}/>
          </div>
          <h2>Pintura e Decoração</h2>
          <p>
            Na <span>ARTLAF</span>, somos especialistas em pinturas com grafiato
            e textura, oferecendo soluções personalizadas que unem beleza,
            resistência e sofisticação. Nosso compromisso é transformar cada
            parede em um elemento de destaque, valorizando tanto ambientes
            internos quanto externos com acabamentos modernos e de alta
            durabilidade. Trabalhamos com técnicas profissionais, aplicando
            materiais de primeira linha e seguindo rigorosos padrões de
            qualidade. Cada projeto é executado com atenção aos detalhes, desde
            a preparação da superfície até o acabamento final, garantindo um
            resultado impecável!
          </p>

          <p>
            <span>Grafiato: </span>
            Ideal para quem busca um visual elegante e rústico ao mesmo tempo, o
            grafiato proporciona textura e profundidade à parede, além de ser
            resistente a intempéries e fácil de manter. Texturas decorativas:
            Aplicamos diversos tipos de texturas artísticas, criando efeitos
            visuais únicos que agregam personalidade ao ambiente.
          </p>

          <p>
            <span>Texturas decorativas: </span>
            Aplicamos diversos tipos de texturas artísticas, criando efeitos
            visuais únicos que agregam personalidade ao ambiente.
          </p>
        </div>
        <div className={Styles.feature}>
          <div className={Styles.icon}>
          <Image src={Porcelanato} alt="foto-porcelanato" className={Styles.photo}/>
          </div>
          <h2>Colocações de Pisos e Porcelanatos</h2>
          <p>
            Na <span>ARTLAF</span>, somos especialistas em instalação de pisos,
            porcelanatos e revestimentos em geral, oferecendo soluções completas
            com alto padrão de qualidade, acabamento impecável e compromisso com
            prazos e excelência. Atuamos com foco total na satisfação do
            cliente, entregando ambientes com acabamento sofisticado,
            alinhamento preciso e durabilidade garantida. Cada projeto é
            executado por profissionais qualificados, utilizando as melhores
            técnicas e ferramentas do mercado.
          </p>
          <p>
            Nossos serviços incluem: Instalação de porcelanatos, cerâmicas,
            pisos vinílicos e outros tipos de revestimento Preparação e
            nivelamento de superfícies Recortes e acabamentos personalizados
            Aplicação de rejuntes com acabamento fino Consultoria técnica e
            acompanhamento de obra Trabalhamos em obras residenciais, comerciais
            e corporativas, sempre com seriedade, transparência e atenção aos
            detalhes. Nosso compromisso é entregar não apenas um serviço, mas um
            resultado que supere as expectativas. Entre em contato conosco e
            solicite um orçamento. Vamos transformar o seu espaço com qualidade
            e profissionalismo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
