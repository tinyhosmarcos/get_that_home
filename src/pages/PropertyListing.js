import React from "react";

const Listing = () => {
    <div className="propContainer">
    <form>
      <h1>
        Create a property listing
      </h1>
        <div>
          /* Opeeration type */
          /* Address*/
          /* Montly Rent */
          /* Maintanance */
          <div id="checkbox-group">Property type</div>
          <div role="group" aria-labelledby="checkbox-group">
            <label>
              <Field type="checkbox" name="checked" value="Apartment" />
              Aparment
            </label>
            <label>
              <Field type="checkbox" name="checked" value="House" />
              House
            </label>
          
          </div>
          <div>
            /* Bedrooms - */
            /* Bathrooms - */
            /* Area om M2 - */
          </div>
          /* Pets checkbox - */
          <p>Allowing pets increases the likehood of renters  liking the property by 9001%.
It also makes you a better person.</p>
          /* About thsi property- */
          /* Pets checkbox - */
          /* Pets checkbox - */
          /* Pets checkbox - */

        </div>
    </form>
    </div>
}

export default Listing;