const service = require('../services/Tarefa')

const controller = {}

controller.create = async(request, response) => {
    const tarefa = await service.create(request.body)
    return response.json(tarefa)
}

controller.list = async(request, response) => {
    const tarefa = await service.list()
    return response.json(tarefa)
}

controller.getById = async(request, response) => {
    const { id } = request.params 
    const tarefa = await service.getById(Number(id))
        if(!id) {
            return response.json("Tarefa não encontrada")
        } else {
            return response.json(tarefa)
        }
}

controller.delete = async(request, response) => {
    const { id } = request.params
    const tarefa = await service.delete(Number(id))
    return response.json("Tarefa excluída com sucesso")
}

controller.update = async(request, response) => {
    const { id } = request.params
    const tarefa = await service.update(Number(id), request.body)
    return response.json(tarefa)
}

module.exports = controller