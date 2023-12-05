//DESAFIO 2:
// Clase de manejo de archivos con JavaScript.
// Sumar al desafío 1 los métodos: updateProduct y deleteProduct.

const fs = require("fs");

// const fileJSON = JSON.parse(file);
// console.log(fileJSON);

class ProductManager {
    id = 1;
   
    //ARCHIVO JSON
    readFile() {
        const file = fs.readFileSync("./data.json", "utf-8");
        const fileParse = JSON.parse(file, "utf-8");
        return fileParse;
    }

    //MODIFICAR ARCHIVO JSON
    writeFile(newData) {
        const dataStringify = JSON.stringify(newData);
        fs.writeFileSync("./data.json", dataStringify);
    }

  //RETORNAR EL ARRAY DE PRODUCTOS.
  getProducts() {
    return this.readFile();
  }
  
  //CLASE CON 6 PROPIEDADES + AGREGAR PRODUCTOS.
    addProduct(title, description, price, thumbnail, code, stock) {
        const allProducts = this.readFile();
        
      //VERIFICAR QUE EL CÓDIGO NO EXISTA.
      const sameCode = allProducts.find((x) => x.code === code);
      if (sameCode) {
        return console.log(`ERROR: The code ${code} already exist. Try again.`);
      }

      const otherProduct = {
        id: this.id++,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };

        allProducts.push(otherProduct);
        this.writeFile(allProducts);
    }

  //BUSCAR PRODUCTOS BY ID.
  getProductById(idProduct) {
    const findProduct = this.readFile().find((x) => x.id === idProduct);
    if (!findProduct) {
      return `ID ${idProduct} Not found.`;
    } else {
      return findProduct;
    }
  }


  updateProduct(idProduct, key, newValue) {
    const findProduct = this.readFile().find((x) => x.id === idProduct);
    if (findProduct(key, newValue)) {
      const upPro = this.readFile().map(function (obj) {
        var f = {};
        f[obj.key] = obj.newValue;
        return f;
      });
      }
      
        allProducts.push(otherProduct);
        this.writeFile(allProducts);
  }

  //BORRAR PRODUCTOS BY ID
  deleteProduct(idProduct) {
    const byeProduct = this.readFile().filter((x) => x.id !== idProduct);
    return `ID ${idProduct} has been deleted.`;
  }
}

//NUEVA CLASE
const products = new ProductManager();

//AGREGAR PRODUCTOS
products.addProduct("holi", "que", 500, "tal", 4554, 25);
products.addProduct("todo", "muy", 123, "bien", 3778, 44);
products.addProduct("todo", "muy", 123, "bien", 4554, 44); //EJEMPLO ERROR CÓDIGO YA EXISTENTE.

//TRAER PRODUCTOS
console.log(products.getProducts());

//TRAER PRODUCTOS BY ID
console.log(products.getProductById(5)); //EJEMPLO NOT FOUND
console.log(products.getProductById(2));

//ACTUALIZAR PRODUCTOS BY ID
console.log(products.updateProduct(1, price, 800));
console.log(products.getProducts());

//BORRAR PRODUCTOS BY ID
console.log(products.deleteProduct(1));
console.log(products.getProducts());