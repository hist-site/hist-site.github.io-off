$(function(){

  $('.menu-btn-on').on('click', function(e) {
    e.preventDefault();
  $('.menu-time').toggleClass('menu-time_active');
  $('.container').toggleClass('container_active');
  });

  $('.menu-btn-off').on('click', function(e) {
    e.preventDefault();
  $('.menu-time').toggleClass('menu-time_active');
  $('.container').toggleClass('container_active');
  });
});

var date = new Date();



  let days = function (day) {
    switch (day) {
      case 0: return"Неділя";
      case 1: return"Понеділок";
      case 2: return"Вівторок";
      case 3: return"Середа";
      case 4: return"Четвер";
      case 5: return"П'ятниця";
      case 6: return"Субота";
      default: return "Х'юстон у на проблєми";
    }
  }

const renderDayBook = () => {

  const monday = `<li>Фізика</li>
		     		<li>Хімія</li>
		     		<li>Історія У.</li>
		     		<li>Зарубіжна</li>
		     		<li>Алгебра</li>
		     		<li>Англ-мова</li>
		     		<li>Укр-літ</li>`;

  const tuesday = `<li>З.У.</li>
					<li>Фіз-ра</li>
					<li>Фізика</li>
					<li>Труди</li>
			 		<li>Всесвітня</li>
		     		<li>Укр-мова</li>
		     		<li>Укр-літ</li>`;

  const wednesday = `<li>Інформатика</li>
			    	<li>З.У.</li>
			  		<li>Фіз-ра</li>
		    		<li>Укр-мова</li>
		     		<li>Фізика</li>
		     		<li>Біологія</li>
		    		<li>Біологія</li>`;

  const thursday = `<li>Фіз-ра</li>
		 			<li>Укр-мова</li>
					<li>Укр-літ</li>
					<li>Географія</li>
					<li>Алгебра</li>
					<li>Геометрія</li>`;

  const friday = `<li>Англ-мова</li>
			 		  <li>Фізика</li>
		     		<li>Нім-мова</li>
		     		<li>Хімія</li>
		     		<li>Укр-мова</li>
		     		<li>Укр-літ</li>
		     		<li>Інформатика</li>`;

  document.querySelector(".date h1").innerHTML = days(date.getDay());
  const table = document.querySelector(".tables ol");

  if (date.getDay() == 1) {
  	table.innerHTML = monday;
  }
  else if (date.getDay() == 2) {
  	table.innerHTML = tuesday;
  }
  else  if (date.getDay() == 3) {
  	table.innerHTML = wednesday;
  }
  else if (date.getDay() == 4) {
  	table.innerHTML = thursday;
  }
  else if (date.getDay() == 5) {
  	table.innerHTML = friday;
  }
  else{
    table.innerHTML = `<li style="list-style: none;font-size: 65px">Вихідні, іди гуляй дурачок</li>`;
  }

  if (date.getHours() !== date.getHours() + 1 && date.getMinutes() !== date.getMinutes() + 1) {
    document.querySelector(".time h1").innerHTML = date.getHours() + ":" + date.getMinutes();
  }
  else {
    console.log('F')
  }
};
renderDayBook();

function renderLesson() {
  if (date.getHours() == 8 && date.getMinutes() >= 0 || date.getHours() == 8 && date.getMinutes() <= 45) {
    document.querySelectorAll("ol li")[0].classList.add('lesson');
  }
  else if (date.getHours() == 8 && date.getMinutes() >= 45 || date.getHours() == 9 && date.getMinutes() <= 50) {
    document.querySelectorAll("ol li")[1].classList.add('lesson');
  }
  else if (date.getHours() == 9 && date.getMinutes() >= 50 || date.getHours() == 10 && date.getMinutes() <= 55) {
    document.querySelectorAll("ol li")[2].classList.add('lesson');
  }
  else if (date.getHours() == 10 && date.getMinutes() >= 55 || date.getHours() == 12 && date.getMinutes() <= 0) {
    document.querySelectorAll("ol li")[3].classList.add('lesson');
  }
  else if (date.getHours() == 12 && date.getMinutes() >= 0 || date.getHours() == 13 && date.getMinutes() <= 5) {
    document.querySelectorAll("ol li")[4].classList.add('lesson');
  }
  else if (date.getHours() == 13 && date.getMinutes() >= 5 || date.getHours() == 14 && date.getMinutes() <= 0) {
    document.querySelectorAll("ol li")[5].classList.add('lesson');
  }
  else if (date.getHours() == 14 && date.getMinutes() >= 0 || date.getHours() == 15 && date.getMinutes() <= 55) {
    document.querySelectorAll("ol li")[6].classList.add('lesson');
  }
  else {
    console.log('F')
  }
};
renderLesson();

var clock = document.getElementById("clock");

function Clock() {
  var time = new Date();
  var h = time.getHours().toString();
  var m = time.getMinutes().toString();

  if (h.length < 2) {
    h = '0' + h;
  }

  if (m.length < 2) {
    m = '0' + m;
  }

  var clockString = h + ":" + m;

  clock.textContent = clockString;
};
setInterval(Clock, 1000);


document.querySelector(".prev").addEventListener("click", () => {
  date = new Date(date.getFullYear(), date.getMonth(), (date.getDate()-1));
  renderDayBook();
});

document.querySelector(".next").addEventListener("click", () => {
  date = new Date(date.getFullYear(), date.getMonth(), (date.getDate()+1));
  renderDayBook();
});