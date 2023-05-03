import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Card, Col, Row} from "react-bootstrap";

function Notes() {

    const [notes, setNotes] = useState([]);

    useEffect(() => {

        const allNotes = JSON.parse(localStorage.getItem('notes'))

        if (allNotes) {
            setNotes(allNotes)
        }
    }, []);

    console.log('notes: ', notes)

    const createNote = (date, content) => {

        notes.push({date: date, content: content})
        localStorage.setItem('notes', JSON.stringify(notes))
    }

    const allNotes2 = []

    notes.forEach((note, index) => {
        allNotes2.push(
            <Col key={index} xs={6} md={4}>
                <Card>
                    <Card.Body>
                        <Link to={`/note/${index}`}>
                            <h2>name: {note.date}</h2>
                            <h2>country: {note.content}</h2>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        );
    });

    return (
        <>
            <Row>
                {allNotes2}
            </Row>
            <br/>
            <br/>
            <a onClick={() => createNote('33/33/33333', '<h2>hello from the othe side?</h2>')}>SET</a>
            <br/>
            <br/>
            <a>GET</a>

        </>
    )
}

export default Notes