import { DataTypes } from "sequelize";
import { sequelize } from "../cnn/cnn.js";
import { Curso } from "./cursos.js";


const PlanFormativo = sequelize.define('PlanFormativo', {
    codigo_plan_formativo: {
        type: DataTypes.STRING(30),
        primaryKey: true,
    },
    descripcion: {
        type: DataTypes.STRING(250)
    },
    duracion_horas: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'plan_formativo',
    createdAt: false,
    updatedAt: false
});

PlanFormativo.hasMany(Curso, {
    foreignKey: 'codigo_plan_formativo',
    sourceKey: 'codigo_plan_formativo'
});

Curso.belongsTo(PlanFormativo, {
    foreignKey: 'codigo_plan_formativo',
    targetKey: 'codigo_plan_formativo'
});



export{
    PlanFormativo
}

// Lazy Loading: carga diferida: carga perezosa
/* const plan = await PlanFormativo.findByPk('A1');
console.log(plan.dataValues);
const cursosPlan = await plan.getCursos();
cursosPlan.forEach(curso => {
    console.log(curso.dataValues);
}); */

// Eager Loading: carga ansiosa
/* const plan = await PlanFormativo.findByPk('A1', {
    include: Curso
});

console.log(plan.dataValues); */