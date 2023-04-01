import { Injectable } from '@nestjs/common'
import { executionAsyncResource } from 'async_hooks'
import { PrismaService } from 'src/prisma.service'
import { UserService } from 'src/user/user.service'

@Injectable()
export class StatisticsService {
	constructor(
		private prisma: PrismaService,
		private userService: UserService
	) {}
	async getMain(userId: number) {
		const user = await this.userService.byId(userId, {
			orders: {
				select: {
					items: true
				}
			},
			reviews: true
		})
		// return user.orders
		return [
			{
				name: 'Orders',
				value: user.orders.length
			},
			{
				name: 'Reviews',
				value: user.orders.length
			},
			{
				name: 'Favorites',
				value: user.orders.length
			},
			{
				name: 'Total amount',
				value: 1000
			}
		]
	}
}
