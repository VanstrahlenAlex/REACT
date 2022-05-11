const saludo = () => {
    return new Promise((resolve, reject) => {
        resolve("Hola mundo ");
    });
};


saludo().then(response => console.log(response));


const peticion = () => {
    setTimeout(() => {
        const datos = {
            "id": 3,
            "name": "Clementine Bauch",
            "username": "Samantha",
            "email": "Nathan@yesenia.net"
        };
        console.log(datos);
    }, 1000);
}

peticion();