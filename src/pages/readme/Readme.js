import React, {useEffect, useState} from 'react'
import { getReadMe } from '../../helpers/app.service'
import ReactMarkdown from 'react-markdown'  
import Navigation from '../../components/navigation'

const Readme = ({match}) => {
    const [markdown, setMarkdown] = useState(null)
    const { username, reponame } = match.params

    useEffect(() => {
        getReadMe(username, reponame).then(result => {
            const content = atob(result.data.content)
            setMarkdown(content)
        }).catch(e => { 
            alert(e)
        })
    })

    return (
        <div>
            <Navigation title={reponame}/>
            <div className="readme">
                {markdown ? <ReactMarkdown source={markdown}/> : null}
            </div>
        </div>
    )
}

export default Readme