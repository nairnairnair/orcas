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

export default AdminHomepage;
