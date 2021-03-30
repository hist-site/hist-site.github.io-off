const date = new Date(2021,1,2,0);

const renderCalendar = () => {

  const monthDays = document.querySelector(".days");

  const days = [
    	"Понеділок",
    	"Вівторок",
   		"Середа",
    	"Четвер",
    	"П'ятниця",
    	"Субота",
    	"Неділя",
  ];

  document.querySelector(".date h1").innerHTML = days[date.getDay()];

};

document.querySelector(".prev").addEventListener("click", () => {
  date.setDate(date.getDay() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setDate(date.getDay() + 1);
  renderCalendar();
});
renderCalendar();