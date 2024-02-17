const useLoginAction = () => {
    const handleLogin = () => {
        window.location.href = import.meta.env.VITE_ENDPOINT + '/auth/login'
    }

    return {
        handleLogin: handleLogin,
    }
}

export default useLoginAction
