import React, { useRef } from "react";
import {
  Container,
  Row,
  Col, Image, Button
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import bgItem from "../../assets/images/Profile/unsplash_wQLAGv4_OYs.png";
import avatar from "../../assets/images/Profile/unsplash_mEZ3PoFGs_k.png";
import Image01 from "../../assets/images/Profile/unsplash_8uZPynIu-rQ.png";
import IconNotBG from "../../assets/images/Profile/heart-no-bg.png";
import "../../assets/css/Profile.css";
import { Link } from "react-router-dom";
<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
    integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />


const bid = [
  {
    img: Image01,
    txt: "Purchasing",
    icon: IconNotBG,
    place: "Place a bid",
    title: "Amazing digital art",
    eth: "1.125 ETH",
    avt: avatar,
    stock: "3 in stock",
    text__01: "Highest bid",
    text__01__span: "0.001 ETH ",
    text__02: "New bid",
  },
  {
    img: Image01,
    txt: "Purchasing",
    icon: IconNotBG,
    place: "Place a bid",
    title: "Amazing digital art",
    eth: "1.125 ETH",
    avt: avatar,
    stock: "3 in stock",
    text__01: "Highest bid",
    text__01__span: "0.001 ETH",
    text__02: "New bid",
  },
  {
    img: Image01,
    txt: "Purchasing",
    icon: IconNotBG,
    place: "Place a bid",
    title: "Amazing digital art",
    eth: "1.125 ETH",
    avt: avatar,
    stock: "3 in stock",
    text__01: "Highest bid",
    text__01__span: "0.001 ETH",
    text__02: "New bid",
  }

];

export default function ProfilePage() {
  return (
    <header className="navbar_item">
      <div className="picture_item">
        <Image className="img-fluid" src={bgItem} />
      </div>
      <Container>
        <div className="btn__cover__profile">
          <Link className="cover" to="">
            Edit cover photo &nbsp; <i class="fas fa-pen"></i>
          </Link>
          <Link className="profile" to="">
            Edit profile &nbsp; <i class="far fa-image"></i>
          </Link>
        </div>
        <div className="content__profile__view">
          <Row>
            <Col md="3" sm="6" lg="3" className="bg__profile" >
              <div className="detail__profile">
                <div className="view__profile mt-5">
                  <div className="avatar__profile mt-5">
                    <Image src={avatar} width="130px" height="130px" />
                  </div>
                  <div className="view__name__profile mt-3">
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
                  <i class="fab fa-twitter"></i>
                  <i class="fab fa-instagram"></i>
                  <i class="fab fa-facebook-f"></i>
                  </div>
                  <div className="ruler__bottom"></div>
                  <div className="bottom__date">Member since Mar 15, 2021</div>
                </div>
              </div>
            </Col> 
            {bid.map((e, index) => (
            <Col className="view__bid" key={index} lg={3} >
            <div  className="card__bid">
                <div className="top__card">
                  <Image src={e.img} />
                  <div className="just__like">
                    <p className="purchas">{e.txt}</p>
                    <Button className="icon__img">
                      <Image src={e.icon} />
                    </Button>
                    <p className="place">{e.place}</p>
                  </div>
                </div>
                <div className="body__card">
                  <div className="card__title">
                    <h5>{e.title}</h5>
                    <p>{e.eth}</p>
                  </div>
                  <div className="card__icon">
                    <Image src={e.avt} />
                    <p>{e.stock}</p>
                  </div>
                </div>
                <hr />
                <div className="bottom__card">
                  <p className="bt_left">
                    {e.text__01} <span>{e.text__01__span}</span>
                  </p>
                  <p className="bt_right">{e.text__02}</p>
                </div>
              </div>
            </Col>
                 ))}
              </Row>
        </div>
      </Container>
    </header>
  );
}





