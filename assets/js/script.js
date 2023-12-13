dayjs.extend(dayjs_plugin_duration);

function startCountdown(element, dateString) {
  const targetDate = dayjs(dateString);

  //sets the message showing after countdown based on the target date
  element.querySelector(
    ".until-event"
  ).textContent = `Until ${targetDate.format("D MMMM YYYY")}`;

  setInterval(() => {
    //setting present moment's time
    const now = dayjs();
    //finding the difference between the two dates as a number
    const duration = dayjs.duration(targetDate.diff(now));

    //when Christmas is here, stop running the timer and show a message:
    if (duration.asMilliseconds() <= 0) {
      element.querySelector(
        ".until-event"
      ).textContent = `🎁 Merry Christmas! 🎁`;
      return;
    }

    element.querySelector(".until-numeric-seconds").textContent = duration
      .seconds()
      .toString()
      .padStart(2, "0");
    element.querySelector(".until-numeric-minutes").textContent = duration
      .minutes()
      .toString()
      .padStart(2, "0");
    element.querySelector(".until-numeric-hours").textContent = duration
      .hours()
      .toString()
      .padStart(2, "0");
    element.querySelector(".until-numeric-days").textContent = duration
      .asDays()
      .toFixed(0)
      .toString()
      .padStart(2, "0");
  }, 250);
}

startCountdown(document.getElementById("my-countdown"), "2023-12-25");

//adding sound to buttons
const playBtn = document.querySelector(".song-play-button");
const pauseBtn = document.querySelector(".song-pause-button");
const christmasSong = document.createElement("audio");
christmasSong.setAttribute(
  "src",
  "./assets/sfx/toy-singing-santa-claus-is-coming-to-town.mp3"
);

playBtn.addEventListener("click", function () {
  christmasSong.play();
});

pauseBtn.addEventListener("click", function () {
  christmasSong.pause();
});
