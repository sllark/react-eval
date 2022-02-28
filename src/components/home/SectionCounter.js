import React from "react";
import {Link} from "react-router-dom"
import '@splidejs/splide/dist/css/splide.min.css';



const SectionCounter = (props) => {
  return (
    <>
      <section className="sectionCounter">

        <div className="container">

          <h2 className="sectionCounter__headline">
            Hurry, your invitation expires soon!
          </h2>
          <p className="sectionCounter__text text mt-24 mb-56">
            Blocksight registration will close onBlocksight registration will close on <br/>
            <span className="color-secondary">
              Wednesday, April 6th @ 11:59 Central Time.
            </span>
          </p>

          <div className="counter">
            <div className="bgLeftBox bgBox"/>
            <div className="bgRightBox bgBox"/>
            <div className="bgWhite"/>
            <div className="counter__ele">
              <div className="counter__ele__content">
                25
              </div>
              <div className="counter__ele__subtitle">
                Days
              </div>
            </div>
            <div className="counter__separator">
              :
            </div>

            <div className="counter__ele">
              <div className="counter__ele__content">
                15
              </div>
              <div className="counter__ele__subtitle">
                Hours
              </div>
            </div>
            <div className="counter__separator">
              :
            </div>

            <div className="counter__ele">
              <div className="counter__ele__content">
                25
              </div>
              <div className="counter__ele__subtitle">
                Mins
              </div>
            </div>
            <div className="counter__separator">
              :
            </div>

            <div className="counter__ele">
              <div className="counter__ele__content">
                05
              </div>
              <div className="counter__ele__subtitle">
                Sec
              </div>
            </div>

          </div>

          <p className="textSm mt-34 mb-32">
            No one will be admitted after registration closes. When it opens again, we’ll raise the price.
          </p>

          <Link to="/" className="btn btn--primary">
            Hold your spot now
          </Link>

        </div>

      </section>
    </>
  );
}

export default SectionCounter;