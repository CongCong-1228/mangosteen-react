import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const RedirectToWelcome1: React.FC = () => {
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/welcome/1')
    }, [])
    return null
}

