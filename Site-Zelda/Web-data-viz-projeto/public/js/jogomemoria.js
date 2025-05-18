const input = document.querySelector('.input_nome');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login-form');


const validateInput = ({ target }) => {
    // target é o input. se colocar target.value ele vai mostar os valores que estão sendo colocados(no console)

    if (target.value.length > 2) {

        button.removeAttribute('disabled');
        return;
        // return finaliza, substitui o else. é uma forma simplificada dele
    }

    button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
    event.preventDefault();
    // impede que ele atualize e perca o nome, na hora que aperta o botão

    localStorage.setItem('player', input.value);
    // vai salvar as informações da pagina

    window.location = 'jogodamemoria.html';
}


input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);