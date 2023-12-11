import axios from "axios";
import React, { useEffect, useState } from "react";
import MainScreen from "../../MainScreen.jsx";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Badge from "react-bootstrap/Badge";
import Accordion from "react-bootstrap/Accordion";

import { AccordionButton } from "react-bootstrap";

const MyNotes = () => {
  const [notes, setNotes] = useState([]);
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };
  const fetchNotes = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/notes");
      console.log("API Response:", data);

      // Check if data is an array before setting it in state
      if (Array.isArray(data)) {
        setNotes(data);
      } else {
        console.error("Invalid data format:", data);
      }
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <MainScreen title="Welcome back manuj">
      <Link to="/createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>

      <Accordion>
        {notes.map((note, index) => (
          <Accordion.Item key={note._id} eventKey={index.toString()}>
            <Card style={{ margin: 10 }}>
              <Card.Header style={{ display: "flex" }}>
                <span
                  style={{
                    color: "black",
                    textDecoration: "none",
                    flex: 1,
                    cursor: "pointer",
                    alignSelf: "center",
                    fontSize: 18,
                  }}
                >
                  <AccordionButton as={Card.Text} variant="link" eventKey="0">
                    {note.title}
                  </AccordionButton>
                </span>
                <div>
                  <Button href={`/note/${note._id}`}>Edit</Button>
                  <Button
                    className="mx-2"
                    variant="danger"
                    onClick={() => deleteHandler(note._id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Header>
              <Accordion.Collapse eventKey={index.toString()}>
                <Card.Body>
                  <h4>
                    <Badge bg="success">Category - {note.category}</Badge>
                  </h4>
                  <blockquote className="blockquote mb-0">
                    <p>{note.content}</p>
                    <footer className="blockquote-footer">
                      Created on - date
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion.Item>
        ))}
      </Accordion>
    </MainScreen>
  );
};

export default MyNotes;
