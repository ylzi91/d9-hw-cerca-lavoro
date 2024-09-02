import { useState } from "react";
import { Container, Row, Col, Form, Button, Badge } from "react-bootstrap";
import Job from "./Job";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate()

  const arrayOfJob = useSelector((store) => {
    return store.favourites.jobs
  })

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
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
          <Button onClick={(event) => {
            event.preventDefault()
            navigate('/favorite')}} className=" ms-3">Lista dei preferiti <Badge bg="warning">{arrayOfJob.length}</Badge></Button> 
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
