import { Container, Row, Button, Form, Col } from "react-bootstrap";

const SearchBar = ({ onSearch }) => {
  return (
    <Container className="mt-5" onSubmit={onSearch}>
      <Row>
        <Col sm={4} style={{ width: "100%" }}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search for a city..."
              className="me-2"
              onChange={onSearch}
              name="city"
            />
            <Button className="button search-button">Search</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar;
