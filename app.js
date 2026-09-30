// Завдання 1
function ucFirst(word) {
    //return String(word).charAt(0).toUpperCase() + String(word).slice(1);
    return word[0].toUpperCase() + word.slice(1);
}

console.log(ucFirst("vasyl'"));

// Завдання 2
function checkSpam(text) {
    if(text.includes('росі') || text.includes('xxx'))
        return true;
    return false;
}
console.log(checkSpam('поїхати до росії'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('something'));

// Завдання 3
function truncate(str, maxlength){
    // визначити довжину, якщо більше за макс, обрізати до макс, додати ...
    if(str.length > maxlength)
        return str.slice(0, maxlength - 3) + '...';
    else
        return str;
}

console.log(truncate('Що я хотів би розповісти на цю тему:', 20));
console.log(truncate('Всім привіт!', 20));

// Завдання 4
function strikeStr(str) {
    // розбити рядок на слова, якщо слів більше 3, поставити відступ \n
    let words = str.split(' ');

    if (words.length <= 3)
        return str;

    let result = '';

    for (let i = 0; i < words.length; ++i) {
        result += words[i];
        if (i < words.length - 1) {
            if ((i + 1) % 3 === 0)
                result += '\n';
            else
                result += ' ';
        }
    }
    return result;
}

console.log(strikeStr('Що я хотів би розповісти на цю тему:'));
console.log(strikeStr('Всім привіт!'));