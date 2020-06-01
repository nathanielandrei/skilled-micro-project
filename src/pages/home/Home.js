import React, { useContext, useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button
} from 'react-bootstrap'

import { UserStateContext } from '../../context/UserContextProvider'
import { getUserRepo } from '../../helpers/app.service'
import * as action from '../../context/actions/user.actions'
import Loader from '../../components/loader'

const Home = () => {
  const { userState, userDispatch } = useContext(UserStateContext)
  const { isLoading } = userState;
  
  const usernameRef = useRef('')
  const history = useHistory();

  useEffect(() => {
    const { username, isLoaded } = userState;
    if (isLoaded) {
      history.push(`${username}`)
    }

    if(!username) {
      history.push('/')
    }

  }, [userState, history])

  const handleGo = () => {
    const name = usernameRef.current.value
    userDispatch(action.getRepo(name))

    getUserRepo(name).then(result => {
      userDispatch(action.getRepoSuccess(result.data))
    }).catch((e) => {
      userDispatch(action.getRepoFailed(e.message))

      alert(e.message)
    })
  }

  return (
      <div className="content">
        {isLoading ? <Loader/> : <Container>
            <Row className="justify-content-md-center">
              <Col></Col>
              <Col lg={4}>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Type any Github Username"
                    aria-label="Type any Github Username"
                    aria-describedby="basic-addon2"
                    ref={usernameRef}
                  />
                  
                  <InputGroup.Append>
                    <Button variant="outline-primary" onClick={handleGo}>Go</Button>
                  </InputGroup.Append>
                </InputGroup>
              </Col>
              <Col></Col>
            </Row>
          </Container>}
      </div>
  )
}

export default Home
