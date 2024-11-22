module.exports = (sequelize, Sequelize) => {
  const Aluno = sequelize.define("alunos", {
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    data_nascimento: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    status: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
  });
  return Aluno;
};
