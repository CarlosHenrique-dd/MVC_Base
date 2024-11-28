export const adapt = (controller) => async (req, res) => {
    const { status, data } = await controller.handle(req)
    return res.status(status).send(data)
}
