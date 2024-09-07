"user client";
import "./sobreStyle.css";
import TagItem from "../../components/Tag/TagItem";
import TagDataGeral from "../../Data/TagDataGeral";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import Redes from "../../components/redes-sociais/redes";


function downloadPDF() {
  import('html2pdf.js').then((html2pdf) => {
    const element = document.getElementById("curriculo-pdf");
    
    if (element) {
      const options = {
        margin: 0,  
        filename: 'pagina.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },  
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },  
      };

      html2pdf.default().set(options).from(element).save();
    } else {
      console.error('Elemento com ID "curriculo-pdf" não encontrado');
    }
    
  }).catch((err) => console.error('Error importing html2pdf.js', err));
}




function Sobre() {
  return (
    <main id="curriculo-pdf" className="App">
      <section className="container-1-sobre">

        <figure data-aos="fade-up" >
          <img 
            src="/assets/imagem-Ryan-Round.png"
            width={250}
            height={250}
            alt="perfil"
          />
          <figcaption style={{ textAlign: "center" }}>Ryan Varela<br />
            <span style={{ color: "GrayText" }}>Desenvolvedor Front-End</span></figcaption>
        </figure>
      </section>
      <section className="container-2-sobre">
        <h2 data-aos="fade-left" className="titulo-padrao">
          Quem sou <span className="enfase">eu?</span>
        </h2>
        <p data-aos="fade-left" data className="paragrafo">
          Olá, sou <span className="enfase">Ryan Varela</span>, um estudante e empreendedor com uma paixão incessante por tecnologia e inovação.
          <span className="enfase">Resido em Uberlândia, MG</span>, e me dedico ao <span className="enfase">desenvolvimento front-end,</span> buscando constantemente aprimorar minhas habilidades
          e me superar em cada projeto.  Tenho conhecimento sólido em diversas tecnologias e ferramentas, que utilizo para criar
          soluções digitais eficazes e impactantes.
        </p>
      </section>
      <section className="container-3-sobre">
        <h2 className="titulo-padrao">
          Minhas <span className="enfase">Habilidades</span>
        </h2>
        <h3 className="titulo-padrao">
          Soft <span className="enfase">Skills:</span>
        </h3>
        <div className="container-skills-list">
          <div data-aos="fade-left" >
            <ol className="lista-skills-ordenada">
              <li>Empreendedor</li>
              <li>Proativo</li>
              <li>autodidata</li>
              <li>Comunicativo</li>
            </ol>
          </div>
          <div data-aos="fade-right" >
            <ol start={5}>
              <li>Flexível</li>
              <li>Dinâmico</li>
              <li>Resolução de problemas</li>
            </ol>
          </div>
        </div>
        <h3 className="titulo-padrao">
          Hard <span className="enfase">Skills:</span>
        </h3>
        <div className="area-tag-geral">
          {TagDataGeral.map(tag => {
            return (
              <TagItem key={tag.id} tag={tag} />
            )
          })}
        </div>
        <p>Ao clicar em uma das Hard Skill verá todos meus projetos com tal tecnologia entre outros detalhes</p>
        <div style={{display:"inline-block"}}>
        <button onClick={downloadPDF} className="btn-yellow-full">
          Baixar Pagina em PDF <Download size={"1.1rem"}></Download>
        </button></div>
        <a download href="/curriculo.pdf">

                <button className="btn-yellow-full">
                    Baixar CV <Download size={"1.1rem"}></Download>
                </button></a>


      </section>
      <section id="contact" data-aos="fade" className="container-4">
        <h2 data-aos="fade-up" className="titulo-call">Algo interessante em sua mente?<br></br>
          Vamos falar sobre seu projeto!</h2>
        <p data-aos="fade-up" className="paragrafo">Marque uma reunião no botão abaixo</p>
        <a href="https://api.whatsapp.com/send?phone=+5534984443047&text=Olá%2C+gostaria+de+solicitar+o+orçamento+para+potencializar+meu+negócio.🚀">
          <button data-aos="fade-up" className="btn-call">Agendar uma Reunião</button></a>
        <Redes></Redes>

      </section>


    </main>
  );
}

export default Sobre;
