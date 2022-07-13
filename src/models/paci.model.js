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
    },
    {
        timestamps: false,
    }
)
    return Paci
}