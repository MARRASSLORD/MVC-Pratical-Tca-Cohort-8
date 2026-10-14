const logger = (req, res, next) => {
    const date = new Date()
    const result = `API with Endpoint: ${req.url} and Method: $
    {req.method} was called at:`
}