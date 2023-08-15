const products = [
    {
    id: 1,
    name: "Taladro",
    description: "Black & Decker 750W 13mm",
    stock: 5,
    price: 10000,
    img: "https://arcencohogar.vtexassets.com/arquivos/ids/326786-800-800?v=637944543478700000&width=800&height=800&aspect=true",
    category: "Herramientas"
    },
    {
    id: 2,
    name: "Taladro",
    description: " Black & Decker 500W 10mm ",
    stock: 6,
    price: 8000,
    img: "https://arcencohogar.vtexassets.com/arquivos/ids/326813-800-800?v=637944557575900000&width=800&height=800&aspect=true",
    category: "Herramientas"
    },
    {
    id: 3,
    name: "Taladro",
    description: " De Walt 1100W 13mm ",
    stock: 4,
    price: 20000,
    img: "https://arcencohogar.vtexassets.com/arquivos/ids/327004-800-800?v=637944633492330000&width=800&height=800&aspect=true",
    category: "Herramientas"
    },
    {
    id: 4,
    name: "Amoladora",
    description: " Black & Decker 1100W disco 4,5mm ",
    stock: 10,
    price: 13000,
    img: "https://arcencohogar.vtexassets.com/arquivos/ids/326858-800-800?v=637944572543170000&width=800&height=800&aspect=true",
    category: "Herramientas"
    },
    {
    id: 5,
    name: "Amoladora",
    description: " DeWalt 1800W disco 7mm ",
    stock: 5,
    price: 30000,
    img: "https://arcencohogar.vtexassets.com/arquivos/ids/326859-800-800?v=637944573201870000&width=800&height=800&aspect=true",
    category: "Herramientas"
    },
    {
    id: 6,
    name: "Mascara Fotosensible",
    description: "Lusqtoff St-mistery Automatica",
    stock: 12,
    price: 10000,
    img: "https://arcencohogar.vtexassets.com/arquivos/ids/273945-800-800?v=637651579020700000&width=800&height=800&aspect=true",
    category: "Seguridad"
    },
    {
    id: 7,
    name: "Juego de llaves tubo",
    description: "1/2 pulgada 13 piezas marca Bremen",
    stock: 10,
    price: 29000,
    img: "https://arcencohogar.vtexassets.com/arquivos/ids/325140-800-800?v=637926405828400000&width=800&height=800&aspect=true",
    category: "Herramientas"
    },
    {
    id: 8,
    name: "Cadena de seguridad",
    description: "Acero Cementado 3/8 X 1 M Bulit + Candado 72mm",
    stock: 8,
    price: 31000,
    img: "https://arcencohogar.vtexassets.com/arquivos/ids/314999-800-800?v=637807934633430000&width=800&height=800&aspect=true",
    category: "Seguridad"
    },
    {
    id: 9,
    name: "Cartucho Gas Butano",
    description: "Pack X 4 u.Descartable 227gr p/ anafe tipo camping",
    stock: 42,
    price: 4000,
    img: "https://arcencohogar.vtexassets.com/arquivos/ids/273527-800-800?v=637651576418400000&width=800&height=800&aspect=true",
    category: "Seguridad"
    },
    {
    id: 10,
    name: "Barbijo",
    description: "Respirador Mascarilla N95 3m X 5 Unidades",
    stock: 130,
    price: 3500,
    img: "https://arcencohogar.vtexassets.com/arquivos/ids/340727-800-800?v=638091342331400000&width=800&height=800&aspect=true",
    category: "Seguridad"
    },
    {
    id: 11,
    name: "Lámpara",
    description: "Osram Led 11W equivalente a 75W luz cálida",
    stock: 200,
    price: 350,
    img: " https://http2.mlstatic.com/D_NQ_NP_2X_738284-MLA42089185025_062020-F.webp",
    category: "Electricidad"
    },
    {
    id: 12,
    name: "Cable",
    description: "Unipolar Marrón 2,5mm normalizado precio x metro",
    stock: 400,
    price: 180,
    img: "https://arcencohogar.vtexassets.com/arquivos/ids/279360-800-800?v=637651614147870000&width=800&height=800&aspect=true",
    category: "Electricidad"
    },
    {
    id: 13,
    name: "Cable",
    description: "Unipolar Celeste 2,5mm normalizado precio x metro",
    stock: 400,
    price: 180,
    img: "https://arcencohogar.vtexassets.com/arquivos/ids/279359-800-800?v=637651614143630000&width=800&height=800&aspect=true",
    category: "Electricidad"
    },
    {
    id: 14,
    name: "Llave embutir 2 tomas",
    description: "Marca Jeluz modelo Mito",
    stock: 20,
    price: 800,
    img: "https://arcencohogar.vtexassets.com/arquivos/ids/287781-800-800?v=637651664507900000&width=800&height=800&aspect=true",
    category: "Electricidad"
    },
    {
    id: 15,
    name: "Lámpara",
    description: "Osram Led 11W equivalente a 75W luz fría",
    stock: 450,
    price: 350,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_643268-MLU69294788555_052023-F.webp",
    category: "Electricidad"
    },
    {
    id: 16,
    name: "Flexible",
    description: "Mallado 1/2 x 40cm",
    stock: 25,
    price: 1000,
    img: "https://arcencohogar.vtexassets.com/arquivos/ids/325854-800-800?v=637933085095100000&width=800&height=800&aspect=true",
    category: "Sanitarios"
    },
    {
    id: 17,
    name: "Flexible",
    description: "Cobre 1/2 x 40cm",
    stock: 12,
    price: 2400,
    img: "https://arcencohogar.vtexassets.com/arquivos/ids/326325-800-800?v=637940968410030000&width=800&height=800&aspect=true",
    category: "Sanitarios"
    },
    {
    id: 18,
    name: "Sopapa",
    description: "plástica 1 1/2 pulgadas sujeción a presión",
    stock: 40,
    price: 450,
    img: "https://arcencohogar.vtexassets.com/arquivos/ids/284842-800-800?v=637651648826570000&width=800&height=800&aspect=true",
    category: "Sanitarios"
    },
    {
    id: 19,
    name: "Valvula",
    description: "con cuerito de goma 1/2''",
    stock: 200,
    price: 200,
    img: "https://arcencohogar.vtexassets.com/arquivos/ids/347942-800-800?v=638149327549700000&width=800&height=800&aspect=true",
    category: "Sanitarios"
    },
    {
    id: 20,
    name: "Tornillos para inodoro",
    description: "plásticos, para tapa de madera, modelo universal",
    stock: 100,
    price: 550,
    img: "https://arcencohogar.vtexassets.com/arquivos/ids/322670-800-800?v=637877945319330000&width=800&height=800&aspect=true",
    category: "Sanitarios"
    }    
]

export function getProductData(idUrl) {
    return new Promise ((resolve, reject) => {
        
        const productRequested = products.find ((product) => product.id===parseInt(idUrl))

        setTimeout( () => {
            resolve(productRequested)
        }, 1000)
    });
}

export function getCategoryData(categoryUrl) {
    return new Promise ((resolve, reject) => {
        
        const categoryRequested = products.filter ((category) => category.category.toLowerCase()===categoryUrl.toLowerCase())

        setTimeout( () => {
            resolve(categoryRequested)
        }, 1000)
    });
}

export function getData() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(products)
        }, 1000)
    })
}


