import { BaseController } from '../baseController/controller'
import StatusCheckService from '../../service/statusCheck'
import type { HttpRequest, HttpResponse } from '../baseController/helpers'
import { badRequest, ok, unauthorized } from '../baseController/helpers'

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
