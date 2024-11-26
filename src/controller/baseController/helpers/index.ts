import { ServerError, UnauthorizedError } from '../errors'

export type HttpRequest<T = unknown> = {
	body: T
	query: T
	params: T
}

export type HttpResponse<T = unknown> = {
	status: number
	data: T
}

export const ok = <T = unknown>(data: T): HttpResponse<T> => ({
	status: 200,
	data
})

export const badRequest = (error: Error): HttpResponse => ({
	status: 400,
	data: error
})

export const unauthorized = (): HttpResponse => ({
	status: 401,
	data: new UnauthorizedError()
})

export const conflict = (error: Error): HttpResponse => ({
	status: 409,
	data: error
})

export const serverError = (error?: Error): HttpResponse => ({
	status: 500,
	data: new ServerError(error)
})
