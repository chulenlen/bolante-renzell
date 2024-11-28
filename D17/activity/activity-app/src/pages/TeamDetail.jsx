import React from 'react';
import { useParams } from 'react-router-dom';
import { teamMembers } from '../team-data/data';
import { Card, Container, Row, Col } from 'react-bootstrap';

const TeamDetail = () => {
  const { id } = useParams(); // Access the dynamic route parameter
  const member = teamMembers[id - 1];

  if (!member) {
    return (
      <Container className="mt-5">
        <h3 className="text-danger text-center">Member not found</h3>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">{member.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted text-center">
                {member.role}
              </Card.Subtitle>
              <Card.Text className="text-center">
                <strong>Email:</strong> {member.email}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TeamDetail;
