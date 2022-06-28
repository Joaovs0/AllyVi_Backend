module.exports = (sequelize, Sequelize) => {
    const Paci = sequelize.define('pacis', {
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

        username: {
            type: Sequelize.STRING,
            notNull: true,
            is:/^[a-zA-z0-9\._]{4, 32}$/,
            unique:true
        },
    },
    {
        timestamps: false,
    }
)
    return Paci
}