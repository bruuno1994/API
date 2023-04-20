const service = require('../services/Tarefa')

const controller = {}

controller.create = async(request, response) => {
    try {
        const tarefa = await service.create(request.body)
        return response.json(tarefa)
    } catch (error) {
        return response.json(error)
    }
}

controller.list = async(request, response) => {
    try {
        const tarefa = await service.list()
        return response.json(tarefa)
    } catch (error) {
        return response.json(error)
    }
}

controller.getById = async(request, response) => {
    try {
        const { id } = request.params 
        const tarefa = await service.getById(Number(id))
        
            if(!tarefa) {
                return response.json("Tarefa não encontrada")
            } else {
                return response.json(tarefa)
            }
    } catch (error) {
        return response.json(error)
    }
}

controller.delete = async(request, response) => {
    try {
        const { id } = request.params
        const tarefa = await service.delete(Number(id))
        return response.json("Tarefa excluída com sucesso")
    } catch (error) {
        return response.json(error)
    }
}

controller.update = async(request, response) => {
    try {
        const { id } = request.params
        const tarefa = await service.update(Number(id), request.body)
        return response.json(tarefa)
    } catch (error) {
        return response.json(error)
    }
}

module.exports = controller