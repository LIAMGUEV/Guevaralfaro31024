const express= require('express');
const cors = require('cors');
const app = express();
const puerto=3000;
app.use(cors());

app.get('/usuario',function(req, res){
    res.json({
        primernombre: "William",
        segundonombre: "Eduardo",
        primerapellido: "Guevara",
        segundoapellido: "Alfaro",
        fechanacimiento: "06-05-1999",
        estadofamiliar: "Soltero",
        residencia: "Lourdes colón, la libertad",
        profesion: "Lic. ciencias de la computacion",
        estatura: 1.91,
        peso: 165.0,
        colorpiel: "Amarillo",
        colorojos: "cafe oscuro",
        colorcabello: "cafe oscuro",
        ultimosempleos:[{
            empresa: "Banco Azul del el savador SA",
            dependencia: "financiero",
            direccion:"San salvador el salvador",
            cargo: "Agente de atencion onmicanal",
            desde: "2022",
            hasta: "actualidad" 
        },{
            empresa: "Google",
            dependencia: "Departamento de informatica",
            direccion:"San salvador el salvador",
            cargo: "Gerente de area",
            desde: "03-04-2024",
            hasta: "actualidad"
        }]

    });
});

app.get('/genero',function(req,res){
    res.json([
        {
        id:1,
        genero:"Masculino"
        },{
            id:2,
            genero:"Fememnino"  
        }
    ]);
});


app.get('/tipo_documento',function(req,res){
    res.json([{
        id:1,
        tipo_documento:"DUI"
    },{
        id:2,
        tipo_documento:"NIT"
    },{
        id:3,
        tipo_documento:"ISSS"
    },{
        id:4,
        tipo_documento:"PASAPORTE"  
    }]);
});


app.get('/departamentos',function(req,res){
    res.json([{
        id:1,
        departamento: "Ahuachapan"
    },{
        id:2,
        departamento: "Sonsonate"
    },{
        id:3,
        departamento: "Santa Ana"
    },{
        id:4,
        departamento: "La Libertad"
    },{
        id:5,
        departamento: "Chalatenango"
    },{
        id:6,
        departamento: "San Salvador"
    },{
        id:7,
        departamento: "Cuscatlán"
    },{
        id:8,
        departamento: "La Paz"
    },{
        id:9,
        departamento: "San Vicente"
    },{
        id:10,
        departamento: "Cabañas"
    },{
        id:11,
        departamento: "Usulután"
    },{
        id:12,
        departamento: "San Miguel"
    },{
        id:13,
        departamento: "Morazán"
    },{
        id:14,
        departamento: "La Unión"
    }]);
});



app.get('/municipios',function(req,res){
    res.json([{
        id:1,
        Municipio: "Ahuachapan sur"
    },{
        id:2,
        Municipio: "Ahuachapan Norte"
    },{
        id:3,
        Municipio: "Sonsonate sur"
    },{
        id:4,
        Municipio: "Sonsonate norte"
    },{
        id:5,
        Municipio: "Santa Ana centro"
    },{
        id:6,
        Municipio: "Santa Ana Norte"
    },{
        id:7,
        Municipio: "La Libertad Centro"
    },{
        id:8,
        Municipio: "La libertad norte"
    },{
        id:9,
        Municipio: "Chalatenango sur"
    },{
        id:10,
        Municipio: "Chalatenango centro"
    },{
        id:11,
        Municipio: "San salvador Norte"
    },{
        id:12,
        Municipio: "San salvador sur"
    },{
        id:13,
        Municipio: "Cuscatlan centro"
    },{
        id:14,
        Municipio: "Cuscatlan norte"
    },{
        id:15,
        Municipio: "La Paz sur"
    },{
        id:16,
        Municipio: "La paz Norte"
    },{
        id:17,
        Municipio: "San vicente centro"
    },{
        id:18,
        Municipio: "San vicente sur"
    },{
        id:19,
        Municipio: "Cabañas sur"
    },{
        id:20,
        Municipio: "Cabañas centro"
    },{
        id:12,
        Municipio: "Usulután oeste"
    },{
        id:22,
        Municipio: "Usulután este"
    },{
        id:23,
        Municipio: "San Miguel oeste"
    },{
        id:24,
        Municipio: "San Miguel norte"
    },{
        id:25,
        Municipio: "Morazán Centro"
    },{
        id:26,
        Municipio: "Morazán Oeste"
    },{
        id:27,
        Municipio: "La Unión norte"
    },{
        id:28,
        Municipio: "La Unión sur"
    },
]);
});

app.get('/sumar',function(req,res){
    let resultado=parseFloat(req.query.campo1) + parseFloat(req.query.campo2);

    res.json({
        igual_a: resultado
    });
});

app.listen(puerto,function(req,res){
    console.log("SERVIDOR EN EJECUCION EN EL PUERTO" + puerto);
});
