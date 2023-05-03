import {Outlet} from "react-router-dom";
import Header from "../components/header.jsx";

import '../styles/app.scss'
import {Container} from "react-bootstrap";

function App() {



    return (
        <>
            <Header/>

            <main id="main">
                <Container>
                    <Outlet />
                </Container>
            </main>
        </>
    )
}

export default App