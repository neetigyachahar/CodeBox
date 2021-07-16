import { Dispatch, FC, useState, useEffect } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import Codebox from "../components/Codebox"
import MessageCard from '../components/MessageCard'
import Loading from '../components/Loading'
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import axios from 'axios'
import { filesType } from '../store/reducers/files'
import { getPaste } from '../pastebin'


interface MatchParams {
    id: string
}

interface mapDispatchToPropsTypes {
    setFiles: (f: filesType) => void
}

export type ViewCodeboxPropsTypes = RouteComponentProps<MatchParams> & mapDispatchToPropsTypes

const ViewCodebox: FC<ViewCodeboxPropsTypes> = ({ setFiles, match }) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => { loadCodebox() }, [])

    const loadCodebox = async () => {
        try {
            const id = match.params.id
            let files: any = await getPaste(id)
            if (files.data.length) {
                files = JSON.parse(files.data)
                setFiles(files)
            } else {
                throw new Error()
            }
        } catch (err) {
            setLoading(false)
            setError("No CodeBox found!")
        }
    }

    if (loading)
        return <Loading />

    if (error.length)
        return <MessageCard message={error} />

    return <Codebox />
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        setFiles: (files: filesType) => dispatch(actions.setFiles(files))
    }
}

export default withRouter(connect<null, mapDispatchToPropsTypes>(null, mapDispatchToProps)(ViewCodebox))