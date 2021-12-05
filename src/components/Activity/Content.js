import React from "react";
import "../../assets/css/Activity.css";
import "bootstrap/dist/css/bootstrap.min.css";
import mypicture from "../../assets/images/Activity/unsplash_mEZ3PoFGs_k.png";
import { Link } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  Image,
} from "react-bootstrap";

function Content() {
  return (
    <div>
      <activity id="activity">
        <Container>
        <div class="row btn-title">
          <div class="back-home">
            <Link to="/">             
                <i class="fas fa-arrow-left"></i> <span> Back to home</span>
            </Link>
          </div>
          <div class="btn-activity-right">
            Activity
          </div>
        </div>
        <hr width="100%" align="center" />
        <div class="main">
          <div>
            <h1 class="title">Activity</h1>
          </div>
          <div class="read">
            <span>Mark all as read</span>
          </div>
          <div class="selection-activity">
            <div class="row">
              <div class="col-md-4"><Link to="#">My activity</Link></div>
              <div class="col-md-4"><Link to="#">Following</Link></div>
              <div class="col-md-4"><Link to="#">All activity</Link></div>
            </div>
          </div>
          <div class="content">
          <div class="row">
              <div class="col-md-3">
                <Image
                  src={mypicture}
                  class="my-picture"
                  width="97px"
                  height="97px"
                />
              </div>
              <div class="col-md-8">
                <span class="article-title">Something went wrong</span> <br />
                <span class="content-of-the-article">
                  {" "}
                  cant's display activity card. Try again later
                </span>{" "}
                <br />
                <span class="post-time">2 day ago </span>
              </div>
              <div class="col-md-1">
                <div class="status-content"><i class="fas fa-circle"></i></div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3">
                <Image
                  src={mypicture}
                  class="my-picture"
                  width="97px"
                  height="97px"
                />
              </div>
              <div class="col-md-8">
                <span class="article-title">Something went wrong</span> <br />
                <span class="content-of-the-article">
                  {" "}
                  cant's display activity card. Try again later
                </span>{" "}
                <br />
                <span class="post-time">2 day ago </span>
              </div>
              <div class="col-md-1">
                <div class="status-content"><i class="fas fa-circle"></i></div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3">
                <Image
                  src={mypicture}
                  class="my-picture"
                  width="97px"
                  height="97px"
                />
              </div>
              <div class="col-md-8">
                <span class="article-title">Something went wrong</span> <br />
                <span class="content-of-the-article">
                  {" "}
                  cant's display activity card. Try again later
                </span>{" "}
                <br />
                <span class="post-time">2 day ago </span>
              </div>
              <div class="col-md-1">
                <div class="status-content"><i class="fas fa-circle"></i></div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3">
                <Image
                  src={mypicture}
                  class="my-picture"
                  width="97px"
                  height="97px"
                />
              </div>
              <div class="col-md-8">
                <span class="article-title">Something went wrong</span> <br />
                <span class="content-of-the-article">
                  {" "}
                  cant's display activity card. Try again later
                </span>{" "}
                <br />
                <span class="post-time">2 day ago </span>
              </div>
              <div class="col-md-1">
                <div class="status-content"><i class="fas fa-circle"></i></div>
              </div>
            </div>
          </div>
          <div class="check-filters">
            <h1>Filters</h1>
            <div class="item-check">
              <input type="checkbox" class="check-box" defaultChecked={false} />
              <span>Sales</span>
            </div>
            <div class="item-check">
              <input type="checkbox" class="check-box" defaultChecked={false} />
              <span>Listings</span>
            </div>
            <div class="item-check">
              <input type="checkbox" class="check-box" defaultChecked={false} />
              <span>Bids</span>
            </div>
            <div class="item-check">
              <input type="checkbox" class="check-box" defaultChecked={false} />
              <span>Burns</span>
            </div>
            <div class="item-check">
              <input type="checkbox" class="check-box" defaultChecked={false} />
              <span>Fllowings</span>
            </div>
            <div class="item-check">
              <input type="checkbox" class="check-box" defaultChecked={false} />
              <span>Likes</span>
            </div>
            <div class="item-check">
              <input type="checkbox" class="check-box" defaultChecked={false} />
              <span>Puchase</span>
            </div>
            <div class="item-check">
              <input type="checkbox" class="check-box" defaultChecked={false} />
              <span>Transfer</span>
            </div>
            <hr class="hr-item-check" />
            <div class="btn-select-item">
              <div class="btn-select-all">Select all</div>
              <div class="btn-unselect-all">Unselect all</div>
            </div>
          </div>
        </div>
        </Container>
      </activity>
    </div>
  );
}

export default Content;
