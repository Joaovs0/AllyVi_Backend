const db = require('../models')
const User = db.users

exports.findAll = async () => {
    try{
        const users = await User.findAll({
            attributes:['id', 'nome', 'dataNasci', 'telefone', 'email', 'username']
        })
        return users
    } catch(e){
        throw Error('Ocorreu um erro ao selecionar os usuários. ERROR: ' + e.message)
    }
}

exports.findById = async(id) => {
    try{
        console.log("service", id);
        const user = await User.findByPk(id, {
            attributes:['id', 'nome', 'dataNasci', 'telefone', 'email', 'username']
        })
        console.log(user)
        return user
    } catch (e) {
        throw Error('Ocorreu um erro ao selecionar  o usuário. ERROR: ' + e.message)
    }
}

exports.create = async( nome, dataNasci, telefone, email, password, estado, cidade, cpf, username, descricao) => {
    try{

        const user = await User.create({ nome:nome, dataNasci:dataNasci, telefone:telefone, email: email, password: password, estado: estado, cidade:cidade, cpf:cpf, username: username, descricao: descricao})
        return user
    } catch (e) {
        throw Error('Erro ao inserir o usuário:' + username +  'ERROR: ' + e.message)
    }
}

exports.update = async (id, nome, dataNasci, telefone, email, password, estado, cidade, cpf, username, descricao) => {
    try{
        await User.update(
            { nome: nome, dataNasci: dataNasci, telefone: telefone, email: email, password: password, estado: estado, cidade: cidade, cpf: cpf, username: username, descricao: descricao},
            {where:{id: id}}
        )
    } catch (e) {
        throw Error('Erro ao alterar o usuário: ' + username + 'ERROR: ' + e.message)
    }
}

exports.delete = async (id) => {
    try{
        await User.destroy({
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
        const user = await User.findAll(
        {
            where:{
                email: email, password: password
            }
    })
    if( user.length === 0 ){
        throw('vazio')
    }
        return user
    } catch(e){
        throw 'SERVICE Erro ao lugar o usuário (SERVICE): ${e.message}'
    }
}

//logout do site

//const logout = async function () {
//    try {
//      await Parse.User.logout();
//      // To verify that current user is now empty, currentAsync can be used
 //     const currentUser = await Parse.User.current();
//      if (currentUser === null) {
//        alert('Success! No user is logged in anymore!');
//      }
//      // Update state variable holding current user
//      getCurrentUser();
//      return true;
//    } catch (error) {
//      alert(`Error! ${error.message}`);
//      return false;
 //   }
//  }

//logout da SA

exports.logout = async() => {
    try {
      await Parse.User.logout();
      // To verify that current user is now empty, currentAsync can be used
      const currentUser = await Parse.User.current();
      if (currentUser === null) {
        alert('Success! No user is logged in anymore!');
      }
      // Update state variable holding current user
      getCurrentUser();
      return true;
    } catch (error) {
      alert(`Error! ${error.message}`);
      return false;
    }
  }

//home

//mensagens