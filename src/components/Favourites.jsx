import { Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";



export default function Favurites (){
    const dispach = useDispatch() 

    const arrayFavorite = useSelector((state) => {
        return state.favourites.jobs
    })

    return (
        <Container>
          <Row className=" g-2">
            {
                arrayFavorite.map((fav)=> {
                    return(
                    <>
                    <Col xs={6} className="mx-auto d-flex justify-content-between">
                        <Link to={`/${fav.company_name}`}>{fav.company_name}</Link>
                    </Col>
                    <Col xs={6} className="mx-auto d-flex justify-content-between">
                        <Button variant="danger" onClick={()=> {
                            dispach({
                                type: 'REMOVE_TO_FAVORITES',
                                payload: fav._id
                            })
                        }}>Elimina</Button>
                    </Col>
                    </>
                    )

                })
            }
        
          </Row>
        </Container>
      );
}