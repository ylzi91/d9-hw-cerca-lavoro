import { useState } from "react";
import { Container, Row, Col, Form, Button, Badge } from "react-bootstrap";
import Job from "./Job";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ViewSearch } from "../redux/actions";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const jobs = useSelector((state) => state.searchResult.searchList);
  const navigate = useNavigate()
  const dispach = useDispatch()

  const arrayOfJob = useSelector((store) => {
    return store.favourites.jobs
  })

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit =  e => {
    e.preventDefault();
    dispach(ViewSearch(query))
 
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto d-flex justify-content-between">
          <Form className=" flex-grow-1" onSubmit={handleSubmit}>
            <Form.Control className="" type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map(jobData => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
