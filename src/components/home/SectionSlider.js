import React from "react";
import {Link} from "react-router-dom"
import '@splidejs/splide/dist/css/splide.min.css';
import {Splide, SplideSlide} from "@splidejs/react-splide";

import arrow from "../../assets/img/slider-arrow.svg";



const SectionCounter = (props) => {
  return (
    <section className="sectionSlider">

      <h1 className="sectionSlider__headline">
        What Our Users are saying
      </h1>

      <Splide
        options={{
          // type:'loop',
          // rewind: true,
          // width: '100vw',
          gap: '3rem',
          // autoplay:true,
          // perPage:3,
          type: 'loop',
          // padding: '20%',
          fixedWidth: '37rem',
          pagination: false
        }}
        renderControls={() => (
          <div className="splide__arrows">
            <img src={arrow} alt=">" className='splide__arrow splide__arrow--next arrowRight'/>
            <img src={arrow} alt="<" className='splide__arrow splide__arrow--prev arrowLeft'/>
          </div>
        )}>
        <SplideSlide>
          <div className="slide">
            <h4>Hello</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum cupiditate dicta eaque eos,
              exercitationem hic nisi quas, quasi quisquam, rem totam.</p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="slide">
            <h4>Hello</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum cupiditate dicta eaque eos,
              exercitationem hic nisi quas, quasi quisquam, rem totam.</p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="slide">
            <h4>Hello</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum cupiditate dicta eaque eos,
              exercitationem hic nisi quas, quasi quisquam, rem totam.</p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="slide">
            <h4>Hello</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum cupiditate dicta eaque eos,
              exercitationem hic nisi quas, quasi quisquam, rem totam.</p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="slide">
            <h4>Hello</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum cupiditate dicta eaque eos,
              exercitationem hic nisi quas, quasi quisquam, rem totam.</p>
          </div>
        </SplideSlide>
      </Splide>


      <Link to='/' className='btn btn--primary mt-32'>Join Now</Link>

    </section>
  );
}

export default SectionCounter;