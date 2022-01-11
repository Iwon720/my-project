// const displaySync = (data) => {
//     console.log(data);
// }
 
// console.log("Начало работы программы");
 
// displaySync("Обработка данных...");
 
// console.log("Завершение работы программы");

const display = (data, callback) => {
 
    // с помощью случайного числа определяем ошибку
    var randInt = Math.random() * (10 - 1) + 1;
    var err = randInt>5? new Error("Ошибка выполнения. randInt больше 5"): null;
     
    setTimeout(function(){
        callback(err, data);
    }, 0);
}
 
console.log("Начало работы программы");
 
display("Обработка данных...", (err, data) => {
 
    if(err) throw err;
    console.log(data);
});
 
console.log("Завершение работы программы");