API REST implementando SailsJS.

Para correr el proyecto, ejecutar en consola "sails lift".

El servidor correr en el puerto 1337.

Endpoints Productos

GET: /products => Lista todos los productos.

GET: /products/:id_product => Lista producto por id.

POST: /products/ => Crea un producto nuevo (enviar objeto con Postman).

PUT: /products/:id_product => Actualiza producto por id (enviar objeto con Postman).

DELETE: /products/:id_product => Borra producto por id.

Endpoints Carritos

GET: /carts => Lista todos los carritos.

GET: /carts/:id_cart => Lista carrito por id.

POST: /carts/ => Crea un carrito nuevo (enviar objeto con Postman: array con ids de productos o array vacío).

POST: /carts/agregar/:id_cart/:id_product => Agrega el producto id_product al carrito id_cart.

POST: /carts/quitar/:id_cart/:id_product => Borra el producto id_product al carrito id_cart.

DELETE: /carts/:id_cart => Borra carrito por id.
