const { response } = require('../app')
const consultService = require('../services/consult.service')

exports.findAll = async (request, response) => {
    try{
        const consults = await consultService.findAll()
        return response.status(200).json({
            status: 200,
            data: consults,
            message: 'consultas listadas com sucesso'
        })
    } catch (e) {
        response.send(400).json({
            status: 400,
            message: e
        })
    }
}

exports.findById = async (request, response) => {
    try{
        const id = parseInt(request.params.id)
        console.log("Controller", id);
        const consult = await consultService.findById(id)
        response.status(200).json({
            status: 200,
            data: consult,
            message: 'Consulta selecionada com sucesso!'
        })
    } catch (e) {
        response.send(400).json({
            status:400,
            message: e
        })
    }
}

exports.create = async (request, response) => {
    try{
        const { data, horaInicio, horaFim, comentarios, userId, paciId} = request.body
        
        const consult = await consultService.create( data, horaInicio, horaFim, comentarios, userId, paciId)
        response.status(201).send({
            message: "Consulta marcada sucesso!",
            body: {
                consult: consult
            }
        })
    } catch (e) {
        return response.status(400).json({
            status:400,
            message: "Erro ao cadastrar o usuario. ERROR: " + e.message
        })
    }
}

exports.update = async(request, response) => {
    try{
        const id = parseInt(request.params.id)
        const { data, horaInicio, horaFim, comentarios} = request.body

        await consultService.update(id, data, horaInicio, horaFim, comentarios)
        response.status(200).send({
            message: "Consulta alterada com sucesso!",
            body:{
                data: data,
                horaInicio: horaInicio, 
                horaFim: horaFim,
                comentarios: comentarios
            }
        })
    } catch (e) {
        return response.status(400).json({
            status:400,
            message: e.message
        })
    }
}

exports.delete = async(request, response) => {
    try{
        const id = parseInt(request.params.id)
        await consultService.delete(id)
        response.status(200).send({message: "Consulta cancelada"})
    } catch (e) {
        return response.status(400).json({
            status: 400,
            message: e.message
        })
    }
}