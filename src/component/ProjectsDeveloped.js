import React from "react";
function ProjectsDeveloped(props) {
  const nextPage = () => {
    props.history.push("/Experience");
  };
  const prevPage = () => {
    props.history.push("/Education");
  };
  return (
    <div>
      <h1 align="center">
        ProjectsDeveloped
        <div>
          <form>
            <h2 align="center">Project 1</h2>
            <div class="row">
              <input type="text" class="form-control" placeholder="Title*" />
              <input type="text" class="form-control" placeholder="Link*" />
              <input
                type="text"
                class="form-control"
                placeholder="Description*"
              />
            </div>
            <div class="row">
              <h2 align="center">Project 2</h2>
              <input type="text" class="form-control" placeholder="Title*" />
              <input type="text" class="form-control" placeholder="Link*" />
              <input
                type="text"
                class="form-control"
                placeholder="Description*"
              />
            </div>
            <h2 align="center">Project 3</h2>
            <div class="row">
              <input type="text" class="form-control" placeholder="Title*" />
              <input type="text" class="form-control" placeholder="Link*" />
              <input
                type="text"
                class="form-control"
                placeholder="Description*"
              />
            </div>
            <button type="button" class="btn btn-secondary" onClick={prevPage}>
              BACK
            </button>
            <button type="button" class="btn btn-danger" onClick={nextPage}>
              NEXT
            </button>
          </form>
          <footer align="center">Page 3</footer>
        </div>
      </h1>
    </div>
  );
}

export default ProjectsDeveloped;
