module.exports = (sequelize, Sequelize) => {
  const Sala = sequelize.define("sala", {
    nome: {
      type: Sequelize.STRING,
    },
    ativo: {
      type: Sequelize.BOOLEAN,
    },
  });
  return Sala;
};
