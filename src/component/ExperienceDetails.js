import React from "react";

function ExperienceDetails(props) {
  const nextPage = () => {
    props.history.push("/Extra");
  };
  const prevPage = () => {
    props.history.push("/Project");
  };
  return (
    <div>
      <form>
        <h1 align="center">ExperienceDetails</h1>
        <div class="row">
          <h4>Experience 1</h4>
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Institute/Organization*"
            />
            <input
              type="text"
              class="form-control"
              placeholder="Description*"
            />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Position*" />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Duration*" />
          </div>
        </div>
        <div class="row">
          <h4>Experience 2</h4>
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Institute/Organization*"
            />
            <input
              type="text"
              class="form-control"
              placeholder="Description*"
            />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Position*" />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Duration*" />
          </div>
        </div>
        <button type="button" class="btn btn-danger" onClick={prevPage}>
          BACK
        </button>
        <button type="button" class="btn btn-danger" onClick={nextPage}>
          NEXT
        </button>
      </form>
      <footer align="center">Page 4</footer>
    </div>
  );
}

export default ExperienceDetails;
