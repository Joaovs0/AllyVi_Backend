const db = require('../models')
const Consult = db.consults

// const consult = User && Paci   

exports.findAll = async () => {
    try{
        const consults = await Consult.findAll({
            attributes:['id', 'data', 'horaInicio', 'horaFim', 'comentarios']
        })
        return consults
    } catch(e){
        throw Error('Ocorreu um erro ao selecionar os usuários. ERROR: ' + e.message)
    }
}

exports.findById = async(id) => {
    try{
        console.log("service", id);
        const consult = await Consult.findByPk(id, {
            attributes:['id', 'data', 'horaInicio', 'horaFim', 'comentarios']
        })
        console.log(consult)
        return consult
    } catch (e) {
        throw Error('Ocorreu um erro ao selecionar  o usuário. ERROR: ' + e.message)
    }
}

exports.create = async(data, horaInicio, horaFim, comentarios, userId, paciId) => {
    try{

        const consult = await Consult.create({data: data , horaInicio: horaInicio, horaFim: horaFim, comentarios: comentarios, userId: userId, paciId: paciId})
        return consult
    } catch (e) {
        throw Error('Erro ao inserir o usuário:' + data +  'ERROR: ' + e.message)
    }
}

exports.update = async (id, data, horaInicio, horaFim, comentarios, paciId) => {
    try{
        await Consult.update(
            { data: data, horaInicio: horaInicio, horaFim: horaFim, comentarios: comentarios, paciId: paciId},
            {where:{id: id}}
        )
    } catch (e) {
        throw Error('Erro ao alterar o usuário: ' + data + horaInicio + horaFim + 'ERROR: ' + e.message)
    }
}

exports.delete = async (id) => {
    try{
        await Consult.destroy({
            where:{id: id}
        })
    } catch (e) {
        throw Error('Ocorreu um erro ao deletar o usuário. ERROR: ' + e.message)
    }
}