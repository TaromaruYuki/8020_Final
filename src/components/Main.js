import Container from "react-bootstrap/Container";

const Main = (props) => {
    return (
        <main className="flex-shrink-0 mb-4">
            <Container className="mt-4">
                {props.children}
            </Container>
        </main>
    );
}

export default Main;