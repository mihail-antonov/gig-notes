import {useState} from "react";
import {Button, Nav, Offcanvas} from "react-bootstrap";
import {Link} from "react-router-dom";

function Header() {
    const [open, setOpen] = useState(false);

    const handleClose = () => {

        document.body.classList.remove('offcanvas-opened')
        setOpen(false)
    };
    const handleShow = () => {

        document.body.classList.add('offcanvas-opened')
        setOpen(true);
    };

    return (
        <header>
            <Button variant="primary" onClick={handleShow}>
                Launch
            </Button>

            <Offcanvas show={open} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav
                        activeKey="/home"
                        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                    >
                        <Nav.Item>
                            <Link to={`notes/`} onClick={handleClose}>All Notes</Link>
                        </Nav.Item>
                        <hr />
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Folders <span>8</span></Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </header>
    )
}

export default Header