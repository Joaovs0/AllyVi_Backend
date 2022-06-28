const { response } = require('../app')
const paciService = require('../services/paci.service')

exports.findAll = async (request, response) => {
    try{
        const pacis = await paciService.findAll()
        return response.status(200).json({
            status: 200,
            data: pacis,
            message: 'Usuários listados com sucesso'
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
        const paci = await paciService.findById(id)
        response.status(200).json({
            status: 200,
            data: paci,
            message: 'Usuario selecionado com sucesso!'
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
        const { nome, dataNasci, telefone, email, password, username} = request.body
        
        const paci = await paciService.create( nome, dataNasci, telefone, email, password, username)
        response.status(201).send({
            message: "Usuario cadastro sucesso!",
            body: {
                paci: paci
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
        const { nome , dataNasci, telefone, email, password, username} = request.body

        await paciService.update(id, nome, dataNasci, telefone, email, password, username)
        response.status(200).send({
            message: "Usuario alterado com sucesso!",
            body:{
                nome: nome,
                dataNasci: dataNasci,
                telefone: telefone,
                email: email,
                username: username
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
        await paciService.delete(id)
        response.status(200).send({message: "Usuario deletado"})
    } catch (e) {
        return response.status(400).json({
            status: 400,
            message: e.message
        })
    }
}

exports.login = async (request, response) => {
    try{
        const {email, password} = request.body

        const paci = await paciService.login(email, password)
        response.status(201).send({
            message: "Pesquisa realizada com sucesso!",
            body: {
                paci: paci

            }
        })
    } catch (e) {

        return response.status(400).json({
            status:400,
            message: "CONTROLLER Erro ao realizar pesquisa. ERROR: " + e.message
        })
    }
}