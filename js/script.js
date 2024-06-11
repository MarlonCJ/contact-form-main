

function activateRadio(id){
    document.getElementById(id).checked = 'true';
}

document.getElementById('formulario').addEventListener('submit', function(event) {
    let valid = true;

    // Check all required inputs
    const inputs = document.querySelectorAll('#formulario [required]');
    inputs.forEach(input => {
        const errorDiv = document.getElementById(input.id + '-error');
        if (input.type === 'radio') {
            // Validate radio buttons separately
            const radios = document.querySelectorAll(`[name="${input.name}"]`);
            let radioChecked = false;
            radios.forEach(radio => {
                if (radio.checked) radioChecked = true;
            });
            if (!radioChecked) {
                errorDiv.textContent = 'Este campo es obligatorio';
                errorDiv.style.display = 'block';
                valid = false;
            } else {
                errorDiv.textContent = '';
                errorDiv.style.display = 'none';
            }
        } else if (input.type === 'checkbox') {
            // Validate checkbox separately
            if (!input.checked) {
                errorDiv.textContent = 'Este campo es obligatorio';
                errorDiv.style.display = 'block';
                valid = false;
            } else {
                errorDiv.textContent = '';
                errorDiv.style.display = 'none';
            }
        } else {
            if (!input.validity.valid) {
                errorDiv.textContent = 'Este campo es obligatorio';
                errorDiv.style.display = 'block';
                valid = false;
            } else {
                errorDiv.textContent = '';
                errorDiv.style.display = 'none';
            }
        }
    });

    // Prevent form submission if not valid
    if (!valid) {
        event.preventDefault();
    }
});
