const date = new Date();

const renderDayBook = () => {

  const Days = document.querySelector(".days");

  const days = [
    "Неділя",
    "Понеділок",
    "Вівторок",
   	"Середа",
    "Четвер",
    "П'ятниця",
    "Субота",
  ];

  const bd = [
  ];

  document.querySelector(".date h1").innerHTML = days[date.getDay()];

};

// document.querySelector(".prev").addEventListener("click", () => {
//   date.setDate(date.getDay() - 1);
//   renderDayBook();
//   console.log(date);
// });

// document.querySelector(".next").addEventListener("click", () => {
//   date.setDate(date.getDay() + 1);
//   renderDayBook();
//   console.log(date);
// });
renderDayBook();
//console.log(date);