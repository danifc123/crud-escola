module.exports = (sequelize, Sequelize) => {
  const Turma = sequelize.define("turma", {
    nome: {
      type: Sequelize.STRING,
    },
    ativo: {
      type: Sequelize.BOOLEAN,
    },
  });
  return Turma;
};
