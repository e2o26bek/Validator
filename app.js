let words = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let c;
let word = 0;
let number = 0;
let result;
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
function check(a) {
    c = words.join("").toLowerCase().split("");
    for (let i = 0; i < a.length; i++) {
        if (c.includes(a[i])) {
            word++;
        }
        if (nums.includes(Number(a[i]))) {
            number++;
        }
    }
    if (c.length >= 8 && number >= 1 && word >= 1) {
        result = "parol tasdiqlandi";
    } else {
        result = "parol zaif";
    }
    return result;
}
console.log(check("ezozbek123"));