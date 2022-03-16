import React from "react";

import profileIMG from "../../assets/img/login.jpg";

export const UserInfo = ({ setView }) => {
  return (
    <>
      <div class="columns">
        <div class="container">
          <div class="section">
            <div class="columns is-multiline">
              <div class="column is-2">
                <figure className="image is-square">
                  <img className="is-rounded" alt="profile" src={profileIMG} />
                </figure>
              </div>
              <div class="column is-4 name">
                <p className="mb-5">
                  <span class="title is-bold">Pokedek de AngelHigueros</span>
                </p>
                <p class="tagline">
                  <strong>Name:</strong> Angel Higueros
                </p>
                <p class="tagline">
                  <strong>Region:</strong> Guatemala
                </p>
                <p class="tagline">
                  <strong>Gender:</strong> Male
                </p>
                <p class="tagline">
                  <strong>Age:</strong> 20
                </p>
                <p class="tagline">
                  <strong>Email:</strong> angel.higueros@telusinternational.com
                </p>
                <p class="tagline">
                  <strong>Trainer class</strong>: Battle
                </p>
                <p class="tagline">
                  <button
                    onClick={() => setView((prev) => !prev)}
                    className="button is-small is-outlined is-info mt-2"
                  >
                    Update Information
                  </button>
                </p>
              </div>

              <div class="column has-text-centered">
                <p class="user-number">10</p>
                <p class="user-title">Dias activo</p>
              </div>
              <div class="column has-text-centered">
                <p class="user-number">30</p>
                <p class="user-title">Pokemons registados</p>
              </div>
              <div class="column has-text-centered">
                <p class="user-number">3</p>
                <p class="user-title">Pokemones totales</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
