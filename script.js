//Дано:
// let amount = 100;
// let monday = [
//   ['Write a tutorial',180],
//   ['Some web development',120]
// ];
// let tuesday = [
//   ['Keep writing that tutorial',240],
//   ['Some more web development',360],
//    ['A whole lot of nothing',240]
// ];
// Для элементов массивов monday и tuesday необходимо выполнить следующие методы:
// Сконвертировать время потраченное на выполнение задач в часы, вместо минут.
// Оставить только те задачи, на выполнение которых нужно более 2-х часов.
// Умножить результат на часовую ставку (amount) и добавить полученное значение в качестве третъего элемента в массив.
// Вывести в html таблицу, которая состоит из ячеек с задачами в виде:
// <tr>
//   <td>Task name: Write a tutorial</td>
//   <td>Taks duration: 3 hours</td>
//   <td>Task amount: $300</td>
// </tr>
// Используем только методы concat/forEach/map/filter/join (по надобности, все не нужно).

let amount = 100;
let monday = [
    ['Write a tutorial', 180],
    ['Some web development', 120]
];
let tuesday = [
    ['Keep writing that tutorial', 240],
    ['Some more web development', 360],
    ['A whole lot of nothing', 240]
];

const newMonday = monday
    .map(function (monday) {
        monday[1] = monday[1] / 60;
        return monday;
    })

    .filter(function (monday) {
        return monday[1] > 2;
    })

    .map(function (monday) {
        let checkAmount = (monday[1] * amount);
        monday.push(checkAmount);
        return monday;
    })

console.log(newMonday);



let newTuesday = tuesday
    .map(function (tuesday) {
        tuesday[1] = tuesday[1] / 60;
        return tuesday;
    }
    )
    .filter(function (tuesday) {
        return tuesday[1] > 2;
    })
    .map(function (tuesday) {
        let checkAmount = tuesday[1] * amount;
        tuesday.push(checkAmount);
        return tuesday;
    })
    .map(function (tuesday) {
        return `<tr>
        <td>Task name: ${tuesday[0]}</td>
        <td>Taks duration: ${tuesday[1]} hours</td>
        <td>Task amount: $${tuesday[2]}</td>
        </tr>`
    })


    document.write(`<table>${newTuesday.join("  ")}</table>`)
    //console.log(newTuesday);