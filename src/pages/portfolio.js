import * as React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import selfieImg from "../../asset/images/selfie.jpeg";
import companyIcon from "../../asset/icons/business_black_24dp.svg";
import faceIcon from "../../asset/icons/face_black_24dp.svg";
import agentImg from "../../asset/images/page2.jpeg";
import translatorImg from "../../asset/images/translator.png";
import archeryImg from "../../asset/images/archery.jpeg";

const Container = styled.div`
  width: 80%;
  padding-left: 10%;
  padding-right: 10%;

  #page1 {
    padding-top: 155px;
    height: 1100px;

    .description {
      font-size: 5vw;
      letter-spacing: 2px;
      width: 70%;
      position: absolute;
      font-weight: 600;
      top: 300px;
      left: 10%;
    }
    .selfie {
      width: 44%;
      float: right;
      border-radius: 48%;
    }
  }

  #page2 {
    height: 1400px;
    width: 80%;
    margin: 0 auto;

    .agentImg {
      width: 100%;
      border-radius: 10px;
      margin-top: 17px;
    }
  }

  #page3 {
    height: 1300px;
    width: 80%;
    margin: 0 auto;

    .translatorImg {
      width: 100%;
      border-radius: 10px;
      margin-top: 17px;
    }
  }

  #page4 {
    height: 1300px;
    width: 80%;
    margin: 0 auto;

    .archeryImg {
      width: 100%;
      border-radius: 10px;
      margin-top: 17px;
    }
  }

  #page5 {
    height: 1300px;
    width: 80%;
    margin: 0 auto;

    .archeryImg {
      width: 100%;
      border-radius: 10px;
      margin-top: 17px;
    }
  }
`;

const Scroller = styled.div`
  position: absolute;
  z-index: 10;
  top: 21%;
  left: 0;
  bottom: 0;
  width: 10%;
  height: 79%;
  pointer-events: none;
  user-select: none;

  .bar {
    width: 1px;
    height: 100%;
    background-color: black;
    margin-left: 50%;
  }

  .timeline {
    display: none;
  }
`;

const Head1 = styled.h1`
  margin: 0;
  font-size: 40px;
  font-weight: 800;
`;

const Date = styled.h2`
  padding: 0;
  margin: 0;
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 3px;
  padding-left: 2px;
`;

const Company = styled.div`
  padding: 0;
  margin: 0;
  height: 33px;
  margin-top: 20px;

  img {
    width: 20px;
    height: 20px;
    float: left;
    padding-top: 5px;
    margin-right: 10px;
  }

  span {
    font-size: 18px;
    font-weight: 700;
    float: left;
  }
`;

const Role = styled.div`
  padding: 0;
  margin: 0;
  height: 33px;
  margin-top: 4px;

  img {
    width: 20px;
    height: 20px;
    float: left;
    padding-top: 5px;
    margin-right: 10px;
  }

  span {
    font-size: 18px;
    font-weight: 700;
    float: left;
  }
`;

const Detail = styled.ul`
  margin-top: 30px;

  li {
    font-size: 20px;
    margin-top: 15px;
  }
`;

const KeySkills = styled.div`
  margin-top: 53px;
  padding-left: 18px;

  .title {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 13px;
  }

  span {
    font-size: 19px;
  }
`;

const Portfolio = () => {
  return (
    <Layout>
      <Scroller>
        <div className="bar"></div>
        <ul className="timeline">
          <li>Current</li>
          <li>2020.</li>
        </ul>
      </Scroller>
      <Container>
        <div id="page1">
          <div className="description">
            Hi, I'm Haley Ryu. <br /> I'm a proactive Frontend Developer.
            <br />I believe in the power of <br />
            communication.
          </div>
          <img src={selfieImg} className="selfie" />
        </div>
        <div id="page2">
          <Date>2020.12 - Current</Date>
          <Head1>AI Car Agent Builder</Head1>
          <Company>
            <img src={companyIcon} />
            <span>Hyundai Motor Company</span>
          </Company>
          <Role>
            <img src={faceIcon} />
            <span>Lead Frontend Developer</span>
          </Role>
          <img src={agentImg} className="agentImg" />
          <Detail>
            <li>
              Developed a Bot builder platform specialized in Mobility Domain
              using React, GraphQL, Apollo Client, HTML5/CSS.
            </li>
            <li>
              Developed a Bot builder platform specialized in Mobility Domain
              using React, GraphQL, Apollo Client, HTML5/CSS.
            </li>
            <li>
              Developed a Bot builder platform specialized in Mobility Domain
              using React, GraphQL, Apollo Client, HTML5/CSS.
            </li>
          </Detail>
          <KeySkills>
            <div className="title">Key Skills</div>
            <span>React, GraphQL, Apollo Client, TypeScript, HTML, CSS</span>
          </KeySkills>
        </div>

        <div id="page3">
          <Date>2020.10 - 2020.12</Date>
          <Head1>Hyundai Translator</Head1>
          <Company>
            <img src={companyIcon} />
            <span>Hyundai Motor Company</span>
          </Company>
          <Role>
            <img src={faceIcon} />
            <span>Frontend Developer</span>
          </Role>
          <img src={translatorImg} className="translatorImg" />
          <Detail>
            <li>
              Developed a Bot builder platform specialized in Mobility Domain
              using React, GraphQL, Apollo Client, HTML5/CSS.
            </li>
            <li>
              Developed a Bot builder platform specialized in Mobility Domain
              using React, GraphQL, Apollo Client, HTML5/CSS.
            </li>
            <li>
              Developed a Bot builder platform specialized in Mobility Domain
              using React, GraphQL, Apollo Client, HTML5/CSS.
            </li>
          </Detail>
          <KeySkills>
            <div className="title">Key Skills</div>
            <span>React, GraphQL, Apollo Client, TypeScript, HTML, CSS</span>
          </KeySkills>
        </div>

        <div id="page4">
          <Date>2020.07 - 2020.09</Date>
          <Head1>Archery AI Platform</Head1>
          <Company>
            <img src={companyIcon} />
            <span>Hyundai Motor Company</span>
          </Company>
          <Role>
            <img src={faceIcon} />
            <span>Frontend Developer</span>
          </Role>
          <img src={archeryImg} className="archeryImg" />
          <Detail>
            <li>
              Developed a Bot builder platform specialized in Mobility Domain
              using React, GraphQL, Apollo Client, HTML5/CSS.
            </li>
            <li>
              Developed a Bot builder platform specialized in Mobility Domain
              using React, GraphQL, Apollo Client, HTML5/CSS.
            </li>
            <li>
              Developed a Bot builder platform specialized in Mobility Domain
              using React, GraphQL, Apollo Client, HTML5/CSS.
            </li>
          </Detail>
          <KeySkills>
            <div className="title">Key Skills</div>
            <span>React, GraphQL, Apollo Client, TypeScript, HTML, CSS</span>
          </KeySkills>
        </div>

        <div id="page5">
          <Date>2020.04 - 2020.07</Date>
          <Head1>AI POC, Backoffice</Head1>
          <Company>
            <img src={companyIcon} />
            <span>Hyundai Motor Company</span>
          </Company>
          <Role>
            <img src={faceIcon} />
            <span>Frontend Developer</span>
          </Role>
          <img src={archeryImg} className="archeryImg" />
          <Detail>
            <li>
              Developed a Bot builder platform specialized in Mobility Domain
              using React, GraphQL, Apollo Client, HTML5/CSS.
            </li>
            <li>
              Developed a Bot builder platform specialized in Mobility Domain
              using React, GraphQL, Apollo Client, HTML5/CSS.
            </li>
            <li>
              Developed a Bot builder platform specialized in Mobility Domain
              using React, GraphQL, Apollo Client, HTML5/CSS.
            </li>
          </Detail>
          <KeySkills>
            <div className="title">Key Skills</div>
            <span>React, GraphQL, Apollo Client, TypeScript, HTML, CSS</span>
          </KeySkills>
        </div>
      </Container>
    </Layout>
  );
};

export default Portfolio;
