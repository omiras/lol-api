# League Of Legends API

1. Obtener todos los campeones /api/v1/champions
2. Obtener los datos de un campeon dado su nombre /api/v1/:name

## Por implementar

3. Obten todos los campeones que estén etiquetados con una característica en concreta 
Ejemplo: /api/v1/champions/tag/:tag . Ejemplo, para un GET a /api/v1/champions/tag/support ; debería devolverme todos los campeones que en su propiedad 'tag' tienen un elemento en el array con el stirng 'Support', tales como Ashe o Sona.

4. Modifica el GET de /api/v1/champions para que, si le pasamos una QueryString con un parámetro de nombre __limit__; limite el número de campeones devueltos a dicho valor. 
Ejemplo:

GET /api/v1/champions?limit=10 

Solo devolverá los primeros 10 campeones


5. Crea un nuevo endpoint de tipo GET en la ruta /api/v1/champions/description/:keyword. El endpoin debe devolver todos los campeones en cuya description aparezca la 
palabra clave :keyword



## Pasos para añadir un nuevo servicio

1. Añadir la ruta en routers/championsRoutes.js
2. Añadir el controlador en controllers/championControllers.js
3. Implementar el servicio en services/championServices.js
4. Implementar el acceso al JSON en Champion.js
