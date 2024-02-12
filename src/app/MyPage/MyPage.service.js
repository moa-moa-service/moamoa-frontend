import { useNavigate } from 'react-router-dom'

const useMyPageAction = () => {
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            const accessToken = import.meta.env.VITE_AUTH
            if (!accessToken) {
                throw new Error('Access Token is not defined')
            }

            const payload = {
                "accessToken": accessToken
            }

            const response = await client(auth).post('/auth/logout', payload)
            console.log(response)

            if (!!response) {
                navigate('/login')
            }
        } catch (error) {
            console.error(error)
            if (error.response) {
                console.error('Response Error:: ' + error.response)
            } else if (error.request) {
                console.error('Request Error: ' + error.request)
            } else {
                console.error(error.message)
            }
        }
    }

    return {
        handleLogout: handleLogout
    }
}

export default useMyPageAction