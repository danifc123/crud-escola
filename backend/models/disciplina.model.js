module.exports = (sequelize, Sequelize) => {
  const Disciplina = sequelize.define("disciplinas", {
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    codigo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    periodo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    status: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
  });
  return Disciplina;
};
