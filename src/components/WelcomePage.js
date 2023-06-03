import React, { useEffect, useRef } from 'react';
import styled from 'styled-components/macro'
import icons from '../lib/utils/icons'
import profilePic from '../public/profile-pic.jpg';
import assets from '../lib/assets'

const mobileWidth = '450px'

const Main = styled.div`
  height: 100vh;
  display: flex;
`;

const LeftSection = styled.div`
  height: 100vh;
  // background-image: linear-gradient(120deg, rgba(240, 147, 251, 1) 0%, rgba(245, 87, 108, 1) 100%);
  background-image: linear-gradient(120deg, rgb(240 114 255) 0%, rgb(178 48 65) 100%);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  @media (min-width: ${mobileWidth}) {
    animation: slide-in 900ms .9s cubic-bezier(0.85, 0, 0.15, 1) both;
  }
`;
const LContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const LProfile = styled.div`
  height: 200px;
  width: 200px;
  background-image: url(${profilePic});
  background-size: cover;
  border-radius: 150px;
  // transform: scale(.8);
  margin: 20px auto;
  animation: flower 900ms 2s both;
  // filter: grayscale(100%);

  @media (min-width: ${mobileWidth}) {
    display: none;
  }
`;
const Name = styled.div`
  font-size: 50px;
  font-weight: 600;
  font-family: 'Montserrat';
  animation: text-clip 1s 0s cubic-bezier(0.5, 0, 0.1, 1) both;

  @media (min-width: ${mobileWidth}) {
    font-size: 60px;
  }
`;
const Title = styled.div`
  font-size: 18px;
  line-height: 40px;
  font-family: 'Montserrat';
  margin-bottom: 10px;
  animation: text-clip 1s 0s cubic-bezier(0.5, 0, 0.1, 1) both;

  @media (min-width: ${mobileWidth}) {
    font-size: 25px;
  }
`;
const Links = styled.div`
  width: 200px;
  display: flex;
  animation: text-clip 1s 0s cubic-bezier(0.5, 0, 0.1, 1) both;

  svg {
      filter: grayscale(1);
      width: 25px;
      height: 25px;
      margin-right: 10px;
      filter: invert(10000%) contrast(1000%);
  }

  svg:hover {
      filter: none;
  }
`;


const RightSection = styled.div`
  height: 100vh;
  flex: 3; 
  position: relative;
`;
const RContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  overflow: hidden;
`;
const Profile = styled.div`
  position: relative;
  height: 250px;
  width: 250px;
  background-image: url(${profilePic});
  background-size: cover;
  border-radius: 150px;
  transform: scale(.8);

  @media (min-width: ${mobileWidth}) {
    animation: appear 500ms 1.7s both;
  }
`;

const IconsContainer = styled.div`
  pointer-events: none;
  animation: flower 300ms 1.7s both;
`;

const ClipContainer = styled.div`
  animation: counter-rotate 80s infinite;
  position: absolute;
  top: -50px;
  left: -50px;
`;
const Clip = styled.div`
  height: 350px;
  width: 350px;
  border-radius: 200px;
  border: 2px dashed #777;
  margin: auto;
  animation: flower 400ms 1.9s both;
`;
const Border1 = styled.div`
  position: absolute;
  border-radius: 100%;
  border: 5px dotted #ededed;
  width: 800px;
  height: 800px;
  left: -275px;
  top: -275px;
  animation: counter-rotate 90s infinite linear;
`;
const Border2 = styled.div`
  position: absolute;
  border-radius: 100%;
  border: 5px dotted #ededed;
  width: 850px;
  height: 850px;
  left: -300px;
  top: -300px;
  animation: rotate 90s infinite linear;
`;
const Border3 = styled.div`
  position: absolute;
  border-radius: 100%;
  border: 5px dotted #ededed;
  width: 900px;
  height: 900px;
  left: -325px;
  top: -325px;
  animation: counter-rotate 90s infinite linear;
`;
const Icons = styled.div`
  position: absolute;
  left: -125px;
  top: -125px;
  height: 500px;
  width: 500px;
  margin: auto;
  animation: rotate 90s infinite linear;

  svg {
    position: absolute;
    width: 80px;
    animation: counter-rotate 90s infinite linear;
  }
`;

function WelcomePage(props) {
  const designations = ["Frontend Developer", "Angular Developer"]
  const designation = useRef()
  const ICONS_CONTAINER_WIDTH = 500;


  const getRandomString = (length) => {
    var randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var result = "";
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(
        Math.floor(Math.random() * randomChars.length)
      );
    }
    return result;
  }
  
  useEffect(() => {
    let j = 0;
    const interval = setInterval(() => {
      const len = 20;
      Array.from({length: len}).forEach((_, i) => {
        setTimeout((_) => {
          designation.current.innerText = (i===len-1) ? designations[ j%designations.length ] : getRandomString(10)
        }, i*len);
      })
      j++
    }, 2000);
    return () => clearInterval(interval);
  });

  return (
    <Main>
      <LeftSection>
        <LContent>
          <LProfile />
          <div>
            <Name>Muhammed</Name>
            <Name>Nihal</Name>
          </div>
          <Title ref={designation}>{designations[designations.length-1]}</Title>
          <Links>
          <a href="https://www.instagram.com/m.niaal/">{icons.insta.icon}</a>
          <a href="https://github.com/mohdniaal">{icons.github.icon}</a>
          <a href="https://medium.com/@mohdniaal">{icons.medium.icon}</a>
          <a href="https://www.linkedin.com/in/muhammed-nihal-k-1b18a1250/">{icons.linkedin.icon}</a>
          </Links>
        </LContent>
      </LeftSection>
      <RightSection>
        <RContent>
          <Profile>
            <IconsContainer>
              <ClipContainer>
                <Clip />
              </ClipContainer>
              <Border1 />
              <Border2 />
              <Border3 />
              <Icons>
                {assets.map((f, key) => {
                  const index = parseInt(key, 10) / assets.length;
                  const r = ICONS_CONTAINER_WIDTH / 2;
                  const left = 210 + r * Math.cos(2 * Math.PI * index);
                  const top = 210 + r * Math.sin(2 * Math.PI * index);
                  return React.cloneElement(f, {
                    key,
                    style: { left, top },
                  });
                })}
              </Icons>
            </IconsContainer>
          </Profile>
        </RContent>
      </RightSection>
    </Main>
  );
}

export default WelcomePage;