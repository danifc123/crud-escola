module.exports = (sequelize, Sequelize) => {
  const Disciplina = sequelize.define("disciplina", {
    nome: {
      type: Sequelize.STRING,
    },
    ativo: {
      type: Sequelize.BOOLEAN,
    },
  });
  return Disciplina;
};
