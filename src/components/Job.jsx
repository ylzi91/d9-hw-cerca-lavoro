import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Job({ data }){
  const [deleteBut, setDeletBut] = useState(false)
  const dispatch = useDispatch() 
  const mySelector = useSelector((state) => {
    return state.favourites.jobs
  }
  ) 
  console.log('Filtro',mySelector.filter((jobs) => jobs._id === data._id))

  const handlerBut = () => {
    setDeletBut(!deleteBut)
  }

  
  return(
  <Row
    className="mx-0 mt-3 p-3"
    style={{ border: '1px solid #00000033', borderRadius: 4 }}
  >
    <Col xs={4}>
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
    </Col>
    <Col xs={4}>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
    </Col>
    <Col xs = {4}>
        <Button variant={mySelector.filter((jobs) => jobs._id === data._id)[0]?._id !== data._id ? 'success': 'danger'} onClick={() =>{
          handlerBut()
          if(mySelector.filter((jobs) => jobs._id === data._id)[0]?._id !== data._id){
            dispatch({
              type: 'ADD_TO_FAVORITES',
              payload: data
            })
          }
          else {
            dispatch({
              type: 'REMOVE_TO_FAVORITES',
              payload: data._id
            })
            
          }
        }
          

          }>{mySelector.filter((jobs) => jobs._id === data._id)[0]?._id !== data._id ? 'Aggiungi ai preferiti' : 'Rimuovi dai preferiti'}</Button>
    </Col>
  </Row>
)
}

export default Job
