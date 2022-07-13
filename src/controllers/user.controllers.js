const { response } = require('../app')
const userService = require('../services/user.service')

exports.findAll = async (request, response) => {
    try{
        const users = await userService.findAll()
        return response.status(200).json({
            status: 200,
            data: users,
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
        const user = await userService.findById(id)
        response.status(200).json({
            status: 200,
            data: user,
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
        const { nome, dataNasci, telefone, email, password, estado, cidade, cpf, username, descricao} = request.body
        
        const user = await userService.create( nome, dataNasci, telefone, email, password, estado, cidade, cpf, username, descricao)
        response.status(201).send({
            message: "Usuario cadastro sucesso!",
            body: {
                user: user
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
        const { nome , dataNasci, telefone, email, password, estado, cidade, cpf, username, descricao} = request.body

        await userService.update(id, nome, dataNasci, telefone, email, password, estado, cidade, cpf, username, descricao)
        response.status(200).send({
            message: "Usuario alterado com sucesso!",
            body:{
                nome: nome,
                dataNasci: dataNasci,
                telefone: telefone,
                email: email,
                estado: estado,
                cidade: cidade,
                username: username,
                descricao: descricao
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
        await userService.delete(id)
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

        const user = await userService.login(email, password)
        response.status(201).send({
            message: "Pesquisa realizada com sucesso!",
            body: {
                user: user

            }
        })
    } catch (e) {

        return response.status(400).json({
            status:400,
            message: "CONTROLLER Erro ao realizar pesquisa. ERROR: " + e.message
        })
    }
}