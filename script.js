var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
var stars = 500;
var colorrange = [0, 60, 240];
var starArray = [];

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (var i = 0; i < stars; i++) {
  var x = Math.random() * canvas.width;
  var y = Math.random() * canvas.height;
  var radius = Math.random() * 1.2;
  var hue = colorrange[getRandom(0, colorrange.length - 1)];
  var sat = getRandom(50, 100);
  var opacity = Math.random();
  starArray.push({ x, y, radius, hue, sat, opacity });
}

var frameNumber = 0;
var opacity = 0;

var baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);

function drawStars() {
  for (var i = 0; i < stars; i++) {
    var star = starArray[i];
    context.beginPath();
    context.arc(star.x, star.y, star.radius, 0, 360);
    context.fillStyle = `hsla(${star.hue}, ${star.sat}%, 88%, ${star.opacity})`;
    context.fill();
  }
}

function updateStars() {
  for (var i = 0; i < stars; i++) {
    if (Math.random() > 0.99) {
      starArray[i].opacity = Math.random();
    }
  }
}

function drawTextWithLineBreaks(textArray, x, y, fontSize, lineHeight) {
  var maxWidth = canvas.width * 0.8; 
  context.textAlign = "center";
  context.font = `${fontSize}px Comic Sans MS`;
  context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

  textArray.forEach((line, index) => {
    let words = line.split(" ");
    let lineText = "";
    let lines = [];
    
    words.forEach((word) => {
      let testLine = lineText + word + " ";
      if (context.measureText(testLine).width > maxWidth) {
        lines.push(lineText);
        lineText = word + " ";
      } else {
        lineText = testLine;
      }
    });

    lines.push(lineText);

    lines.forEach((l, i) => {
      context.fillText(l, x, y + (index + i) * lineHeight);
    });
  });
}

function drawText() {
  var fontSize = Math.min(30, window.innerWidth / 25); 
  var lineHeight = fontSize * 1.5;

  if (frameNumber < 300) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText("So, I was thinking… 🌙", canvas.width / 2, canvas.height / 3);
    opacity += 0.01;
  }

  if (frameNumber >= 300 && frameNumber < 600) {
    opacity -= 0.01;
  }

  if (frameNumber == 600) opacity = 0;

  if (frameNumber > 600 && frameNumber < 900) {
    drawTextWithLineBreaks(["Amongst all the stars and galaxies,", "in this impossibly big universe..."], canvas.width / 2, canvas.height / 3, fontSize, lineHeight);
    opacity += 0.01;
  }

  if (frameNumber >= 900 && frameNumber < 1200) {
    opacity -= 0.01;
  }

  if (frameNumber == 1200) opacity = 0;

  if (frameNumber > 1800 && frameNumber < 2100) {
    drawTextWithLineBreaks(["The universe is 13.8 billion years old,", "filled with infinite possibilities…"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
    opacity += 0.01;
  }

  if (frameNumber >= 2100 && frameNumber < 2400) {
    opacity -= 0.01;
  }

  if (frameNumber == 2400) opacity = 0;

  if (frameNumber > 3300 && frameNumber < 3600) {
    drawTextWithLineBreaks(["Birthday alert for my absolute favorite!", "You're the definition of good vibes only.", "Life's 100x better with you in it!"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
    opacity += 0.01;
  }

  if (frameNumber >= 3600 && frameNumber < 3900) {
    drawTextWithLineBreaks(
      ["It's your birthday, which means the world", "is officially on pause to celebrate YOU.", "You're a 10/10, the blueprint, my fav person to exist."],
      canvas.width / 2, canvas.height / 2 + 2 * lineHeight, fontSize, lineHeight
    );
    opacity += 0.01;
  }
}

function draw() {
  context.putImageData(baseFrame, 0, 0);
  drawStars();
  updateStars();
  drawText();

  if (frameNumber < 99999) {
    frameNumber++;
  }
  window.requestAnimationFrame(draw);
}

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);
});

window.requestAnimationFrame(draw);

const button = document.getElementById("HappyBirthday");

button.addEventListener("click", () => {
  button.textContent = "You just made a wish come true! 🌠";
  let star = document.createElement("div");
  star.classList.add("shooting-star");
  document.body.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 3000);

  let proposeMessage = document.createElement("div");
  proposeMessage.innerHTML = `
    <p style="color: #fff; font-size: 24px; text-align: center; font-weight: bold;">
      Happy Birthday Abhishek! 💛
    </p>
    <p style="color: #fff; font-size: 20px; text-align: center; margin-top: 10px;">
      Of all the stars in the universe, you’re the one I’d wish upon.  
      And if I get to keep making wishes, I’d keep choosing you. ✨
    </p>
  `;

  proposeMessage.style.position = "fixed";
  proposeMessage.style.top = "50%";
  proposeMessage.style.left = "50%";
  proposeMessage.style.transform = "translate(-50%, -50%)";
  proposeMessage.style.opacity = "1";
  proposeMessage.style.background = "rgba(0, 0, 0, 0.8)";
  proposeMessage.style.padding = "20px";
  proposeMessage.style.borderRadius = "10px";

  document.body.appendChild(proposeMessage);

  setTimeout(() => {
    proposeMessage.style.opacity = "0";
    setTimeout(() => proposeMessage.remove(), 500);
  }, 5000);
});
