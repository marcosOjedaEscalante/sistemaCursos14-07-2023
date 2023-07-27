import { DataTypes } from "sequelize";
import { sequelize } from "../cnn/cnn.js";

const Role = sequelize.define('Role', {
    rol: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    }
}, {
    tableName: 'role',
    createdAt: false,
    updatedAt: false
});

export{
    Role
}