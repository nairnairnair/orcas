import { Link } from "react-router-dom"

const MyReports = () => {
    return (
        <section>
            <h1>My Reports</h1>
            <p>Report #1</p>
            <Link to="/reporteditor">
            <button>Edit</button>
            </Link>
            <p>Report #2</p>
            <Link to="/reporteditor">
            <button>Edit</button>
            </Link>
            <p>Report #3</p>
            <Link to="/reporteditor">
            <button>Edit</button>
            </Link>
        </section>
    )
}

export default MyReports;