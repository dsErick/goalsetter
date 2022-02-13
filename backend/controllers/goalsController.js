/**
 * @route GET /api/v1/orders
 * @access Public
 */
export function index(req, res, next) {
    res.status(200).json({
        data: []
    })
}

/**
 * @route POST /api/v1/orders
 * @access Public
 */
export function store(req, res, next) {
    res.status(201).json({
        message: 'Goal created',
        data: {},
    })
}

/**
 * @route GET /api/v1/orders/:goalId
 * @access Public
 */
export function show(req, res, next) {
    res.status(200).json({
        data: {
            id: req.params.goalId
        },
    })
}

/**
 * @route PUT /api/v1/orders/:goalId
 * @access Public
 */
export function update(req, res, next) {
    res.status(200).json({
        message: 'Goal updated',
        data: {
            id: req.params.goalId
        },
    })
}

/**
 * @route DELETE /api/v1/orders/:goalId
 * @access Public
 */
export function destroy(req, res, next) {
    res.status(204).json({})
}

