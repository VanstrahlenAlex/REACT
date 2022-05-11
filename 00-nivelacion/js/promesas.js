//Las promesas reciben un callback

const sumar = (a, b) => {
    return new Promise((resolve, reject) => {
        if (a < 0 || b < 0) {
            reject("Esto no es valido");
        } else {
            resolve(a + b);
        }
    });
};

const result = sumar(-3, 5).then((res) => {
    console.log(res);
}).catch((error) => { console.log(error); });

console.log(result);