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

@media screen and (max-width: 980px) {
  .title {
    display: none;
  }
}
 
    `}</style>
  );
};
  
export default styles;  