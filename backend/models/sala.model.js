module.exports = (sequelize, Sequelize) => {
  const Sala = sequelize.define("salas", {
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    local: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    capacidade: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    status: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
  });
  return Sala;
};
