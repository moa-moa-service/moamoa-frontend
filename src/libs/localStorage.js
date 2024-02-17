const localStorage = {
    getItem: (key) => {
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : undefined
    },
    setItem: (key, value) => {
        window.localStorage.setItem(key, JSON.stringify(value))
    },
    removeItem: (key) => {
        window.localStorage.removeItem(key)
    },
    clear: () => {
        window.localStorage.clear()
    }
}

export default localStorage
