document.addEventListener('DOMContentLoaded', function () {       /*cuando el HTML del documento ha sido completamente cargado y analizado*/
    const form = document.getElementById('productForm');         /*Obtiene el formulario del documento mediante su ID productForm y lo guarda en la variable form*/

    form.addEventListener('submit', function (event) {       /*Cuando el formulario se envía (por ejemplo, al hacer clic en un botón de envío dentro del formulario), se dispara este evento.*/
        event.preventDefault();                             /*Previene que los datos se envien a otra pagina*/

        const name = document.getElementById('name').value.trim();    /*Guarda el valor en la variable y el metodo trim() limpia espacios en blanco al principio y final de la cadena*/
        const email = document.getElementById('email').value.trim();
        const address = document.getElementById('address').value.trim();
        const city = document.getElementById('city').value.trim();
        const province = document.getElementById('province').value.trim();
        const postalCode = document.getElementById('postalCode').value.trim();
        const cellphone = document.getElementById('cellphone').value.trim();
        const product = document.getElementById('product').value.trim();

        if (name === '' || email === '' || address === '' || city === '' || province === '' || postalCode === '' || cellphone === '' || product === '') {
            document.getElementById('error-message').innerText = 'Por favor, completa todos los campos.';
        } else {
            // enviar el formulario o realizar otras acciones
            alert('Tu compra se ha realizado con éxito!');
            form.reset(); // Limpiar el formulario después de enviarlo
            document.getElementById('error-message').innerText = ''; // Limpiar mensajes de error
        }
    });
});


