import styled from "styled-components";
import showcaseImg from "./assets/showcase.jpg";

interface NavbarContentType {
  $visible: string;
}

interface SectionType {
  $dark?: string;
}

interface BtnToTopType {
  $showbutton: boolean;
}

export const Navbar = styled.nav`
  width: 100%;
  background-color: #111111f0;
  color: #eee;
  position: fixed;
  z-index: 10;
  padding-block: 1.25rem;
  padding-inline: 2rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

  @media (min-width: 768px) {
    padding-inline: 3rem;
  }
`;

export const NavbarContent = styled.div<NavbarContentType>`
  width: 100%;
  height: 100%;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  svg {
    color: white;
    max-width: 4rem;
  }

  ul {
    width: 100%;
    display: ${(props) => (props.$visible === "true" ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    list-style: none;
    padding-block: 1rem;
  }

  ul li a {
    text-decoration: none;
    color: white;
    transition-duration: 300ms;
    font-weight: bold;
    font-size: 1.25rem;
  }

  ul li:hover a {
    opacity: 0.8;
  }

  @media (min-width: 768px) {
    flex-wrap: nowrap;

    ul {
      display: flex;
      flex-direction: row;
      justify-content: end;
      padding-block: 0;
    }

    svg {
      display: none;
    }
  }
`;

export const Logo = styled.a`
  font-size: 2rem;
  font-weight: 500;
  transition-duration: 300ms;
  text-decoration: none;
  color: white;

  &:hover {
    opacity: 0.8;
  }

  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const Header = styled.header`
  background: rgb(0, 0, 0, 0.5) url(${showcaseImg}) no-repeat center
    center/cover fixed;
  background-blend-mode: color;
  height: 100vh;
  color: #eee;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 78px;
`;

export const HeaderContainer = styled.div`
  max-width: 840px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  text-align: center;
  padding: 1rem;

  h1 {
    font-size: 2rem;
  }

  a {
    display: inline-block;
    padding: 15px 60px;
    background: #111;
    color: #eee;
    border-radius: 5px;
    text-transform: uppercase;
    font-weight: 600;
    transition: background 500ms ease;
    text-decoration: none;

    &:hover {
      cursor: pointer;
      background: #000;
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1.2rem;
      padding: 7px;
    }

    a {
      font-size: 1.1rem;
    }
  }
`;

export const Headline = styled.h2`
  font-size: 2.2rem;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  padding-bottom: 4rem;
  letter-spacing: 2px;
`;

export const Section = styled.section<SectionType>`
  background-color: ${(props) => (props.$dark ? "#222" : "#eee")};
  padding-block: 100px;
  padding-inline: 20px;
  text-align: center;
  color: ${(props) => (props.$dark ? "#eee" : "#222")};
`;

export const ClientsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  gap: 1rem;
  max-width: 1024px;
  margin-inline: auto;

  img {
    display: inline-block;
    width: 50%;
    margin: auto;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const FeaturesContainer = styled.div`
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  color: #eee;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Feature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  background: #333;
  padding: 30px;
  border-radius: 5px;

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  @media (min-width: 768px) {
    align-items: start;
    text-align: start;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Items = styled.div`
  max-width: 650px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
  padding: 10px;
  margin: 15px 0;
  font-size: 1.2rem;

  svg {
    width: 5rem;
    height: 5rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: start;

    svg {
      width: 3.5rem;
      height: 3.5rem;
    }
  }
`;

export const TestimonialsContainer = styled.div`
  max-width: 1024px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const Testimonial = styled.div`
  font-size: 1.2rem;
  background: #333;
  padding: 15px;
  border-radius: 5px;
  margin: 15px 0;

  div {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    text-align: center;

    img {
      width: 200px;
      height: auto;
      margin: 15px;
      border-radius: 50%;
    }

    p span {
      padding-top: 1rem;
      display: block;
      font-weight: 500;
    }

    @media (min-width: 768px) {
      flex-direction: row;
      text-align: start;
    }
  }

  &:nth-child(even) {
    div {
      flex-direction: column-reverse;
    }
  }

  @media (min-width: 768px) {
    &:nth-child(odd) {
      margin-right: 10rem;
    }

    &:nth-child(even) {
      margin-left: 10rem;

      div {
        flex-direction: row;
      }

      p {
        text-align: end;
      }
    }
  }
`;

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  grid-gap: 30px;
  max-width: 1250px;
  margin: auto;

  img {
    display: inline-block;
    width: 100%;
    height: 300px;
    border-radius: 5px;
    transition-duration: 300ms;

    &:hover {
      filter: brightness(50%);
    }
  }

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ContactContainer = styled.div`
  max-width: 768px;
  margin: auto;

  form {
    width: 70%;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;

    input,
    textarea,
    button {
      border-radius: 0.5rem;
      padding: 1rem;
      border: none;
      outline-color: #222;
    }

    button {
      background-color: white;
      transition-duration: 300ms;
      font-weight: bold;
      font-size: 1.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      margin: auto;

      &:hover {
        cursor: pointer;
        background-color: #181414;
        color: white;
      }

      svg {
        width: 1.25rem;
        height: 1.25rem;
        margin-left: 0.5rem;
      }
    }
  }
`;

export const Footer = styled.footer`
  background: #141313;
  color: #eee;
  padding: 30px;
  text-align: center;
`;

export const BtnToTop = styled.a<BtnToTopType>`
  position: fixed;
  right: 40px;
  bottom: 40px;
  transition-duration: 300ms;
  opacity: ${(props) => (props.$showbutton ? "100" : "0")};
  pointer-events: ${(props) => (props.$showbutton ? "auto" : "none")};
  background-color: #0a0606;
  border-radius: 50%;
  height: 3.5rem;
  width: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: #eee;
  }

  &:hover {
    background-color: #181414;
  }
`;
