import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

const AuthAtom = atom({
    key: 'accessToken',
    default: '',
    effects_UNSTABLE: [persistAtom],
})

const SignUpAtom = atom({
    key: 'signup',
    default: {
        nickname: '',
        town: '',
        address: {
            name: '',
            latitude: 0,
            longitude: 0,
        }
    },
})

export {
    AuthAtom,
    SignUpAtom
}