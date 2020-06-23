import React from "react";
import "./Events.css";

const Events = () => {
  return (
    <div className="events">
      <h1>Events</h1>
      <section>
        <div class="card mb-3">
          <img
            src="./images/Rubber_Duckie.jpeg"
            class="card-img-top"
            alt="Rubber Duckie"
          />
          <div class="card-body">
            <h5 class="card-title">Rubber Dickie Pool Party</h5>
            <p class="card-text">
              Come join us in the sun for some deep house with DJ RFM this
              weekend. Everyone is free before 2pm and drinks are half off until
              6pm.
            </p>
            <p class="card-text">
              <small class="text-muted">RSVP NOW!</small>
            </p>
          </div>
        </div>

        <div class="card mb-3">
          <img
            src="./images/Rubber_Duckie.jpeg"
            class="card-img-top"
            alt="Rubber Duckie"
          />
          <div class="card-body">
            <h5 class="card-title">Rubber Dickie Pool Party</h5>
            <p class="card-text">
              Come join us in the sun for some deep house with DJ RFM this
              weekend. Everyone is free before 2pm and drinks are half off until
              6pm.
            </p>
            <p class="card-text">
              <small class="text-muted">RSVP NOW!</small>
            </p>
          </div>

          <div class="card mb-3">
            <img
              src="./images/Rubber_Duckie.jpeg"
              class="card-img-top"
              alt="Rubber Duckie"
            />
            <div class="card-body">
              <h5 class="card-title">Rubber Dickie Pool Party</h5>
              <p class="card-text">
                Come join us in the sun for some deep house with DJ RFM this
                weekend. Everyone is free before 2pm and drinks are half off
                until 6pm.
              </p>
              <p class="card-text">
                <small class="text-muted">RSVP NOW!</small>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
