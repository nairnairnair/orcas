import { Link } from "react-router-dom"

const MyReports = () => {
    return (
        <section>
            <h1>My Reports</h1>
            <h2>Report #1</h2>
            <h3>Role</h3>
            <p>Agency:</p>
            <p>Title:</p>
            <p>Role:</p>
            <p>Tasks:</p>
            <h3>Costs</h3>
            <p>Travel:</p>
            <p>Courier:</p>
            <p>Hours:</p>
            <Link to="/reporteditor">
            <button>Edit</button>
            </Link>
            <h2>Report #2</h2>
            <h3>Role</h3>
            <p>Agency:</p>
            <p>Title:</p>
            <p>Role:</p>
            <p>Tasks:</p>
            <h3>Costs</h3>
            <p>Travel:</p>
            <p>Courier:</p>
            <p>Hours:</p>
            <Link to="/reporteditor">
            <button>Edit</button>
            </Link>
            <h2>Report #3</h2>
            <h3>Role</h3>
            <p>Agency:</p>
            <p>Title:</p>
            <p>Role:</p>
            <p>Tasks:</p>
            <h3>Costs</h3>
            <p>Travel:</p>
            <p>Courier:</p>
            <p>Hours:</p>
            <Link to="/reporteditor">
            <button>Edit</button>
            </Link>
        </section>
    )
}

export default MyReports;