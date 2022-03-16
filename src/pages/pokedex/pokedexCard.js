import React from "react";

export const PokedexCard = ({name, url}) => {
  return (
    <>
      <div className="column is-3">
        <div className="card">
          <div className="card-image">
            <figure className="image is-16by9">
              <img
                src="https://versions.bulma.io/0.7.0/images/placeholders/1280x960.png"
                alt="temp"
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{name}</p>
                <p className="subtitle is-6">Gender</p>
              </div>
            </div>
            <div className="content">
              <ul>
                <li>move</li>
                <li>move</li>
                <li>move</li>
                <li>move</li>
              </ul>
              <button className="button is-success is-fullwidth">
                Add to pokedex
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
