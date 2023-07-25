import { DataTypes } from "sequelize";
import { sequelize } from "../cnn/cnn.js";

const PlanModulo = sequelize.define('PlanModulo', {
    clave_primaria:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    codigo_plan_formativo: {
        type: DataTypes.STRING(30)
    },
    codigo_modulo: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'plan_modulo',
    createdAt: false,
    updatedAt: false
});

export{
    PlanModulo
}