import React from "react";

export const UpdateUserInfo = ({ view }) => {
  return (
    <>
      {view && (
        <>
          <div className="columns is-centered">
            <div className="column is-5">
              <div class="field">
                <label class="label">Name</label>
                <div class="control">
                  <input
                    class="input is-small"
                    type="text"
                    
                  />
                </div>
              </div>

              <div class="field">
                <label class="label">Pokemon trainer nickname</label>
                <div class="control">
                  <input
                    class="input is-small"
                    type="text"
                    
                  />
                </div>
              </div>

              <div class="field">
                <label class="label">Region of origin</label>
                <div class="control">
                  <input
                    class="input is-small"
                    type="text"
                    
                  />
                </div>
              </div>

              <div class="field">
                <label class="label">Gender</label>
                <div class="control">
                  <input
                    class="input is-small"
                    type="text"
                    
                  />
                </div>
              </div>

              <div class="field">
                <label class="label">Age</label>
                <div class="control">
                  <input
                    class="input is-small"
                    type="text"
                    
                  />
                </div>
              </div>

              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input
                    class="input is-small"
                    type="email"
                    
                  />
                </div>
              </div>

              <div class="field">
                <label class="label">Trainer class</label>
                <div class="control">
                  <select className="input is-small">
                    <option value="battle">Battle</option>
                    <option value="show">Show</option>
                  </select>
                </div>
              </div>

              <div class="field">
                <button className="button is-info is-fullwidth mt-4">Save</button>
              </div>


            </div>
          </div>
        </>
      )}
    </>
  );
};
