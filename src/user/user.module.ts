import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { PrismaClient } from '@prisma/client'
import { PrismaService } from 'src/prisma.service'

@Module({
	controllers: [UserController],
	providers: [UserService, PrismaService],
	exports: [UserService]
})
export class UserModule {}
