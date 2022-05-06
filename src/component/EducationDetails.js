import React from "react";

function EducationDetails(props) {
  const nextPage = () => {
    props.history.push("/Project");
  };
  const prevPage = () => {
    props.history.push("/");
  };
  return (
    <div>
      <form>
        <div class="row">
          <h1 align="center">Education Details</h1>
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="College/University*"
            />
            <input
              type="text"
              class="form-control"
              placeholder="Qualification*"
            />
          </div>
          <div class="col">
            <input type="date" class="form-control" placeholder="dd-mm-yyyy" />
            <input
              type="text"
              class="form-control"
              placeholder="Description*"
            />
          </div>
          <div class="col">
            <input type="date" class="form-control" placeholder="dd-mm-yyyy" />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <input type="text" class="form-control" placeholder="School" />
            <input
              type="text"
              class="form-control"
              placeholder="Qualification"
            />
          </div>
          <div class="col">
            <input type="date" class="form-control" placeholder="dd-mm-yyyy" />
            <input
              type="text"
              class="form-control"
              placeholder="Description*"
            />
            <button type="button" class="btn btn-danger" onClick={prevPage}>
              BACK
            </button>
            <button type="button" class="btn btn-danger" onClick={nextPage}>
              NEXT
            </button>
          </div>
          <div class="col">
            <input type="date" class="form-control" placeholder="dd-mm-yyyy" />
          </div>
        </div>
      </form>
      <footer align="center">Page 2</footer>
    </div>
  );
}

export default EducationDetails;
