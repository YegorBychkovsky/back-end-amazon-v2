import { NestMiddleware } from '@nestjs/common'
import { NextFunction, Request, Response } from 'express'

export class CorsMiddleware implements NestMiddleware {
	use(req: Request, res: Response, next: NextFunction) {
		res.setHeader('Access-Control-Allow-Origin', '*')
		res.setHeader(
			'Access-Control-Allow-Methods',
			'GET, POST, PUT, DELETE, PATCH, OPTIONS'
		)
		res.setHeader(
			'Access-Control-Allow-Headers',
			'Origin, X-Requested-With, Content-Type, Accept, Authorization'
		)
		if (req.method === 'OPTIONS') {
			return res.sendStatus(200)
		}
		next()
	}
}
