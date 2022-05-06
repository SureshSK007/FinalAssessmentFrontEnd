import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PersonalDetails from "./component/PersonalDetails";
import EducationDetails from "./component/EducationDetails";
import ProjectsDeveloped from "./component/ProjectsDeveloped";
import ExperienceDetails from "./component/ExperienceDetails";
import ExtraDetails from "./component/ExtraDetails";
const routing = (
  <div>
    <Router>
      <Link to="/" />
      <Link to="/Education" />
      <Link to="/Project" />
      <Link to="/Experience" />
      <Link to="/Extra" />
      <Route exact path="/" component={PersonalDetails}></Route>
      <Route path="/Education" component={EducationDetails}></Route>
      <Route path="/Project" component={ProjectsDeveloped}></Route>
      <Route path="/Experience" component={ExperienceDetails}></Route>
      <Route path="/Extra" component={ExtraDetails}></Route>
    </Router>
  </div>
);

export default routing;
