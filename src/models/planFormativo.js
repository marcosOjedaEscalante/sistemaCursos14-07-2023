import { DataTypes } from "sequelize";
import { sequelize } from "../cnn/cnn.js";


const PlanFormativo = sequelize.define('PlanFormativo', {
    codigo_plan_formativo: {
        type: DataTypes.STRING(30),
        primaryKey: true,
    },
    descripcion: {
        type: DataTypes.STRING(250)
    }
}, {
    tableName: 'plan_formativo',
    createdAt: false,
    updatedAt: false
});

export{
    PlanFormativo
}