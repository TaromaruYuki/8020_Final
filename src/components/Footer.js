import Container from "react-bootstrap/Container";
import { Github } from "react-bootstrap-icons";

const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 bg-light">
            <Container className="d-flex flex-wrap justify-content-between align-items-center">
                <div className="col-md-4 d-flex align-items-center">
                    <img src="/img/logo_100.png" alt="" className="me-2"/>
                    <span className="text-muted">&copy; {new Date().getUTCFullYear()}</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a href="https://github.com/TaromaruYuki/8020_Final" target="_blank" rel="noopener noreferrer"><Github size={24} color="#000"/></a></li>
                </ul>
            </Container>
        </footer>
    );
}

export default Footer;