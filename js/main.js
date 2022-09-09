console.log(document);

var formulario = document.querySelector('form')
var paragrafo = document.createElement('p')

formulario.addEventListener('submit', function(evento){
    evento.preventDefault()

    emailjs.sendForm("service_rxztxd2", "template_vyq8f6f", formulario).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Seu formulario foi submetido");
      },
      (error) => {
        console.log("FAILED...", error);
        alert("deu errp", error);
      }
    );


}) 
