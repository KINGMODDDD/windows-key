document.getElementById('auth-form').addEventListener('submit', function(e) {
e.preventDefault();

const username = document.getElementById('username').value;
const password = document.getElementById('password').value;

if (username === 'Teke_Love' && password === '12345678') {
document.querySelector('.intro').style.display = 'none';
document.getElementById('key-container').style.display = 'block';
} else {
alert('Неправильное имя пользователя или пароль!');
}
});

const keys = {
windows10: ['ABCD1-EFGH2-IJKL3-MNOP4-QRST5', 'WXYZ1-UVWX2-YZAB3-CDEF4-GHIJ5'],
windows11: ['JKLM1-NOPQ2-RSTU3-VWXY4-ZABC5', 'DEFG1-HIJK2-LMNO3-PQRS4-TUVW5'],
windows7: ['QRST1-UVWX2-YZAB3-CDEF4-GHIJ5', 'ABCD1-EFGH2-IJKL3-MNOP4-QRST5'],
windows8: ['WXYZ1-UVWX2-YZAB3-CDEF4-GHIJ5', 'JKLM1-NOPQ2-RSTU3-VWXY4-ZABC5']
};

function showKeys(type) {
const keysList = document.getElementById('keys-list');
const keyType = document.getElementById('key-type');

keyType.innerText = type.replace('windows', 'Windows ');
keysList.innerHTML = '';

keys[type].forEach(key => {
const li = document.createElement('li');
li.className = 'key-item';
li.innerHTML = `
<span>${key}</span>
<button onclick="purchaseKey('${key}')">Купить</button>
`;
keysList.appendChild(li);
});

document.getElementById('keys-section').style.display = 'block';
}

function purchaseKey(key) {
alert(`Оплата успешно прошла! Ваш ключ: ${key}`);
}
Файл не выбран
Ещё



