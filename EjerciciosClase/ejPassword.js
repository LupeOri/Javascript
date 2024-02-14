const passwordInput = document.querySelector('#password');
const passwordRequirements = document.querySelector('#passwordRequirements');
const charRequirement = document.querySelector('#charRequirement');
const numberRequirement = document.querySelector('#numberRequirement');
const specialCharacterRequirement = document.querySelector('#specialCharacterRequirement');

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;

    charRequirement.textContent = /[a-zA-Z]/.test(password) ? '☑' : '☐';

    numberRequirement.textContent = /\d/.test(password) ? '☑' : '☐';

    specialCharacterRequirement.textContent = /[@]/.test(password) ? '☑' : '☐';
});

passwordInput.addEventListener('focus', () => {
    passwordRequirements.classList.remove('hidden');
});

passwordInput.addEventListener('blur', () => {
    passwordRequirements.classList.add('hidden');
});