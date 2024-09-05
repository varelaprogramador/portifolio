
import { ArrowRight, MoveRight } from "lucide-react";
import arrow from "./assets/arrow.svg";

import fotoPerfil from "./assets/foto-main-Ryan.svg"
import divisionImage from "./assets/division-RV.svg";
import TagItem from "./components/Tag/TagItem";
import TagData from "./Data/TagData";
import Redes from "./components/redes-sociais/redes";



function App() {
  return (
    <main className="App">
      <section className="container-1">
        <h1 className="titulo-animado">Olá, seja Bem-vindo ao meu <span className="enfase">portifólio</span></h1>
        <p>Criado por <a href="" className="enfase">@Ryan Varela</a></p>
        <a className="arrow" href="#container-2">
          <img src={arrow}></img></a>
      </section>


      <section id="container-2" className="container-2">
        <div className="container-column" data-aos="fade-right">
          <h2 className="titulo-padrao">
            Quem sou <span className="enfase">eu?</span>
          </h2>
          <p className="paragrafo">
            Olá, meu nome é <span className="enfase">Ryan Varela</span>, sou um estudante,
            empreendedor e uma pessoa cheia de vontade de vencer.
            <br />
            <br />
            Sou Desenvolvedor Front-End,
            tenho conhecimento das seguintes Tecnologias/Ferramentas:
          </p>
          <div className="area-tag">
            {TagData.map(tag => {
              return (
                <TagItem key={tag.id} tag={tag} />
              )
            })}
          </div>
          <button style={{ width: "200px" }} className="btn-amarelo">
            Veja Mais Sobre Mim <ArrowRight size={15}></ArrowRight>
          </button>
        </div>
        <div className="container-column" data-aos="fade-left">
          <figure>
            <img className="foto-perfil" src={fotoPerfil}></img>
            <figcaption style={{ textAlign: "center" }}>Ryan Varela<br />
              <span style={{ color: "GrayText" }}>Desenvolvedor Front-End</span></figcaption>
          </figure>
        </div>
      </section>
      <div data-aos="fade-up" className="division">
        <img src={divisionImage}></img>

      </div>
      <section className="container-3">

        <h2 data-aos="fade-up" className="titulo-padrao"><span className="enfase">Skills</span> Principais</h2>
        <div data-aos="fade-up" className="grid-skills">

          <article  className="card-skills">
            <h2>Front end</h2>
            <p>Desenvolvimento de sites responsivos e interativos utilizando
              tecnologias modernas, como o React e Next,
              juntamente com bibliotecas populares como Tailwind CSS e Styled Components.</p>
          </article>
          <article  className="card-skills">
            <h2>UI Desginer</h2>
            <p>Desenvolvimento de sites prototipos de alta fidelidade via figma.
              Sou altamente adptavel para criação de prototipos UI nao sou dependente de nenhuma ferramenta.</p>

          </article>
          <article  className="card-skills">
            <h2>Automações</h2>
            <p>Comecei a pouco tempo a estudar automações. Sou capaz de criar automações complexas (Ainda estou estudando)</p>

          </article >
        </div>
        <div  className="legenda-skills">
          <p >Todas essas skills e experiencias me proporcionaram uma linha de raciocinio bastante singular
            ou seja tenho bastante ideias para <span className="enfase">potencialização de negóçios.</span> </p>
        </div>


      </section>
      <section data-aos="fade" className="container-4">
        <h2 data-aos="fade-up" className="titulo-call">Algo interessante em sua mente?<br></br>
        Vamos falar sobre seu projeto!</h2>
        <p data-aos="fade-up" className="paragrafo">Marque uma reunião no botão abaixo</p>
        <a  href="https://api.whatsapp.com/send?phone=+5534984443047&text=Olá%2C+gostaria+de+solicitar+o+orçamento+para+potencializar+meu+negócio.🚀">
        <button data-aos="fade-up"  className="btn-call">Agendar uma Reunião</button></a>
        <Redes></Redes>
        
      </section>
     

    </main>
  );
}

export default App;
