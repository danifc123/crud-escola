module.exports = (sequelize, Sequelize) => {
  const Sala = sequelize.define("sala", {
    numero: {
      type: Sequelize.STRING,
    },
    ativo: {
      type: Sequelize.BOOLEAN,
    },
  });
  return Sala;
};
