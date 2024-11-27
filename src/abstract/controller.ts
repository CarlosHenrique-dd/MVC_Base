import { type HttpRequest, type HttpResponse, serverError } from './http'

export abstract class BaseController {
    abstract perform(HttpRequest: HttpRequest): Promise<HttpResponse>

    async handle(HttpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            return await this.perform(HttpRequest)
        } catch (error) {
            return serverError()
        }
    }
}
