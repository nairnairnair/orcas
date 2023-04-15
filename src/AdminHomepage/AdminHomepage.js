import { Link } from "react-router-dom"

const AdminHomepage = () => {
    return (
        <section>
            <div>
                <p>Hi, Admin Adminson!</p>
                <Link to="/">
                    <button>Log Out</button>
                </Link>
            </div>
            <div>
                <Link to="graphs">
                    <button type="submit">View Data</button>
                </Link>
                <Link to="form">
                    <button type="submit">Submit A Report</button>
                </Link>
            </div>
        </section>
    )
}

export default AdminHomepage;