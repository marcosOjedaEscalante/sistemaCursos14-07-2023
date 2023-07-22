import { DataTypes } from "sequelize";
import { sequelize } from "../cnn/cnn.js";


const Curso = sequelize.define('Curso', {
    codigo_curso: {
        type: DataTypes.STRING(30),
        primaryKey: true
    },
    fecha_inicio: {
        type: DataTypes.DATE
    },
    fecha_termno: {
        type: DataTypes.DATE
    }
}, {
    tableName: 'curso',
    createdAt: false,
    updatedAt: false
});

export{
    Curso
}
