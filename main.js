const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Sptiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const weekdays = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2024, 8, 4, 20, 30, 0, 0);
const amORpm = (hour) => {
  let m = "am";
  if (hour <= 12) {
    m = "am";
  } else {
    m = "pm";
  }
  return m;
};

giveaway.innerHTML = `El aniversario es el ${
  weekdays[futureDate.getDay() - 1]
}, ${futureDate.getDate()} ${
  months[futureDate.getMonth() - 1]
} ${futureDate.getFullYear()}, ${futureDate.getHours()}:${futureDate.getMinutes()}${amORpm(
  futureDate.getHours()
)}`;

const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  const oneDey = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = t / oneDey;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDey) / oneHour);
  let minnutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  const values = [days, hours, minnutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired"> Feliz Primer Aniversario </h4>`;
  }
}

let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
