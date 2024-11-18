module.exports = (sequelize, Sequelize) => {
  const Turma = sequelize.define("turmas", {
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    id_disciplina: {
      type: Sequelize.INTEGER,
      references: { model: "disciplinas", key: "id" },
    },
    id_professor: {
      type: Sequelize.INTEGER,
      references: { model: "professores", key: "id" },
    },
    id_sala: {
      type: Sequelize.INTEGER,
      references: { model: "salas", key: "id" },
    },
    dia_semana: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    horario_inicio: {
      type: Sequelize.TIME,
      allowNull: false,
    },
    horario_termino: {
      type: Sequelize.TIME,
      allowNull: false,
    },
    status: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
  });
  return Turma;
};
