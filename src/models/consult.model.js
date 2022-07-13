module.exports = (sequelize, Sequelize) => {
    const Consult = sequelize.define('consults', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        data: {
            type: Sequelize.DATE,
            notNull: true,
        },

        horaInicio: {
            type: Sequelize.TIME,
            notNull: true,
        },

        horaFim: {
            type: Sequelize.TIME,
            notNull: true,
        },

        comentarios: {
            type: Sequelize.STRING,
            notNull: true,
        },

    },
    {
        timestamps: false,
    }
)
    return Consult
}