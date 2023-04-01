import { Module } from '@nestjs/common'
import { CategoryService } from './category.service'
import { CategoryController } from './category.controller'
import { Prisma } from '@prisma/client'
import { PrismaService } from 'src/prisma.service'

@Module({
	controllers: [CategoryController],
	providers: [CategoryService, PrismaService]
})
export class CategoryModule {}
