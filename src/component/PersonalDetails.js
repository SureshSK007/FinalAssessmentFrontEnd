import React from "react";
function PersonalDetails(props) {
  const nextPage = () => {
    props.history.push("/Education");
  };
  return (
    <div>
      <form action="">
        <div class="row">
          <h1 align="center">PersonalDetails</h1>
          <div class="col">
            <input
              type="text"
              name="firstname"
              class="form-control"
              placeholder="First Name*"
              required
            />
            <input type="text" class="form-control" placeholder="Email*" />
            <input
              type="text"
              name="email"
              class="form-control"
              placeholder="Your Website"
            />
            <input
              type="text"
              name="linkedin"
              class="form-control"
              placeholder="Linked In"
            />
            <input
              type="text"
              name="facebook"
              class="form-control"
              placeholder="Facebook"
            />
            <button type="button" class="btn btn-primary" disabled>
              BACK
            </button>
          </div>
          <div class="col">
            <input
              type="text"
              name="lastname"
              class="form-control"
              placeholder="Last Name*"
              required
            />
            <input
              type="text"
              name="phonenumber"
              class="form-control"
              placeholder="Phone Number"
              required
            />
            <input
              type="text"
              name="github"
              class="form-control"
              placeholder="GitHub"
              required
            />
            <input
              type="text"
              name="twitter"
              class="form-control"
              placeholder="Twitter"
              required
            />
            <input
              type="text"
              name="Instagram"
              class="form-control"
              placeholder="Instagram"
              required
            />

            <button
              type="button"
              class="btn btn-danger"
              onClick={nextPage}
              value="submit"
            >
              NEXT
            </button>
          </div>
        </div>
      </form>
      <footer align="center">Page 1</footer>
    </div>
  );
}
export default PersonalDetails;
