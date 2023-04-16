const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient

const service = {}

service.create = async(data) => {
    return await prisma.tarefas.create({data})
}

service.list = async() => {
    return await prisma.tarefas.findMany()
}

service.getById = async(id) => {
    return await prisma.tarefas.findUnique({where:{id}})
}

service.delete = async(id) => {
    return await prisma.tarefas.delete({where:{id}})
}

service.update = async(id, data) => {
    return await prisma.tarefas.update({data, where:{id}})
}

module.exports = service