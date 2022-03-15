import React from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { GiSteamBlast } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import {
  BsFillBookFill,
  BsGenderAmbiguous,
  BsFillCalendarDateFill,
  BsFillPersonBadgeFill
} from "react-icons/bs";

import wallpaper from "../../assets/img/login.jpg";
import { Link } from "react-router-dom";

export const SingUpScreen = () => {
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
              <div class="column is-6-tablet is-6-desktop is-4-widescreen">
                <form class="box">
                  <span className="subtitle is-4 has-text-centered">
                    Crear cuenta - Pokedex
                  </span>

                  <div class="field mt-4">
                    <label for="" class="label">
                      Name
                    </label>
                    <div class="control has-icons-left">
                      <input type="text" class="input" required />
                      <span class="icon is-small is-left">
                        <BsFillPersonBadgeFill />
                      </span>
                    </div>
                  </div>

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
                      Region / origin
                    </label>
                    <div class="control has-icons-left">
                      <input type="text" class="input" required />
                      <span class="icon is-small is-left">
                        <BiWorld />
                      </span>
                    </div>
                  </div>

                  <div class="field">
                    <label for="" class="label">
                      Gender
                    </label>
                    <div class="control has-icons-left">
                      <input type="text" class="input" required />
                      <span class="icon is-small is-left">
                        <BsGenderAmbiguous />
                      </span>
                    </div>
                  </div>

                  <div class="field">
                    <label for="" class="label">
                      Age
                    </label>
                    <div class="control has-icons-left">
                      <input type="number" class="input" required />
                      <span class="icon is-small is-left">
                        <BsFillCalendarDateFill />
                      </span>
                    </div>
                  </div>

                  <div class="field">
                    <label for="" class="label">
                      Email
                    </label>
                    <div class="control has-icons-left">
                      <input type="email" class="input" required />
                      <span class="icon is-small is-left">
                        <MdEmail />
                      </span>
                    </div>
                  </div>

                  <div class="field">
                    <label for="" class="label">
                      Trainer class
                    </label>
                    <div class="control has-icons-left">
                      <select className="input">
                        <option value="battle">Battle</option>
                        <option value="battle">Show</option>
                      </select>

                      <span class="icon is-small is-left">
                        <BsFillBookFill />
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
                    Sing Up
                  </button>

                  <Link to="/auth">Login.</Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
