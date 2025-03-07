// Ekran elemanını seç
const display = document.getElementById('display');

// Ekrana sayı ekleme
function appendNumber(number) {
    display.value += number;
}

// Ekrana operatör ekleme
function appendOperator(operator) {
    // Eğer ekran boşsa veya son karakter zaten bir operatörse, yeni operatör ekleme
    if (display.value === '' || isNaN(display.value.slice(-1))) {
        return;
    }
    display.value += operator;
}

// Hesaplamayı gerçekleştirme
function calculateResult() {
    try {
        // Eval kullanarak sonucu hesapla
        display.value = eval(display.value);
    } catch (error) {
        // Hatalı bir ifade varsa ekrana "Error" yaz
        display.value = 'Error';
    }
}

// Ekranı temizleme
function clearDisplay() {
    display.value = '';
}
