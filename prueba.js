// Productos

const mascotas = [
    {id:1, nombre:"Bartolo", imagen: "https://media.diariouno.com.ar/p/f54249878a58173518d1bc7ec8f5814e/adjuntos/298/imagenes/008/806/0008806731/1200x0/smart/perro-callejerojpg.jpg"},
    {id:2, nombre:"Brisa", imagen: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/perritos-de-instagram-1616062929.jpg?crop=0.492xw:0.908xh;0.508xw,0.0917xh&resize=640:*"},
    {id:3, nombre:"Summer", imagen: "https://i.pinimg.com/550x/9a/3d/7f/9a3d7ff16437f45bf4f12c04245261e0.jpg"},
    {id:4, nombre:"Mia", imagen: "https://i.pinimg.com/564x/b5/59/a1/b559a1c5524862188357b5de4b0f4add--animal-pictures-cute-pictures.jpg"},
    {id:5, nombre:"Mora", imagen:"https://static.dw.com/image/43599911_303.jpg"},
    {id:6, nombre:"Simur", imagen: "https://www.clarin.com/img/2021/08/01/un-precioso-caniche-toy-adulto___xbahCUoy-_340x340__1.jpg" },
    {id:7, nombre:"Berta", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSPdN0w74I5G9b0ni6dBNO6za15HPpOEofLA&usqp=CAU"},
    {id:8, nombre:"Ron", imagen: "https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400"},
    {id:9, nombre:"Toto", imagen: "https://st1.uvnimg.com/a1/4c/e2de68644102b8eda0f7f2174295/unknown-9.jpeg" },
    {id:10, nombre:"Charlie", imagen: "https://www.tqpets.com.ec/wp-content/uploads/2018/03/que-es-la-obesidad-en-los-perritos.jpg"},
    {id:11, nombre:"Camila", imagen: "https://images.freejpg.com.ar/400/2911/christmas-pets-F100030277.jpg"},
    {id:12, nombre:"Juancho", imagen: "https://static.dw.com/image/58956274_303.jpg" },
    {id:13, nombre:"Homera", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnT8VEcIQ2H1gKBawjQ8p3ELFpgJYqiEk5w&usqp=CAU" },
    {id:14, nombre:"Mimi", imagen: "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59ad1ed15bafe8f8baace87f/gato-naranja-sentado_0.jpg" },
    {id:15, nombre:"Kitty", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa9Cmf7LBHoD3fFv2KjsczeYVgipQUJcIRwQ&usqp=CAU"},
    {id:16, nombre:"Irupe", imagen: "https://media.istockphoto.com/photos/dog-picture-id504080572?k=20&m=504080572&s=612x612&w=0&h=1I_6hEUEtsehQr888yOrXGokObp3qfR2xQa3mTdZVJw="},
    {id:17, nombre:"Roque", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuoBojIvhoc7LqkzTxql51VnPyF4OaANZjVA&usqp=CAU"}
];

function detalleMascotas() {
    const contenedorMascotas = document.getElementById('lista-mascotas');
    
    for (const mascota of mascotas) {
        let contenedor = document.createElement("div")
    
        contenedor.innerHTML= `
        <div class="mascota-detalle">
        <h4> ${mascota.nombre} </h4>
        <br>
        <img src="${mascota.imagen}" width="300px">
        <br>
        <br>
        <button class="boton-agregar-${mascota.id}"> &hearts; Adoptame &hearts; </button>
        <hr>
        </div>
        `;  
    
        contenedorMascotas.appendChild(contenedor);
    }
}

detalleMascotas();





        
    //     // Agregar al carrito
    
    //     let agregarCarrito = document.querySelector(`.boton-agregar-carrito-${producto.id}`);
    
    //     function guardar () {
    //         let carrito = JSON.parse(sessionStorage.getItem("carrito"));
    
    //         if (!carrito) {
    //             carrito = [];
    //         }
    
    //         carrito.push(producto);
    
    //         sessionStorage.setItem("carrito", JSON.stringify(carrito));
    //     }
    
    //     agregarCarrito.onclick = function (){
    //         guardar();
    //     };
    // }}