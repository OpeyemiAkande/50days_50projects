const sounds = [
  "all-i-need",
  "ancient",
  "elshaddai",
  "arugbo-ojo",
  "all-by-yourself",
  "oghene-do",
];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSongs();

    document.getElementById(sound).play();
  });
  document.getElementById("buttons").appendChild(btn);
});

const stopSongs = function () {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  });
};
