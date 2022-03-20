import React from "react";

import profileIMG from "../../assets/img/login.jpg";
import { useSessionStorage } from "../../hooks/useSessionStorage";

export const UserInfo = ({ setView }) => {
	const [user, ] = useSessionStorage('user', {})

  return (
    <>
      <div className="columns">
        <div className="container">
          <div className="section">
            <div className="columns is-multiline">
              <div className="column is-2">
                <figure className="image is-square">
                  <img className="is-rounded" alt="profile" src={profileIMG} />
                </figure>
              </div>
              <div className="column is-4 name">
                <p className="mb-5">
                  <span className="title is-bold">Pokedek de {user.username}</span>
                </p>
                <p className="tagline">
                  <strong>Name:</strong> {user.name}
                </p>
                <p className="tagline">
                  <strong>Region:</strong> {user.region}
                </p>
                <p className="tagline">
                  <strong>Gender:</strong> {user.gender}
                </p>
                <p className="tagline">
                  <strong>Age:</strong> {user.age}
                </p>
                <p className="tagline">
                  <strong>Email:</strong> {user.email}
                </p>
                <p className="tagline">
                  <strong>Trainer class</strong>: {user.class}
                </p>
                <p className="tagline">
                  <button
                    onClick={() => setView((prev) => !prev)}
                    className="button is-small is-outlined is-info mt-2"
                  >
                    Update Information
                  </button>
                </p>
              </div>

              {/* <div className="column has-text-centered">
                <p className="user-number">10</p>
                <p className="user-title">Dias activo</p>
              </div>
              <div className="column has-text-centered">
                <p className="user-number">30</p>
                <p className="user-title">Pokemons registados</p>
              </div>
              <div className="column has-text-centered">
                <p className="user-number">3</p>
                <p className="user-title">Pokemones totales</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
