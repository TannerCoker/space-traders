module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/Login',
                permanent: true
            }
        ]
    }
}