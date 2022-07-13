module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('users', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nome: {
            type: Sequelize.STRING,
            notNull: true
        },

        dataNasci: {
            type: Sequelize.DATE,
            notNull: true
        },

        telefone: {
            type: Sequelize.STRING,
            notNull: true
        },

        email: {
            type: Sequelize.STRING,
            notNull: true,
            unique: true
        },
        password: {
            type: Sequelize.STRING,
            notNull: true
        },

        estado: {
            type: Sequelize.STRING,
            notNull: true
        },

        cidade: {
            type: Sequelize.STRING,
            notNull: true
        },

        cpf: {
            type: Sequelize.STRING,
            notNull: true,
            unique: true
        },

        username: {
            type: Sequelize.STRING,
            notNull: true,
            is:/^[a-zA-z0-9\._]{4, 32}$/,
            unique:true
        },

        descricao: {
            type: Sequelize.STRING
        },
    },
    {
        timestamps: false,
    }
)
    return User
}