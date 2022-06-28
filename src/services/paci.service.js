const db = require('../models')
const Paci = db.pacis

exports.findAll = async () => {
    try{
        const pacis = await Paci.findAll({
            attributes:['id', 'nome', 'dataNasci', 'telefone', 'email', 'username']
        })
        return pacis
    } catch(e){
        throw Error('Ocorreu um erro ao selecionar os usuários. ERROR: ' + e.message)
    }
}

exports.findById = async(id) => {
    try{
        console.log("service", id);
        const paci = await Paci.findByPk(id, {
            attributes:['id', 'nome', 'dataNasci', 'telefone', 'email', 'username']
        })
        console.log(paci)
        return paci
    } catch (e) {
        throw Error('Ocorreu um erro ao selecionar  o usuário. ERROR: ' + e.message)
    }
}

exports.create = async( nome, dataNasci, telefone, email, password, username) => {
    try{

        const paci = await Paci.create({ nome:nome, dataNasci:dataNasci, telefone:telefone, email: email, password: password, username: username})
        return paci
    } catch (e) {
        throw Error('Erro ao inserir o usuário:' + username +  'ERROR: ' + e.message)
    }
}

exports.update = async (id, nome, dataNasci, telefone, email, password, username) => {
    try{
        await Paci.update(
            { nome: nome, dataNasci: dataNasci, telefone: telefone, email: email, password: password, username: username},
            {where:{id: id}}
        )
    } catch (e) {
        throw Error('Erro ao alterar o usuário: ' + username + 'ERROR: ' + e.message)
    }
}

exports.delete = async (id) => {
    try{
        await Paci.destroy({
            where:{id: id}
        })
    } catch (e) {
        throw Error('Ocorreu um erro ao deletar o usuário. ERROR: ' + e.message)
    }
}

//login

exports.login = async(email, password)  => {
    try{
        console.log(email, password)
        const paci = await Paci.findAll(
        {
            where:{
                email: email, password: password
            }
    })
    if( paci.length === 0 ){
        throw('vazio')
    }
        return paci
    } catch(e){
        throw 'SERVICE Erro ao lugar o usuário (SERVICE): ${e.message}'
    }
}

//home

//mensagens