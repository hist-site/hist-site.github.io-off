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
      case 1: return"Понеділок";
      case 2: return"Вівторок";
      case 3: return"Середа";
      case 4: return"Четвер";
      case 5: return"П'ятниця";
      case 6: return"Субота";
      case 7: return"Неділя";
      default: return "Вихідні, іди гуляй дурачок";
    }
  }

const renderDayBook = () => {

  const monday = `<tr><td class="lesson">1.</td><td>Фізика</td></tr>
		     		<tr><td class="lesson">2.</td><td>Хімія</td></tr>
		     		<tr><td class="lesson">3.</td><td>Історія У.</td></tr>
		     		<tr><td class="lesson">4.</td><td>Зарубіжна</td></tr>
		     		<tr><td class="lesson">5.</td><td>Алгебра</td></tr>
		     		<tr><td class="lesson">6.</td><td>Англ-мова</td></tr>
		     		<tr><td class="lesson">7.</td><td>Укр-літ</td></tr>`;

  const tuesday = `<tr><td class="lesson">1.</td><td>З.У.</td></tr>
					<tr><td class="lesson">2.</td><td>Фіз-ра</td></tr>
					<tr><td class="lesson">3.</td><td>Фізика</td></tr>
					<tr><td class="lesson">4.</td><td>Труди</td></tr>
			 		<tr><td class="lesson">5.</td><td>Всесвітня</td></tr>
		     		<tr><td class="lesson">6.</td><td>Укр-мова</td></tr>
		     		<tr><td class="lesson">7.</td><td>Укр-літ</td></tr>`;

  const wednesday = `tr><td class="lesson">1.</td><td>Інформатика</td></tr>
			    	<tr><td class="lesson">2.</td><td>З.У.</td></tr>
			  		<tr><td class="lesson">3.</td><td>Фіз-ра</td></tr>
		    		<tr><td class="lesson">4.</td><td>Укр-мова</td></tr>
		     		<tr><td class="lesson">5.</td><td>Фізика</td></tr>
		     		<tr><td class="lesson">6.</td><td>Біологія</td></tr>
		    		<tr><td class="lesson">7.</td><td>Біологія</td></tr>`;

  const thursday = `<tr><td class="lesson">1.</td><td>Фіз-ра</td></tr>
		 			<tr><td class="lesson">2.</td><td>Укр-мова</td></tr>
					<tr><td class="lesson">3.</td><td>Укр-літ</td></tr>
					<tr><td class="lesson">4.</td><td>Географія</td></tr>
					<tr><td class="lesson">5.</td><td>Алгебра</td></tr>
					<tr><td class="lesson">6.</td><td>Геометрія</td></tr>`;

  const friday = `<tr><td class="lesson">1.</td><td>Англ-мова</td></tr>
			 		<tr><td class="lesson">2.</td><td>Фізика</td></tr>
		     		<tr><td class="lesson">3.</td><td>Нім-мова</td></tr>
		     		<tr><td class="lesson">4.</td><td>Хімія</td></tr>
		     		<tr><td class="lesson">5.</td><td>Укр-мова</td></tr>
		     		<tr><td class="lesson">6.</td><td>Укр-літ</td></tr>
		     		<tr><td class="lesson">7.</td><td>Інформатика</td></tr>`;

  document.querySelector(".date h1").innerHTML = days(date.getDay());
  const table = document.querySelector("tbody");

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

};
renderDayBook();

// document.querySelector(".prev").addEventListener("click", () => {
//   days();
//   renderDayBook();
//   console.log(date);
// });

// document.querySelector(".next").addEventListener("click", () => {
//   date = new Date(date.getFullYear(), date.getMonth(), date.getDate()+( 0 + date.getDay()));
//   renderDayBook();
//   console.log(date);
// });