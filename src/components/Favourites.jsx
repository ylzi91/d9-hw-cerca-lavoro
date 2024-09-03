import { Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeToFavoriteAction } from "../redux/actions";

export default function Favurites() {
  const dispach = useDispatch();

  const arrayFavorite = useSelector((state) => {
    return state.favourites.jobs;
  });

  return (
    <Container>
      <Row className=" g-2  mt-5">
        {arrayFavorite.length === 0 ? <p>La tua lista dei preferiti è vuota</p> : arrayFavorite.map((fav) => {
          return (
            <>
              <Col xs={4} className="border rounded-3 mx-auto">
                <Link to={`/${fav.company_name}`}>{fav.company_name}</Link>
              </Col>

              <Col xs={4} className="border rounded-3">
                <a href={fav.url} target="_blank" rel="noreferrer">
                  {fav.title}
                </a>
              </Col>

              <Col xs={4} className="mx-auto d-flex justify-content-between">
                <Button
                  variant="danger"
                  onClick={() => {
                    dispach(removeToFavoriteAction(fav));
                  }}
                >
                  Elimina
                </Button>
              </Col>
            </>
          );
        })}
      </Row>
    </Container>
  );
}
