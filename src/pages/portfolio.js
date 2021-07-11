import * as React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import selfieImg from "../../asset/images/selfie.jpeg";
import companyIcon from "../../asset/icons/business_black_24dp.svg";
import faceIcon from "../../asset/icons/face_black_24dp.svg";
import agentImg from "../../asset/images/page2.jpeg";
import translatorImg from "../../asset/images/translator.png";
import archeryImg from "../../asset/images/archery.jpeg";
import MessageIcon from "../../asset/icons/3d/Message_perspective_matte.png";
import AppsIcon from "../../asset/icons/3d/Add_apps_perspective_matte.png";
import BrowserIcon from "../../asset/icons/3d/Browser_perspective_matte.png";
import FlashIcon from "../../asset/icons/3d/Flash_perspective_matte.png";
import TargetIcon from "../../asset/icons/3d/Target_perspective_matte.png";
import FAQIcon from "../../asset/icons/3d/FAQ_perspective_matte.png";
import MarketingIcon from "../../asset/icons/3d/Marketing_perspective_matte.png";
import BellIcon from "../../asset/icons/3d/Bell_perspective_matte.png";
import CrownIcon from "../../asset/icons/3d/Crown_perspective_matte.png";
import DashboardIcon from "../../asset/icons/3d/Dashboard_perspective_matte.png";
import TrophyIcon from "../../asset/icons/3d/Trophy_perspective_matte.png";

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
            Hello, I'm Haley Ryu. <br /> I'm a proactive and creative Frontend
            Engineer.
            <br />I believe in the power of communication.
          </div>
          <img src={selfieImg} className="selfie" />
        </div>
        <div className="article">
          <h3 className="companyTitle">
            <em>Hyundai Motor Company</em>
            <span>Software Engineer</span>
          </h3>
          <BigCard>
            <div className="title">
              <img src={AppsIcon} className="icon" />
              <span>AI Virtual Assistant Platform</span>
            </div>
            <div className="contents">
              <ul>
                <li>asdfasdf</li>
                <li>asdfasdf</li>
                <li>asdfasdf</li>
              </ul>
              <Image
                bg={
                  "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/tech/5a8b7ef7017a00001.png?type=thumb&opt=C630x472"
                }
              ></Image>
            </div>
          </BigCard>
          <BigCard>
            <div className="title">
              <img src={FlashIcon} className="icon" />
              <span>AI Virtual Assistant Platform</span>
            </div>
            <div className="contents">
              <ul>
                <li>asdfasdf</li>
                <li>asdfasdf</li>
                <li>asdfasdf</li>
              </ul>
              <Image
                bg={
                  "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/tech/5a8b7ef7017a00001.png?type=thumb&opt=C630x472"
                }
              ></Image>
            </div>
          </BigCard>
          <BigCard>
            <div className="title">
              <img src={TargetIcon} className="icon" />
              <span>AI Virtual Assistant Platform</span>
            </div>
            <div className="contents">
              <ul>
                <li>asdfasdf</li>
                <li>asdfasdf</li>
                <li>asdfasdf</li>
              </ul>
              <Image
                bg={
                  "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/tech/5a8b7ef7017a00001.png?type=thumb&opt=C630x472"
                }
              ></Image>
            </div>
          </BigCard>
          <h3 className="companyTitle">
            <em>Kakao Corp.</em>
            <span>Software Engineer</span>
          </h3>
          <BigCard>
            <div className="title">
              <img src={FAQIcon} className="icon" />
              <span>AI Virtual Assistant Platform</span>
            </div>
            <div className="contents">
              <ul>
                <li>asdfasdf</li>
                <li>asdfasdf</li>
                <li>asdfasdf</li>
              </ul>
              <Image
                bg={
                  "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/tech/5a8b7ef7017a00001.png?type=thumb&opt=C630x472"
                }
              ></Image>
            </div>
          </BigCard>
          <BigCard>
            <div className="title">
              <img src={CrownIcon} className="icon" />
              <span>AI Virtual Assistant Platform</span>
            </div>
            <div className="contents">
              <ul>
                <li>asdfasdf</li>
                <li>asdfasdf</li>
                <li>asdfasdf</li>
              </ul>
              <Image
                bg={
                  "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/tech/5a8b7ef7017a00001.png?type=thumb&opt=C630x472"
                }
              ></Image>
            </div>
          </BigCard>
          <BigCard>
            <div className="title">
              <img src={BellIcon} className="icon" />
              <span>AI Virtual Assistant Platform</span>
            </div>
            <div className="contents">
              <ul>
                <li>asdfasdf</li>
                <li>asdfasdf</li>
                <li>asdfasdf</li>
              </ul>
              <Image
                bg={
                  "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/tech/5a8b7ef7017a00001.png?type=thumb&opt=C630x472"
                }
              ></Image>
            </div>
          </BigCard>
          <h3 className="companyTitle" style={{ marginBottom: 10 }}>
            <img
              src={TrophyIcon}
              width="39"
              height="39"
              style={{ float: "left", marginRight: 15, paddingTop: 3 }}
            />
            <em>Leadership, Activities and Awards</em>
          </h3>
          <SmallCard>
            <div className="card">
              <div className="title">Got a Patent</div>
              <div className="desc" style={{ height: 124 }}>
                <ul>
                  <li>
                    Server for managing natural language processing engines
                  </li>
                  <li>
                    Operate as a resource to less experienced Software
                    Engineers, providing
                  </li>
                </ul>
              </div>
              <img
                src={
                  "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/tech/5a8b7ef7017a00001.png?type=thumb&opt=C630x472"
                }
              />
            </div>
          </SmallCard>
          <SmallCard>
            <div className="card">
              <div className="title">Got a Patent</div>
              <div className="desc" style={{ height: 124 }}>
                <ul>
                  <li>
                    Server for managing natural language processing engines
                  </li>
                  <li>
                    Operate as a resource to less experienced Software
                    Engineers, providing
                  </li>
                </ul>
              </div>
              <img
                src={
                  "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/tech/5a8b7ef7017a00001.png?type=thumb&opt=C630x472"
                }
              />
            </div>
          </SmallCard>
          <SmallCard>
            <div className="card">
              <div className="title">Got a Patent</div>
              <div className="desc" style={{ height: 124 }}>
                <ul>
                  <li>
                    Server for managing natural language processing engines
                  </li>
                  <li>
                    Operate as a resource to less experienced Software
                    Engineers, providing
                  </li>
                </ul>
              </div>
              <img
                src={
                  "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/tech/5a8b7ef7017a00001.png?type=thumb&opt=C630x472"
                }
              />
            </div>
          </SmallCard>
          <SmallCard>
            <div className="card">
              <div className="title">Got a Patent</div>
              <div className="desc" style={{ height: 124 }}>
                <ul>
                  <li>
                    Server for managing natural language processing engines
                  </li>
                  <li>
                    Operate as a resource to less experienced Software
                    Engineers, providing
                  </li>
                </ul>
              </div>
              <img
                src={
                  "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/tech/5a8b7ef7017a00001.png?type=thumb&opt=C630x472"
                }
              />
            </div>
          </SmallCard>
          <SmallCard>
            <div className="card">
              <div className="title">Got a Patent</div>
              <div className="desc" style={{ height: 124 }}>
                <ul>
                  <li>
                    Server for managing natural language processing engines
                  </li>
                  <li>
                    Operate as a resource to less experienced Software
                    Engineers, providing
                  </li>
                </ul>
              </div>
              <img
                src={
                  "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/tech/5a8b7ef7017a00001.png?type=thumb&opt=C630x472"
                }
              />
            </div>
          </SmallCard>
          <SmallCard>
            <div className="card">
              <div className="title">Got a Patent</div>
              <div className="desc" style={{ height: 124 }}>
                <ul>
                  <li>
                    Server for managing natural language processing engines
                  </li>
                  <li>
                    Operate as a resource to less experienced Software
                    Engineers, providing
                  </li>
                </ul>
              </div>
              <img
                src={
                  "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/tech/5a8b7ef7017a00001.png?type=thumb&opt=C630x472"
                }
              />
            </div>
          </SmallCard>
        </div>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  //width: 80%;
  //padding-left: 10%;
  //padding-right: 10%;
  font-family: "Open Sans", sans-serif;

  #page1 {
    padding-top: 155px;
    height: 700px;

    .description {
      font-size: 2rem;
      letter-spacing: 1px;
      width: calc(100% - 400px);
      //position: absolute;
      float: left;
      font-weight: 600;
      //top: 300px;
      //left: 10%;
    }
    .selfie {
      width: 400px;
      height: 400px;
      object-fit: cover;
      float: left;
      border-radius: 50%;
    }
  }

  .article {
    position: relative;
    max-width: 1296px;
    margin: 0 auto;
    padding-bottom: 182px;

    @media screen and (max-width: 1439px) {
      max-width: 999px;
    }

    @media screen and (max-width: 1023px) {
      //padding-bottom: 172px;
      max-width: 666px;
    }

    @media screen and (max-width: 767px) {
      max-width: 364px;
      //padding-left: 24px;
      //padding-right: 24px;
    }

    .companyTitle {
      font-size: 33px;
      line-height: 46px;
      margin-top: 49px;

      em {
        display: block;
        font-style: normal;
      }
      span {
        font-size: 24px;
      }
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

const BigCard = styled.div`
  border-radius: 14px;
  background-color: #fff;
  text-align: center;
  box-shadow: 2px 5px 40px 0 rgb(0 0 0 / 8%);
  box-sizing: border-box;
  margin-bottom: 39px;
  min-height: 400px;

  .title {
    display: flex;
    padding: 46px 49px 0;

    .icon {
      width: 39px;
      height: 39px;
      margin-right: 17px;
      float: left;
    }
    span {
      float: left;
      font-size: 24px;
      font-weight: 700;
    }
  }

  .contents {
  }
`;

const SmallCard = styled.div`
  display: inline-block;
  margin-top: 36px;
  padding: 0 18px;
  vertical-align: top;
  box-sizing: border-box;

  .card {
    min-height: 420px;
    overflow: hidden;
    position: relative;
    width: 297px;
    border-radius: 14px;
    background-color: #ffffff;
    box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 9%);

    .title {
      padding: 25px 25px 0;
      display: -webkit-box;
      //overflow: hidden;
      height: fit-content;
      font-size: 22px;
      line-height: 32px;
      color: black;
      //-webkit-box-orient: vertical;
      //-webkit-line-clamp: 2;
      font-weight: 600;
    }

    .desc {
      font-size: 14px;
      padding-top: 19px;
      color: #000000b3;
      padding-left: 25px;
      padding-right: 25px;
      ul {
        padding: 0;
        padding-left: 25px;
        margin-top: 0;
        margin-bottom: 0;
        li:nth-child(2) {
          margin-top: 5px;
        }
      }
    }
    img {
      width: 100%;
      height: 220px;
      display: block;
    }
  }
`;

const Image = styled.div`
  background: url(${(props) => props.bg});
  width: 100%;
  height: ${(props) => (props.height ? `${props.height}px` : "600px")};
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

export default Portfolio;
