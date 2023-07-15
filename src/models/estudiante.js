import { DataTypes } from "sequelize";
import { sequelize } from "../cnn/cnn.js";


const Estudiante = sequelize.define('Estudiante', {
    id_estudiante: {
        type: DataTypes.INTEGER,
        primaryKey: true    
    },
    rut:{
        type: DataTypes.STRING(15)
    },
    nombre: {
        type: DataTypes.STRING(30)
    },
    apellido_pat:{
        type: DataTypes.STRING(30)
    },
    apellido_mat: {
        type: DataTypes.STRING(30)
    },
    direccion: {
        type: DataTypes.STRING(100)
    },
    codigo_comuna: {
        type: DataTypes.INTEGER
    },
    codigo_curso: {
        type: DataTypes.STRING(30)
    }
},{
    tableName: 'estudiante',
    createdAt: false,
    updatedAt: false
});

/* const arregloEstudiantes = await Estudiante.findAll();
console.log(arregloEstudiantes);
 */
/* const estudianteUno = Estudiante.build({id_estudiante: 1001});
const estudianteEliminado = await estudianteUno.destroy();
console.log(estudianteEliminado); */

/* const estudianteUno = await Estudiante.create({id_estudiante: 1002, nombre: 'sequelize', apellido_pat: 'sequelize', apellido_mat: 'sequelize'});
console.log(estudianteUno); */

/* const estudianteUno = Estudiante.build({id_estudiante: 1001, nombre: 'sequelize', apellido_pat: 'sequelize', apellido_mat: 'sequelize'});
const estudianteInsertado = await estudianteUno.save();
console.log(estudianteInsertado); */

/* Estudiante.sync(); */