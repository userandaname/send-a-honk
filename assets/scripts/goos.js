const fortunes = [
  "Steer clear of shiny things. They belong to the goos now.",
  "A goos watches over you...and he's judging.",
  "Honk at the world, and it will honk back.",
  "Beware: goos does not forget betrayal.",
  "You will find success...unless goos.exe takes it first.",
  "Honk honk honk, the goos is near your door.",
  "The goos is always watching. Always.",
  "The goos is a friend to all...except you.",
  "Goos is love. Goos is life.",
  "The goos...is coming for you.",
  "You will find happiness in the arms of the goos.",
  "Goos is the answer to all of your problems.",
  "Goos is oily as he is wise.",
  "Did you know..Sokora means 'everywhere' in Japanese?"
];

const honkButton = document.getElementById("honkButton");
const predictionArea = document.getElementById("predictionArea");
const goosImage = document.getElementById("goosImage");
const predictionText = document.getElementById("predictionText");
const loadingText = document.getElementById("loadingText");
const loadingDots = document.getElementById("loadingDots");
const honkSound = document.getElementById("honkSound");

honkButton.addEventListener("click", () => {
  const userQuestion = document.getElementById("userQuestion").value.trim();

  if (!userQuestion) {
    alert("Are you retarded? Ask a question first.");
    return;
  }

  predictionText.textContent = "";
  predictionArea.style.display = "block";
  loadingText.style.display = "block";
  let dotCount = 0;

  const dotInterval = setInterval(() => {
    loadingDots.textContent = ".".repeat(dotCount);
    dotCount = (dotCount + 1) % 4;
  }, 500);

  setTimeout(() => {
    clearInterval(dotInterval);
    loadingText.style.display = "none";

    const prediction = fortunes[Math.floor(Math.random() * fortunes.length)];
    predictionText.textContent = prediction;

    honkSound.play();
  }, Math.random() * 4000 + 1000);
});
