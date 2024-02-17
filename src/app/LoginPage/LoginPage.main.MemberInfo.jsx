import React from 'react'
import { useLocation } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { AuthAtom } from '../../recoil/atoms/AuthAtom'
import { useNavigate } from 'react-router-dom'

const MemberInfoComponent = () => {
    const [_, setAccessToken] = useRecoilState(AuthAtom)
    const navigate = useNavigate()

    const location = useLocation()
    const params = new URLSearchParams(location.search)
    
    React.useEffect(() => {
        const _accessToken = params.get('authorization')
        if (!!_accessToken) {
            setAccessToken(_accessToken)
            navigate('/signup')
        }
    }, [location])

    return (
        <></>
    )
}

export default MemberInfoComponent
