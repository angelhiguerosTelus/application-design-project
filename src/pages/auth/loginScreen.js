import React from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { GiSteamBlast } from "react-icons/gi";

export const LoginScreen = () => {
  return (
    <>
      <section class="hero is-warning is-fullheight">
        <div class="hero-body">
          <div class="container">
            <div class="columns is-centered">
              <div class="column is-5-tablet is-4-desktop is-3-widescreen">
                <form action="" class="box">
                  <div class="field">
                    <label for="" class="label">
                      Pokemon trainer nickname
                    </label>
                    <div class="control has-icons-left">
                      <input type="email" class="input" required />
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

                  <button class="button is-info is-fullwidth mt-5">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
