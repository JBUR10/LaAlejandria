import { Link } from "react-router-dom";

function Navbar() {

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <div className="container">

                <Link
                    className="navbar-brand"
                    to="/"
                >
                    Biblioteca
                </Link>


                <div>

                    <Link
                        className="btn btn-dark"
                        to="/libros"
                    >
                        Libros
                    </Link>

                </div>

            </div>

        </nav>

    );

}

export default Navbar;
