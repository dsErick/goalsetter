import asyncHandler from "../middleware/asyncHandler.js"

/**
 * @route GET /api/v1/orders
 * @access Public
 */
export const index = asyncHandler(async (req, res) => {
    res.status(200).json({
        data: []
    })
})

/**
 * @route POST /api/v1/orders
 * @access Public
 */
export const store = asyncHandler(async (req, res, next) => {
    const { text } = req.body

    if (!text) {
        res.status(422)
        throw new Error('O campo texto é obrigatório.')
    }

    res.status(201).json({
        message: 'Objetivo criado',
        data: {
            id: Math.floor(Math.random() * 100),
            text
        },
    })
})

/**
 * @route GET /api/v1/orders/:goalId
 * @access Public
 */
export const show = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        data: {
            id: req.params.goalId
        },
    })
})

/**
 * @route PUT /api/v1/orders/:goalId
 * @access Public
 */
export const update = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        message: 'Objetivo atualizado',
        data: {
            id: req.params.goalId
        },
    })
})

/**
 * @route DELETE /api/v1/orders/:goalId
 * @access Public
 */
export const destroy = asyncHandler(async (req, res, next) => {
    res.status(204).json({})
})
