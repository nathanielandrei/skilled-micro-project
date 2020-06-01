import React, { useContext, useEffect } from 'react'
import {
  Container,
  Row,
  Col,
  ListGroup
} from 'react-bootstrap'
import { UserStateContext } from '../../provider/UserContextProvider'
import { Link, useHistory } from 'react-router-dom'
import Navigation from '../../components/navigation'

const Repos = () => {
  const { userState } = useContext(UserStateContext)
  const { username, repos } = userState
  const history = useHistory()

  useEffect(() => {
    if (!username) {
      history.push('/')
    }
  }, [username, history])

  return (
    <div>
      <Navigation title={`${username}'s Projects`} resetState={true}/>
      <div className="content">
            <Container>
              <Row>
                <Col>
                <ListGroup>
                  {repos ? repos.map(data => (
                    <ListGroup.Item key={data.id}>
                      <Link to={`${username}/${data.name}`}>{data.name}</Link>
                    </ListGroup.Item>
                  )): null}
                </ListGroup>
                </Col>
              </Row>
            </Container>
      </div>
    </div>
  )
}

export default Repos
