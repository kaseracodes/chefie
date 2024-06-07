import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import community from "../assets/img/community.svg";
import pos from "../assets/img/pos.svg";
import expert from "../assets/img/expert.svg";
import career from "../assets/img/career.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Verticals We Serve</h2>
                        <p>At Chefie, we offer tailored solutions across various aspects of the hospitality industry to streamline operations, enhance customer engagement, and improve overall efficiency. Our comprehensive suite of tools is designed to address the specific needs of restaurants, bars, clubs, and hotels.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={expert} alt="Image" />
                                <h5>Personalised Apps<br/> & Websites</h5>
                            </div>
                            <div className="item">
                                <img src={career} alt="Image" />
                                <h5>HR and Payroll</h5>
                            </div>
                            <div className="item">
                                <img src={community} alt="Image" />+
                                <h5>Table Management <br/> System</h5>
                            </div>
                            <div className="item">
                                <img src={pos} alt="Image" />+
                                <h5>Seamless POS</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
