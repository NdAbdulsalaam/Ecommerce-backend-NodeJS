// Not found

const notFound = (req, res) => {
    const error = new Error(`Not Found: ${req.originalUrl}`);
    res.status(404);
    next(error)
}

// Error Register
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode == 200 ? 500: res.statusCode;
    res.status(statusCode);
    res.json({
        message: err?.message,
    })

}

module.exports = { errorHandler, notFound }