import netflixImg from "./assets/netflix.png";
import googleImg from "./assets/google.png";
import appleImg from "./assets/apple.png";
import microsoftImg from "./assets/microsoft.png";
import iphoneX from "./assets/iphone-x.png";
import person1 from "./assets/person-1.jpeg";
import person2 from "./assets/person-2.jpeg";
import image1 from "./assets/image-1.jpeg";
import image2 from "./assets/image-2.jpeg";
import image3 from "./assets/image-3.jpeg";
import image4 from "./assets/image-4.jpeg";
import image5 from "./assets/image-5.jpeg";
import image6 from "./assets/image-6.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faTachometerAlt,
  faLayerGroup,
  faUsers,
  faBars,
  faServer,
  faNetworkWired,
  faCogs,
  faArrowUp,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
  BtnToTop,
  ClientsContainer,
  ContactContainer,
  Feature,
  FeaturesContainer,
  Footer,
  GalleryContainer,
  Header,
  HeaderContainer,
  Headline,
  Item,
  Items,
  Logo,
  Navbar,
  NavbarContent,
  ProductContainer,
  Section,
  Testimonial,
  TestimonialsContainer,
} from "./App.styled";
import { useEffect, useState } from "react";

function App() {
  const [showButton, setShowButton] = useState(false);
  const [visible, setVisible] = useState(false);

  const checkScrollTop = () => {
    if (!showButton && window.pageYOffset > 500) {
      setShowButton(true);
    } else if (showButton && window.pageYOffset <= 500) {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);

    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showButton]);

  return (
    <div>
      <Navbar>
        <NavbarContent $visible={visible.toString()}>
          <Logo href="#">IT Solutions</Logo>
          <FontAwesomeIcon
            onClick={() => setVisible(!visible)}
            icon={faBars}
            size="3x"
          />
          <ul>
            <li>
              <a href="#features" onClick={() => setVisible(!visible)}>
                Sobre
              </a>
            </li>
            <li>
              <a href="#products" onClick={() => setVisible(!visible)}>
                Produtos
              </a>
            </li>
            <li>
              <a href="#gallery" onClick={() => setVisible(!visible)}>
                Galeria
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setVisible(!visible)}>
                Contato
              </a>
            </li>
          </ul>
        </NavbarContent>
      </Navbar>

      <Header>
        <HeaderContainer>
          <h1>Soluções tecnológicas inovadoras para impulsionar seu negócio</h1>
          <p>
            Transforme desafios em oportunidades com nossas soluções
            personalizadas, projetadas para otimizar processos, aumentar a
            eficiência e levar sua empresa ao próximo nível.
          </p>
          <a href="#features">Saiba Mais</a>
        </HeaderContainer>
      </Header>

      <Section>
        <Headline>Nossos Clientes</Headline>
        <ClientsContainer>
          <img src={netflixImg} className="client" alt="" />
          <img src={googleImg} className="client" alt="" />
          <img src={appleImg} className="client" alt="" />
          <img src={microsoftImg} className="client" alt="" />
        </ClientsContainer>
      </Section>

      <Section $dark="true" id="features">
        <Headline>O que fazemos</Headline>
        <FeaturesContainer>
          <Feature>
            <FontAwesomeIcon icon={faTachometerAlt} size="3x" />
            <h3>Otimização de Desempenho</h3>
            <p>
              Aceleramos seus processos com soluções que garantem máxima
              eficiência e performance, ajudando sua empresa a atingir novos
              patamares de produtividade.
            </p>
          </Feature>
          <Feature>
            <FontAwesomeIcon icon={faCode} size="3x" />
            <h3>Desenvolvimento Personalizado</h3>
            <p>
              Projetamos sistemas e aplicações sob medida para atender às
              necessidades específicas do seu negócio, utilizando as melhores
              práticas em tecnologia.
            </p>
          </Feature>
          <Feature>
            <FontAwesomeIcon icon={faLayerGroup} size="3x" />
            <h3>Integração de Sistemas</h3>
            <p>
              Conectamos plataformas e ferramentas diversas, criando um
              ecossistema digital integrado que melhora a comunicação e o fluxo
              de informações na sua empresa.
            </p>
          </Feature>
        </FeaturesContainer>
      </Section>

      <Section id="products">
        <Headline>Nossos produtos</Headline>
        <ProductContainer>
          <img src={iphoneX} />
          <Items>
            <Item>
              <FontAwesomeIcon icon={faServer} />
              <p>
                Garanta infraestrutura robusta e escalável com nossas soluções
                de servidores e armazenamento.
              </p>
            </Item>
            <Item>
              <FontAwesomeIcon icon={faNetworkWired} />
              <p>
                Otimize a conectividade com redes seguras e eficientes,
                projetadas para o seu sucesso.
              </p>
            </Item>
            <Item>
              <FontAwesomeIcon icon={faCogs} />
              <p>
                Automatize seus processos e eleve a eficiência operacional com
                soluções personalizadas para a sua empresa.
              </p>
            </Item>
            <Item>
              <FontAwesomeIcon icon={faUsers} />
              <p>
                Promova colaboração e engajamento com ferramentas que aproximam
                pessoas e otimizam o trabalho em equipe.
              </p>
            </Item>
          </Items>
        </ProductContainer>
      </Section>

      <Section $dark="true">
        <Headline>O que acham de nós</Headline>
        <TestimonialsContainer>
          <Testimonial>
            <div>
              <img src={person1} alt="Pessoa-1" />
              <p>
                "Contratamos a empresa para modernizar nosso sistema de vendas
                online, e o resultado foi incrível! As soluções implementadas
                deixaram nossos processos mais rápidos e confiáveis. O suporte
                técnico também foi excepcional, sempre à disposição para nos
                ajudar."
                <span>— Carlos Lima, Proprietário da EletroMax.</span>
              </p>
            </div>
          </Testimonial>
          <Testimonial>
            <div>
              <p>
                "Estávamos enfrentando muitos problemas com segurança de dados,
                mas a equipe solucionou tudo rapidamente. Agora, temos total
                tranquilidade para focar no crescimento do negócio. Recomendo
                sem pensar duas vezes!"
                <span>— Pedro Ribeiro, CEO da TechNova.</span>
              </p>
              <img src={person2} alt="Pessoa-2" />
            </div>
          </Testimonial>
        </TestimonialsContainer>
      </Section>

      <Section id="gallery">
        <Headline>Galeria</Headline>
        <GalleryContainer>
          <img src={image1} alt="imagem1" />
          <img src={image2} alt="imagem2" />
          <img src={image3} alt="imagem3" />
          <img src={image4} alt="imagem4" />
          <img src={image5} alt="imagem5" />
          <img src={image6} alt="imagem6" />
        </GalleryContainer>
      </Section>

      <Section $dark="true" id="contact">
        <Headline>Entre em contato!</Headline>
        <ContactContainer>
          <p>
            Preencha o formulário abaixo e nossa equipe entrará em contato o
            mais breve possível. Estamos prontos para atender às suas
            necessidades!
          </p>
          <form action="">
            <input type="text" name="name" placeholder="Nome" required />
            <input type="email" name="email" placeholder="E-mail" required />
            <textarea
              name="message"
              placeholder="Mensagem"
              rows={7}
              cols={50}
              required
            />
            <button type="submit">
              Enviar
              <FontAwesomeIcon icon={faPaperPlane} size="2x" />
            </button>
          </form>
        </ContactContainer>
      </Section>

      <Footer>
        <p>&copy; IT Solutions - Todos os direitos reservados.</p>
        <p>Desenvolvido por Maurício Naoki</p>
      </Footer>

      <BtnToTop href="#" $showbutton={showButton}>
        <FontAwesomeIcon icon={faArrowUp} size="2x" />
      </BtnToTop>
    </div>
  );
}

export default App;
