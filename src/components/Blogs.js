import React from 'react';
import styled from 'styled-components/macro'

import medium from '../public/medium.svg'
import parallaxImg from '../public/parallax.png'
import creativeImg from '../public/creative-agency.jpg'
import maxresdefault from '../public/maxresdefault.jpg'

const mobileWidth = '450px'

const Main = styled.div`
  min-height: 100vh;
  position: relative;
`;

const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeadingBG = styled.div`
  position: absolute;
  top: 10px;
  margin: 0 auto;
  padding: 10px;
  font-size: 80px;
  font-weight: 700;
  font-family: 'Montserrat';
  color: #f1f1f1;

  @media (min-width: ${mobileWidth}) {
    font-size: 300px;
    top: 0;
  }
`;
const HeadingText = styled.div`
  position: absolute;
  top: 45px;
  margin: 0 auto;
  font-size: 40px;
  font-family: 'Montserrat';

  @media (min-width: ${mobileWidth}) {
    font-size: 60px;
    top: 160px;
  }
`;

const Body = styled.div`
  position: relative;
  top: 145px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${mobileWidth}) {
    top: 380px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
`;

const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0;

  @media (min-width: ${mobileWidth}) {
    width: 1296px;
  }
`;

const Card = styled.div`

  width: 100%;
  margin: 0 1em 2em;
  background: #eee;
  border-radius: 10px;

  * {
    font-family: 'Poppins'
  }

  @media (min-width: ${mobileWidth}) {
    width: 400px;
  }
`;

const CImg = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;

  img {
    width: 100%;
    height: 250px;
    border-radius: 10px;
  }


  // @media (min-width: ${mobileWidth}) {
  //   width: 400px;
  // }
`;

const CBody = styled.div`
  padding: 15px 25px;

  p {
    font-size: 14px;
    font-weight: 400;
    color: #555;
    margin-bottom: 10px;
  }
`;

const CHeader = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const CFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding-botton: 20px;

  img {
    width: 80px;
  }
`;

const Link = styled.a`
    text-decoration: none;
    color: black;
`;

function Blogs(props) {

  const blogs = [
    {
      id: 1,
      title: "Parallax effect on CSS",
      content: "Parallax scrolling is a computer graphics technique used by web designers to create a faux-3D effect. As users scroll down a webpage, different layers of content or backgrounds move at different speeds, and this creates an optical illusion for users.",
      publishicon: medium,
      img: parallaxImg,
      link: "https://medium.com/@mohdniaal/parallax-effect-on-css-6891a396028d"
    },
    {
      id: 2,
      title: "Bootstrap framework on Angular",
      content: "Bootstrap is a framework to help you building and designing various responsive web pages. It includes HTML and CSS based design templates for typography, forms, buttons, tables, navigation, modals, image carousels, etc. It also gives you support for JavaScript plugins.          ",
      publishicon: medium,
      img: creativeImg,
      link: "https://medium.com/@mohdniaal/bootstrap-framework-on-angular-7cd82334a1d6"
    },
    {
      id: 3,
      title: "Angular + Animate.css",
      content: "Animate.css is a cross-browser library of CSS animations that is incredibly easy to use. Overall, the angular animation framework allows you to create animations that have the same native performance as pure CSS animations. The benefit is that you can easily add and control.",
      publishicon: medium,
      img: maxresdefault,
      link: "https://medium.com/@mohdniaal/animation-in-angular-using-css-5-easy-steps-cd2b893d6d59"
    }
  ];

  const cardItem = (item) => {
    return (
      <Card>
        <CImg><img src={item.img} alt={item.id}></img></CImg>
        <CBody>
          <CHeader>{item.title}</CHeader>
          <p>{item.content}</p>
          <CFooter>
            <img src={item.publishicon} alt="publisher" />
            <Link href={item.link}>Read more</Link>
          </CFooter>
        </CBody>
      </Card>
    )
  }

  return (
    <Main>
      <Heading>
        <HeadingBG>BLOGS</HeadingBG>
        <HeadingText>Blogs</HeadingText>
      </Heading>
      <Body>
        <Content>
          <Cards>
            {blogs.map((item) => cardItem(item))}
          </Cards>
        </Content>
      </Body>
    </Main>
  );
}

export default Blogs;