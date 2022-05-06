import React from "react";

function ExtraDetails(props) {
  const prevPage = () => {
    props.history.push("/Experience");
  };
  return (
    <div>
      <form>
        <h1 align="center">Extra Details</h1>
        <div class="row">
          <h4>Skill/Languages</h4>
          <div class="col">
            <input type="text" class="form-control" placeholder="Skill 1" />
            <input type="text" class="form-control" placeholder="Skill 2" />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Skill 3" />
            <input type="text" class="form-control" placeholder="Skill 4" />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Skill 5" />
            <input type="text" class="form-control" placeholder="Skill 6" />
          </div>
        </div>
        <div class="row">
          <h4>Interest</h4>
          <div class="col">
            <input type="text" class="form-control" placeholder="Interest 1" />
            <input type="text" class="form-control" placeholder="Interest 2" />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Interest 3" />
            <input type="text" class="form-control" placeholder="Interest 4" />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Interest 5" />
            <input type="text" class="form-control" placeholder="Interest 6" />
          </div>
        </div>
        <button type="button" class="btn btn-primary" onClick={prevPage}>
          BACK
        </button>
        <button type="button" class="btn btn-secondary" disabled>
          NEXT
        </button>
      </form>
      <footer align="center">Page 5</footer>
    </div>
  );
}

export default ExtraDetails;
