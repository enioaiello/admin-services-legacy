let erase = document.getElementById('erase');

function eraseAccount() {
    localStorage.clear();
    window.location.href = "../../index.html";
}

erase.addEventListener('click', eraseAccount);