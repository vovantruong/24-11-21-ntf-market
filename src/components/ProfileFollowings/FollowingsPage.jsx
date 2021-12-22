import React, { useState } from "react";
import {
  Container,
  Row,
  Col, Image,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import bgItem from "../../assets/images/Profile_followings_and_Profile_follows/bg_item.svg";
import avatar from "../../assets/images/Profile_followings_and_Profile_follows/avatar.svg";
import Image01 from "../../assets/images/Profile_followings_and_Profile_follows/content.svg";
import twitter from "../../assets/images/Profile/twiter.svg";
import instagram from "../../assets/images/Profile/instagram.svg";
import facebook from "../../assets/images/Profile/facebook.svg";
import "../../assets/css/Followings.css";
import { Link } from "react-router-dom";
const salyFadel = [
  {
    className: "first",
    srcImg: avatar,
    title: "Sally Fadel",
    text: "161 followers",
    link: "Unfollow",
  },
  {
    className: "second",
    srcImg: avatar,
    title: "Sally Fadel",
    text: "161 followers",
    link: "Unfollow",
  },
  {
    className: "thirst",
    srcImg: avatar,
    title: "Sally Fadel",
    text: "161 followers",
    link: "Unfollow",
  },
];
const salyFadel_image = [
  {
    img: Image01,

  },
  {
    img: Image01,

  },
  {
    img: Image01,

  },
];
const menu_item = [
  { item: "On Sale", class: "active" },
  { item: "Collectibles" },
  { item: "Created" },
  { item: "Likes" },
  { item: "Following" },
  { item: "Followers" },
];

export default function FollowingsPage() {
  const [active, setActive] = useState(0);
  const handleClick = (index) => {
    setActive(index);
  };
  return (
    <div id="followwing__followers">
      <header className="navbar_item">
        <div className="picture_item">
          <Image className="img-fluid" src={bgItem} />
        </div>
        <Container>
          <div className="menu__item">
            {menu_item.map((e, index) => (
              <Link
                onClick={() => handleClick(index)}
                className={active === index ? "active" : ""}
                key={index}
                to="#"
              >
                {e.item}
              </Link>
            ))}
          </div>
          <div className="btn__cover__profile">
            <Link className="cover" to="">
              Edit cover photo &nbsp; <i class="fas fa-pen"></i>
            </Link>
            <Link className="profile" to="/edit-profile">
              Edit profile &nbsp; <i class="far fa-image"></i>
            </Link>
          </div>
          <div className="content__profile__view">
            <Row>
              <Col xl={6} lg={12}>
                <Row>
                  <Col lg={7} className="bg__profile" >
                    <div className="detail__profile">
                      <div className="view__profile ">
                        <div className="avatar__profile">
                          <Image src={avatar} width="130px" height="130px" />
                        </div>
                        <div className="view__name__profile">
                          <b className="name__profile">Enrico Cole</b>
                        </div>
                        <b className="messenger__profile">0xc4c16a645...b21a &nbsp;<i class="far fa-comments"></i></b> <br />
                        <div className="content__detail">
                          <b>A wholesome farm ower in <br />
                            Montana. Upcomming gallery <br />
                            solo show in Germany </b>
                        </div>
                        <div className="link__Profile mt-3">
                          <b><i class="far fa-globe">&nbsp;</i>https://ui8.net</b>
                        </div>
                        <div className="btn__follower__link__note mt-5">
                          <Link className="follower_profile" to="">Follow</Link>
                          <Link className="link__profile view__like" to=""><i class="fas fa-arrow-up"></i></Link>
                          <Link className="link__note view__like" to=""><i class="far fa-flag"></i></Link>
                        </div>
                        <div className="icon__social mt-5">
                          <img className="icon__link" src={twitter} />
                          <img className="icon__link" src={instagram} />
                          <img className="icon__link" src={facebook} />
                        </div>
                        <div className="ruler__bottom"></div>
                        <div className="bottom__date">Member since Mar 15, 2021</div>
                      </div>
                    </div>
                  </Col>
                  <Col className="view_content_col">

                    <div className="fadel__view_followings">
                      {salyFadel.map((e, index) => (
                        <div
                          key={index}
                          className={"group__img " + e.className}
                        >
                          <div className="img__view__followings">
                            <div className="img__content__sally">
                            <Image className="img_view_profile" src={e.srcImg} width="88px" height="88px" />
                            </div>
                        
                          </div>&emsp;
                          <div className="info__view__tittle">
                            <b>{e.title}</b>
                            <div className="text__view__followings">
                              <p className="text__followings__view">{e.text}</p>
                            </div>
                            <Link
                              className="place"
                              to=""
                            >
                              {e.link}
                            </Link>
                          </div>
                         
                        </div>
                      ))}
                    </div>
                  </Col>

                </Row>
              </Col>
              <Col className="view_content_col">
                {salyFadel_image.map((e, index) => (
                  <div key={index}>
                    <div className="item__image_content">
                      <Image className="img__view_src" src={e.img} />
                    </div>
                    <div className="border__ruler"></div>
                  </div>
                ))}

              </Col>
              <Col className="view_content_col">
                {salyFadel_image.map((e, index) => (
                  <div key={index}>
                    <div className="item__image_content">
                      <Image src={e.img} />
                    </div>
                    <div className="border__ruler"></div>
                  </div>
                ))}
              </Col>
              <Col className="view_content_col">
                {salyFadel_image.map((e, index) => (
                  <div key={index}>
                    <div className="item__image_content">
                      <Image src={e.img} />
                    </div>
                    <div className="border__ruler"></div>
                  </div>
                ))}
              </Col>
              <Col className="view_content_col">
                {salyFadel_image.map((e, index) => (
                  <div key={index}>
                    <div className="item__image_content">
                      <Image src={e.img} />
                    </div>
                    <div className="border__ruler"></div>
                  </div>
                ))}

              </Col>
            </Row>
          </div>
        </Container>
      </header>
    </div>

  );
}





