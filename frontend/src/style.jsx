// This page is the website's style page, it should hold all the CSS elements
// for the website organized by page/component type.

const styles = () => {
    return (
      <style>{`

      html,
      body {
        background-color: #191919;
        overflow: none;
        overscroll-behavior: none;
      }

      @media screen and (max-width: 1680px) {

        h1 {
          font-size: 100px;
        }
  
      }
  
      @media screen and (max-width: 1280px) {
  
        h1 {
          font-size: 60px;
        }

        h2 {
          font-size: 30px;
        }
  
      }
  
      @media screen and (max-width: 360px) {
  
        h1 {
          font-size: 30px;
        }
  
      }
        
h1 {
    font-family: Mokoto;
    color: white;
}

p {
    color: white;
    font-family: Poppins Light;
}

.myClass {
    color: white;
    font-family: Poppins Light;
    font-size: 20px;
    padding-top: 10px;
    padding-bottom: 30px;
}

  .tab-content {
    display: flex;
  }
  
  .tab-content > .tab-pane {
    display: block; /* undo "display: none;" */
    visibility: hidden;
    margin-right: -100%;
    width: 100%;
  }
  
  .tab-content > .active {
    visibility: visible;
  }


.nav-link-custom {
    color: #910307;
    font-family: Poppins;
    font-weight: bold;
}
    .nav-link-custom:active,
    .nav-link-custom:focus,
    .nav-link-custom:hover {
        color: white;
    }

.about-info {
    padding-left: 15px;
    padding-right: 40px;
    align-items: center;
    justify-content: center;
}
    .about-info h2 {
        font-family: Poppins;
        color: white;    
        font-size: 20px;
        line-height: 10px;
    }
    .about-info p {
        line-height: 20px;
    }

.circle {
    background-color: #910307;
    border-radius: 50%;
    width: 50px;
    height: 50px;

}

.button {
  position: relative;
  font-family: Poppins;
  // font-weight: 500;
  font-size: 18px;
  letter-spacing: 0.05em;
  border-radius: 0.8em;
  border: none;
  background: #910307;
  color: white;
  overflow: hidden;
}

  .button:hover {
    background: linear-gradient(to right, #910307, #d50110, #560002);
    // transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
  }

@media screen and (max-width: 767px) {
  .title {
    display: none;
  }

  .AboutPage {
    display: none;
  }
}

/* LANDING PAGE */
.landingPage {
  background-color: transparent;
  display: flex;
  postion: fixed;
  width: auto;
  height: auto;
  overflow: hidden;
}
  .landingPage .container {
    color: white;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0);
    
    position: absolute;
    width: 70vw;
  }

    .landingPage h1 {
      font-family: Mokoto;
      font-size: 150px;
      line-height: 100%;

      padding-left: 4vw;
      padding-top: 65px;
      white-space: nowrap;
    }

    .landingPage h2 {
      font-family: Poppins Light;
      font-size: 50px;
      line-height: 0px;

      padding-left: 8.2vw;
      padding-bottom: 10vh;
    }

/* LANDING PAGE MOBILE*/
.landingPageMobile {
  background-color: #191919;
  content: center;
  justify-content: center;
  text-align: center;

  width: auto;
  overscroll-behavior: none;
  overflow: hidden;
}
  .landingPageMobile h1 {
    font-family: Mokoto;
    font-size: 13vw;
    line-height: 100%;
    padding-top: 50px;
  }

  .landingPageMobile h2 {
    font-family: Poppins ExtraLight;
    line-height: 30%;
    font-size: 5vw;

    padding-bottom: 30px;
  }

  .landingPageMobile p {
    padding-right: 8%;
    padding-left: 8%;
    margin-top: -12vh;
  }

.hero {
  display: flex;
  justify-content: center;
  text-align: center;
}
  .hero img {
    width: 450px;
    height: 420px;
    opacity: 0.2;

    position: relative;
    right: 130px;
    top: -45px;
  }

  .hero .container {
    color: white;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0);
    padding-top: 30;
    width: 100%;
    position: absolute;
  }

 
    `}</style>
  );
};
  
export default styles;  