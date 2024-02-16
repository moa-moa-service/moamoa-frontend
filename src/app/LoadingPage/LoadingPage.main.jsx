import * as itemS from './styled/Loading.main.style'
import Moamoa from '../../../public/LoadingPage/moamoa.png'

function Loading() {
    return(
        <>
            <itemS.LoadingWrapper>
                <itemS.Character src={Moamoa}/>
            </itemS.LoadingWrapper>
        </>
    )
}

export default Loading;