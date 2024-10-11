import React from "react";
import { FaStar } from "react-icons/fa";

export default function Reviews() {
  return (
    <>
      <div className="reviews-section">
        <div className="review-section-head">
          <h1>Trusted by Thousands of Happy Customer</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy .
          </p>
        </div>
        <div className="reviews">
          <div className="review">
            <div className="reviewer-rating">
              <div className="reviewer">
                <div className="reviewer-img">
                  <img src="../images/vizeh.png" alt="user" />
                </div>
                <div className="reviewer-info">
                  <h4>Viezh Robert</h4>
                  <p>Warsaw, Poland</p>
                </div>
              </div>
              <div className="rating">
                <p>
                  4.5 <FaStar className="star" />
                </p>
              </div>
            </div>
            <div className="review-text">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
          </div>

          <div className="review">
            <div className="reviewer-rating">
              <div className="reviewer">
                <div className="reviewer-img">
                  <img src="../images/yessica.png" alt="user" />
                </div>
                <div className="reviewer-info">
                  <h4>Yessica Christy</h4>
                  <p>Shanxi, China</p>
                </div>
              </div>
              <div className="rating">
                <p>
                  4.5 <FaStar className="star" />
                </p>
              </div>
            </div>
            <div className="review-text">
              <p>Lorem Ipsum is simply dummy text of the printing and</p>
            </div>
          </div>

          <div className="review">
            <div className="reviewer-rating">
              <div className="reviewer">
                <div className="reviewer-img">
                  <img src="../images/kim.png" alt="user" />
                </div>
                <div className="reviewer-info">
                  <h4>Kim Young Jou</h4>
                  <p>Seoul, South Korea</p>
                </div>
              </div>
              <div className="rating">
                <p>
                  4.5 <FaStar className="star" />
                </p>
              </div>
            </div>
            <div className="review-text">
              <p>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
