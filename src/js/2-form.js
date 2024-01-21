const key = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', () => {
    const data = {
        email: form.elements.email.value.trim(),
        message: form.elements.message.value.trim(),
    };
    localStorage.setItem(key,JSON.stringify(data)); 
});

form.addEventListener('submit', (e) => {
 e.preventDefault();
    if (form.elements.email.value===''|| form.elements.message.value==='') {
        return alert('Please fill in all fields!');
    }
    const data = {
        email: form.elements.email.value.trim(),
        message: form.elements.message.value.trim(),
    };
    localStorage.removeItem(key);
    console.log(data);
    form.reset();
 })

function loadFromLocalStorage(key) { 
    const data = localStorage.getItem(key);
    try {
        return JSON.parse(data);
    } catch (error) {
        return data;
    }
};

function restoreData() {
    const {email,message} = loadFromLocalStorage(key) || {};
    form.elements.email.value=email || '';
    form.elements.message.value=message || '';
}
restoreData();