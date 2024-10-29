module.exports = (sequelize, Sequelize) => {
  const Professor = sequelize.define("professor", {
    nome: {
      type: Sequelize.STRING,
    },
    ativo: {
      type: Sequelize.BOOLEAN,
    },
  });
  return Professor;
};
