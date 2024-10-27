/* eslint-disable @next/next/no-img-element */
import React from 'react';

const MakeAnAppoinment = () => {
    return (
      <>
        <section className="makeAnAppoinmentSection">
          <style jsx>{`
            .makeAnAppoinment {
              background: linear-gradient(180deg, #546aae, #b19e7dad), url("/image/cta-bg.jpg");
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat;
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              padding: 120px 0px;
            }
            .makeAnAppoinment__img {
              height: 120px;
              width: 100px;
            }
            .makeAnAppoinment_title {
              font-size: 38px;
              font-weight: 400;
              text-transform: uppercase;
              font-family: "Roboto", sans-serif;
              color: #ffffff;
              margin: 5px 0px 30px 0px;
            }
            .makeAnAppoinment__subTitle {
              font-size: 18px;
              font-weight: 400;
              text-transform: capitalize;
              font-family: "Roboto", sans-serif;
              color: #ffffff;
              margin: 35px 0px 10px 0px;
            }
          `}</style>
          <div id='MakeAnAppoinment' className="makeAnAppoinment">
            <div className="makeAnAppoinment__img">
              <img
                src="/image/cta-logo.png"
                alt="logo"
                height={"100%"}
                width="100%"
              />
            </div>
            <h6 className="makeAnAppoinment__subTitle">LLamanos 24/7</h6>
            <h2 className="makeAnAppoinment_title">3207060136</h2>
            {/*<button className="btn__secondary">Make An Appoinment</button>*/}
          </div>
        </section>
      </>
    );
};

export default MakeAnAppoinment;
