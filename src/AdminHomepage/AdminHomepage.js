<<<<<<< Updated upstream
import { Link } from "react-router-dom";

const AdminHomepage = () => {
  return (
    <section>
      <div>
        <p>Hi, Admin Admission!</p>
        <Link to="/" className="btn-group">
          <button>Log Out</button>
        </Link>
      </div>
      <div className="btn-group">
        <Link to="/graphs">
          <button type="submit">View Data</button>
        </Link>
        <Link to="/form">
          <button type="submit">Submit A Report</button>
        </Link>
      </div>
    </section>
  );
};
=======
import 'bulma/css/bulma.min.css';
import { Link } from "react-router-dom"
import OutbreakCard from "./OutbreakCard";

const AdminHomepage = () => {
  return (
    <section className="container homepage">
      <div className="level">
        <h1>Welcome</h1>
        <div class="level-right">
          <a href="/" class="level-item has-text-black mr-5">Active Outbreak</a>
          <a href="/" class="level-item has-text-black mr-5 is-underlined"><strong>Inactive Outbreaks</strong></a>
          <Link to="/form">
            <p class="level-item"><a class="has-background-black has-text-white button">Create New Outbreak</a></p>
          </Link>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <OutbreakCard />
        </div>
        <div class="column">
          <OutbreakCard />
        </div>
        <div class="column">
          <OutbreakCard />
        </div>
      </div>
    </section>
  )
}
>>>>>>> Stashed changes

export default AdminHomepage;
