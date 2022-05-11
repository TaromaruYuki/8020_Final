import Container from "react-bootstrap/Container";
// import { Discord, Github, Twitter } from "react-bootstrap-icons";

const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 bg-light">
            <Container className="d-flex flex-wrap justify-content-between align-items-center">
                <div className="col-md-4 d-flex align-items-center">
                    <img src="/img/logo_100.png" alt="" className="me-2"/>
                    <span className="text-muted">&copy; {new Date().getUTCFullYear()} Brand Name</span>
                </div>

                {/* <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a href="https://discord.gg/qFtz2gS"><Discord size={24} color="#6577e6"/></a></li>
                    <li className="ms-3"><a href="https://github.com/TaromaruYuki"><Github size={24} color="#fff"/></a></li>
                    <li className="ms-3"><a href="https://twitter.com/TaromaruYuki"><Twitter size={24} color="#1da1f2"/></a></li>
                    <li className="ms-3"><a href="https://ko-fi.com/taromaruyuki"><img src="/img/ko-fi.png" alt="" width={24} height={24} /></a></li>
                </ul> */}
            </Container>
        </footer>
    );
}

export default Footer;