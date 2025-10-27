// Author: Tan Kok Hong
// Date:   21/9/2023
// Filename: addtocart.html

class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <style>
        body {
          // background-color: aqua;
          background-color:#fffaee;
          max-width: 1024px;
          max-height: 768px;
          margin-left: auto;
          margin-right: auto;
        }
        
        header .headContainer .logo {
          width: 80px;
          margin: 0 auto;
          display: block;
          border: 5px solid #F44336;
          border-radius: 50%;
          margin-bottom: -15px;
        }
        
        .menu {
          margin-top: 0;
          margin-bottom: 0;
          padding-left: 0;
          text-align: center;
        }
        
        .headContainer .menu {
          background-color: #F44336;
        }
        
        .headContainer .menu .submenu {
          display: inline-block;
          line-height: 60px;
          margin: 0 5px;
          list-style: none;
          font-size: 16px;
          font-weight: bolder;
          padding: 7px 13px;
        }
        
        a.menuLink {
          text-decoration: none;
          color: white;
        }

        .headContainer input::placeholder {
          color: white;
        }
        
        .headContainer input::-ms-input-placeholder { /* Edge 12 -18 */
          color: white;
        }
        
        a.menuLink:hover {
          color: black;
        }
        
        .cart img {
          width: 35px;
          margin-bottom: -10px;
        }
        
        /* searchbar */
        .searchBar {
          width: 70px;
          height: 40px;
          background: none;
          border: 2px solid #ffa59e;
          border-radius: 5px;
          box-sizing: border-box;
          font-size: 16px;
          color: black;
          outline: none;
          transition: 0.5s;
          padding-left: 5px;
        }
        
        .headContainer .searchBar:hover {
          width: 250px;
          color: white;
          transition: 0.5s;
        }
        </style>
        <header>
        <nav class="headContainer">
        <a href="home.html"><img class="logo" src="./../images/LogoExample.jpeg" alt="logo" /></a>
          <ul class="menu">
            <li class="submenu">
              <a class="menuLink" href="./../html/feedback_review.html" class="active">Review</a>
            </li>
            <li class="submenu"><a class="menuLink" href="./../html/promotion.html">Promotion</a></li>
            <li class="submenu">

              <a class="menuLink" href="../html/Index.html">Product</a>
            </li>
            <li class="submenu">
              <a class="menuLink" href="./../html/membership.html">Membership</a>
            </li>
            <li class="submenu"><a class="menuLink" href="../html/FAQ.html">Help</a></li>
            
            <!-- search bar issue -->
            <input
              type="text"
              class="searchBar"
              id="searchBar"
              placeholder="Search"
              onmouseout="this.value = ''; this.blur();"
            />
            <li class="submenu">
              <a href="add_to_cart.html" class="cart"
                ><img src="../images/add-to-cart.png"
              /></a>
            </li>
          </ul>
        </nav>
      </header>
    `;
  }
}

class Myfooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `  
      <style>
      .footer-distributed {
        background: #666;
        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
        box-sizing: border-box;
        width: 100%;
        height: auto;
        text-align: left;
        font: bold 16px sans-serif;
        padding: 55px 50px;
        border-radius: 20px;
        padding-top: 1.5rem ;
        padding-bottom: 1.5rem ;
        margin-bottom: 100px;
      }
      
      .footer-distributed .footer-left,
      .footer-distributed .footer-center,
      .footer-distributed .footer-right {
        display: inline-block;
        vertical-align: top;
      }

      /* Footer left */

      .footer-distributed .footer-left {
        width: 40%;
      }

      /* The company logo */

      .footer-distributed h3 {
        color: #ffffff;
        font: normal 36px;
        margin: 0;
      }

      .footer-distributed h3 span {
        color: lightseagreen;
      }

      /* Footer links */

      .footer-distributed .footer-links {
        color: #ffffff;
        margin: 20px 0 12px;
        padding: 0;
      }

      .footer-distributed .footer-links a {
        display: flex;
        line-height: 1.8;
        font-weight: 200;
        text-decoration: none;
        color: inherit;
      }

      .footer-distributed .footer-links a:hover {
        color: #c7940a;
      }

      /* Footer Center */

      .footer-distributed .footer-center {
        width: 35%;
      }

      .footer-distributed .footer-center i {
        background-color: #33383b;
        color: #ffffff;
        font-size: 25px;
        width: 38px;
        height: 38px;
        border-radius: 50%;
        text-align: center;
        line-height: 42px;
        margin: 10px 15px;
        vertical-align: middle;
      }

      .footer-distributed .footer-center i.fa-envelope {
        font-size: 17px;
        line-height: 38px;
      }

      .footer-distributed .footer-center p {
        display: inline-block;
        color: #ffffff;
        font-weight: 400;
        vertical-align: middle;
        margin: 0;
      }

      .footer-distributed .footer-center p span {
        display: block;
        font-weight: normal;
        font-size: 14px;
        line-height: 2;
      }

      .footer-distributed .footer-center p a {
        color: lightseagreen;
        text-decoration: none;
      }

      .footer-distributed .footer-links a:before {
        /* content: "|"; */
        font-weight: 300;
        font-size: 20px;
        left: 0;
        color: #fff;
        display: inline-block;
        padding-right: 5px;
      }

      .footer-distributed .footer-links .link-1:before {
        content: none;
      }

      /* Footer Right */

      .footer-distributed .footer-right {
        width: 20%;
      }

      .footer-distributed .footer-company-about {
        line-height: 20px;
        color: #92999f;
        font-size: 13px;
        font-weight: normal;
        margin: 0;
      }

      .footer-distributed .footer-company-about span {
        display: block;
        color: #ffffff;
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 20px;
      }

      .footer-distributed .footer-icons {
        margin-top: 25px;
      }

      .footer-icon {
        width: 35px;
        height: 35px;
        float: right;
        padding-bottom: 0px;
      }

      .footer-distributed .footer-icons a {
        display: inline-block;
        width: 35px;
        height: 35px;
        cursor: pointer;

        border-radius: 2px;

        font-size: 20px;
        color: #ffffff;
        text-align: center;
        line-height: 35px;

        margin-right: 3px;
        margin-bottom: 5px;
      }
      </style>
      <footer class="footer-distributed">
      <div class="footer-left">
        <h3><span>FREE</span></h3>

        <p class="footer-links">
          <a href="./../html/home.html" class="link-1">Home</a>
          <a href="../html/FAQ.html">F.A.Q</a>
          <a href="./../html/about_us.html">About Us</a>
          <a href="#">Term Of Service</a>
          <a href="./../html/live_chat.html">Live Chat</a>
          <a href="./../html/contact_us.html">Contact Us</a>
        </p>
      </div>

      <div class="footer-center">
        <div>
          <i class="fa fa-envelope"></i>
          <p><a href="mailto:ongzhenggan@gmail.com">free@company.com</a></p>
        </div>
      </div>

      <div class="footer-right">
        <p class="footer-company-about">
          <span>About the company</span>
          FREE's vision remains clear: to connect global travelers efficiently,
          making journeys stress-free and rich in experiences.
        </p>

        <div class="footer-icons">
          <a href="http://www.instagram.com/xhny_1314"
            ><i class="fa fa-instagram"></i>
            <img class="footer-icon" src="../images/Instagram_icon.png.webp" alt="IG" />
          </a>
        </div>
      </div>
    </footer>  
      
      `;
  }
}

customElements.define("my-header", MyHeader);
customElements.define("my-footer", Myfooter);
