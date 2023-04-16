import { Link } from "react-router-dom"

const ReportEditor = () => {
    return (
        <section>
            <h1>Edit Your Report</h1>
            <p>Field #1</p>
            <p>Field #2</p>
            <p>Field #3</p>
            <Link to="/form">
            <button>Submit Edits</button>
            </Link>
        </section>
    )
}

export default ReportEditor;