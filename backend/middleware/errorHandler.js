import colors from 'colors'

export function errorHandler(err, req, res, next) {
    console.error(colors.red.bold(err.stack))

    const statusCode = res.statusCode ?? 500


    res.status(statusCode).json({
        message: err.message ?? 'Algo de inesperado ocorreu no servidor.',
        errors: [],
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    })
}
