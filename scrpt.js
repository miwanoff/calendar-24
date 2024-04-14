const week = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"];

//let d = new Date("2024-04-29"); // today
let d = new Date();
let today = d.getDate();
let month = d.getMonth();
let dayOfWeek = d.getDay();
let year = d.getFullYear();
let f = new Date(year, month + 1, 1);
//alert(f);
let last = new Date(f - 1);

let lastDate = last.getDate();
alert(lastDate);
month++;
if (month < 10) {
  month = `0${month}`;
}

let dateOfMon = dayOfWeek != 0 ? today - (dayOfWeek - 1) : today - 6;
//alert(dateOfMon);

document.write(`${today}.${month}.${year}, день тижня: ${dayOfWeek}`);



let classOfDay = "day";
document.write("<table>");
document.write("<tr>");
for (let i = 0; i < week.length; i++) {
  if (i == week.length - 1 || i == week.length - 2) {
    classOfDay = "weekend";
  }
  document.write(`<td><span class='${classOfDay}'>${week[i]}</span></td>`);
}
document.write("</tr>");
document.write("<tr>");
for (let i = 0; i < week.length; i++) {
  if (dateOfMon + i > 0) {
    document.write(`<td class='today'>${dateOfMon + i}</td>`);
  } else {
    document.write(`<td class='today'></td>`);
  }
}
document.write("</tr>");
document.write("</table>");
