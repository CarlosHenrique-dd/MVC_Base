export const adapt = (controller) => async (req, res) => {
    const { status, data } = await controller.handle(req)
    if (status !== 200) return res.status(status).send(data)
    return res.status(status).send(data)
}
