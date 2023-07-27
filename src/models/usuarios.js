import { DataTypes } from "sequelize";
import { sequelize } from "../cnn/cnn.js";

const Usuario = sequelize.define('Usuario', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rol: {
        type: DataTypes.ENUM('ADMIN_ROLE', 'USER_ROLE'),
        allowNull: false
    }
}, {
    tableName: 'usuario',
    createdAt: false,
    updatedAt: false
});

export{
    Usuario
}