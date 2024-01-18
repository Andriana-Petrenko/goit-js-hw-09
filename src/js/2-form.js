
const key = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', () => {
    const emailInput = form.elements.email.value.trim();
    const messageInput = form.elements.message.value.trim();
    const data = { email: emailInput, message: messageInput };
    safeToLocalStorage(key, data);
});

function safeToLocalStorage(key, data){
   const jsonData = JSON.stringify(data);
   localStorage.setItem(key, jsonData); 
};

function loadFromLocalStorage(key) { 
    const data = localStorage.getItem(key);
    try {
        const result = JSON.parse(data);
        return result;
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


form.addEventListener('submit', (e) => {
 e.preventDefault();
    const { email, message } = loadFromLocalStorage(key) ||{};
    if (email != null || message != null) {
        localStorage.removeItem(key);
        console.log({ email, message });
        form.reset();
    }
 })