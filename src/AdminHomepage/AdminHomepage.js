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

export default AdminHomepage;
