import React from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { GiSteamBlast } from "react-icons/gi";

import wallpaper from "../../assets/img/login.jpg";
import { Link } from "react-router-dom";

export const LoginScreen = () => {


  const handleSubmit = e => {
    e.preventDefault()

  }

  return (
    <>
      <section
        class="hero is-fullheight"
        style={{
          backgroundImage: `url(${wallpaper})`,
          backgroundSize: "cover",
        }}
      >
        <div class="hero-body">
          <div class="container">
            <div class="columns is-centered">
              <div class="column is-5-tablet is-4-desktop is-3-widescreen">
                <form class="box" onSubmit={handleSubmit}>
                  <span className="subtitle is-4 has-text-centered">Pokedex</span>
                  <div class="field">
                    <label for="" class="label">
                      Pokemon trainer nickname
                    </label>
                    <div class="control has-icons-left">
                      <input type="text" class="input" required />
                      <span class="icon is-small is-left">
                        <GiSteamBlast />
                      </span>
                    </div>
                  </div>

                  <div class="field">
                    <label for="" class="label">
                      Password
                    </label>
                    <div class="control has-icons-left">
                      <input type="password" class="input" required />
                      <span class="icon is-small is-left">
                        <RiLockPasswordFill />
                      </span>
                    </div>
                  </div>

                  <button class="button is-info is-fullwidth mt-5 mb-5">
                    Login
                  </button>

                    <Link to="/auth/singup">Create an account</Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
