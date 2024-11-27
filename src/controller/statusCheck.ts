import { BaseController } from '../abstract'
import {
    type HttpRequest, type HttpResponse,
    ok, unauthorized
} from '../abstract/http'
import StatusCheckService from '../service/statusCheck'

class StatusCheckController extends BaseController {
    async perform(req: HttpRequest): Promise<HttpResponse> {
        const status = StatusCheckService.helloWorld()
        if (status === null) {
            return unauthorized()
        }
        return ok(status)
    }
}

export default new StatusCheckController()
