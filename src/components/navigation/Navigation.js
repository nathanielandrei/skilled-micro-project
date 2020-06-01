import React, { useContext } from 'react'
import { Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom'
import { UserStateContext } from '../../context/UserContextProvider'
import { refreshState } from '../../context/actions/user.actions'

const Navigation = ({title, resetState}) => {
    const { userDispatch } = useContext(UserStateContext)
    const history = useHistory()

    const goBackTo = () => {
        if(resetState) {
            userDispatch(refreshState())
        }

        history.goBack()
    }

    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand className="navbar" onClick={goBackTo}>
                <FontAwesomeIcon icon={faArrowLeft} size="lg"/>
            </Navbar.Brand>
            <Navbar.Brand><h3>{title}</h3></Navbar.Brand>
        </Navbar>
    )
}

export default Navigation
