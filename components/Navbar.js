import Link from 'next/link';
import LinkPedido from "../components/LinkPedido.js";

const Navbar = () => (
        // <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top p-3" id="barranavegacion">
    <nav className="navbar navbar-expand-lg fixed-top p-3 navbar-dark bg-secondary" id="barranavegacion">
        <div className="container-fluid">
            <Link href="/">
                <a className="navbar-brand" >Chato's Hamburguesas</a>
            </Link>
            <LinkPedido/>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav  ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link">Inicio</a>
                        </Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link href="/carta">
                            <a className="nav-link">La carta</a>
                        </Link>
                    </li> */}
                    <li className="nav-item">
                        <Link href="/promociones">
                            <a className="nav-link">Promociones</a>
                        </Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link href="/blog">
                            <a className="nav-link">Blog</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about">
                            <a className="nav-link">Conócenos</a>
                        </Link>
                    </li> */}
                </ul>
            </div>
        </div>

    </nav>
);

export default Navbar;
