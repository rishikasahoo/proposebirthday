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
  var x = Math.random() * canvas.offsetWidth;
  var y = Math.random() * canvas.offsetHeight;
  var radius = Math.random() * 1.2;
  var hue = colorrange[getRandom(0, colorrange.length - 1)];
  var sat = getRandom(50, 100);
  var opacity = Math.random(); // Initialize with random opacity
  starArray.push({ x, y, radius, hue, sat, opacity });
}

var frameNumber = 0;
var opacity = 0;
var secondOpacity = 0;
var thirdOpacity = 0;

var baseFrame = context.getImageData(
  0,
  0,
  window.innerWidth,
  window.innerHeight
);

function drawStars() {
  for (var i = 0; i < stars; i++) {
    var star = starArray[i];

    context.beginPath();
    context.arc(star.x, star.y, star.radius, 0, 360);
    context.fillStyle =
      "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
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
function drawText() {
  var fontSize = Math.min(30, window.innerWidth / 25); 
  var lineHeight = fontSize * 1.5; // Increase line height for readability

  context.font = fontSize + "px Comic Sans MS";
  context.textAlign = "center";

  if (frameNumber < 300) {
      context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      context.fillText("So, I was thinking… 🌙", canvas.width / 2, canvas.height / 2);
      opacity += 0.01;
  }

  if (frameNumber >= 300 && frameNumber < 600) {
      context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      context.fillText("So, I was thinking… 🌙", canvas.width / 2, canvas.height / 2);
      opacity -= 0.01;
  }

  if (frameNumber == 600) opacity = 0;

  if (frameNumber > 600 && frameNumber < 900) {
      context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      drawTextWithLineBreaks(["Amongst all the stars and galaxies", "in this impossibly big universe..."],
          canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
      opacity += 0.01;
  }

  if (frameNumber >= 900 && frameNumber < 1200) {
      context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      context.fillText("Somehow, against all odds…", canvas.width / 2, canvas.height / 2);
      opacity -= 0.01;
  }

  if (frameNumber == 1200) opacity = 0;

  if (frameNumber > 1200 && frameNumber < 1500) {
      context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      context.fillText("I found YOU. 💫", canvas.width / 2, canvas.height / 2);
      opacity += 0.01;
  }

  if (frameNumber >= 1500 && frameNumber < 1800) {
      context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      context.fillText("And that might just be my favorite thing ever. 💛", canvas.width / 2, canvas.height / 2);
      opacity -= 0.01;
  }

  if (frameNumber == 1800) opacity = 0;

  if (frameNumber > 1800 && frameNumber < 2100) {
      context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      drawTextWithLineBreaks(["The universe is 13.8 billion years old,", "filled with infinite possibilities…"],
          canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
      opacity += 0.01;
  }

  if (frameNumber >= 2100 && frameNumber < 2400) {
      context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      drawTextWithLineBreaks(["And yet somehow, at this precise moment,", "in this exact place in time, we crossed paths."],
          canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
      opacity -= 0.01;
  }

  if (frameNumber == 2400) opacity = 0;

  if (frameNumber > 2400 && frameNumber < 2700) {
      context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      drawTextWithLineBreaks(["That’s kind of insane, isn’t it?", "Like, really, REALLY special? 🌠"],
          canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
      opacity += 0.01;
  }

  if (frameNumber >= 2700 && frameNumber < 3000) {
      context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      context.fillText("And even if this is just the beginning,", canvas.width / 2, canvas.height / 2);
      opacity -= 0.01;
  }

  if (frameNumber == 3000) opacity = 0;

  if (frameNumber > 3000 && frameNumber < 3300) {
      context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      context.fillText("I already think you're the most incredible human. ✨", canvas.width / 2, canvas.height / 2);
      opacity += 0.01;
  }

  if (frameNumber >= 3300 && frameNumber < 3600) {
      context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      drawTextWithLineBreaks(["Birthday alert for my absolute favorite! You 're the defination of good vibes only, and life's 100x better with you in it. Another trip around the sun means more slay moments, chaotic fun.", "(Shoutout to the real MVP of my life). 😉"],
          canvas.width / 2, canvas.height / 2 + lineHeight, fontSize, lineHeight);
      opacity += 0.01;
  }

  if (frameNumber >= 3600 && frameNumber < 3900) {
      context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      drawTextWithLineBreaks(
          ["It's your bday, which means the world is officially on pause to celebrate YOU. You're a 10/10, the blueprint, and my fav person to exist.", "Manifesting nothing but W's for you this year 💛"],
          canvas.width / 2, canvas.height / 2 + 2 * lineHeight, fontSize, lineHeight
      );
      opacity += 0.01;
      button.style.display = "block"; // Ensure the button appears at the right time
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
  
    // Create shooting star
    let star = document.createElement("div");
    star.classList.add("shooting-star");
    document.body.appendChild(star);
  
    setTimeout(() => {
      star.remove();
    }, 3000);
  
    // Create Happy Propose Day message
    let proposeMessage = document.createElement("div");
    proposeMessage.innerHTML = `
      <p style="color: #fff; font-size: 24px; text-align: center; font-weight: bold;">
        Happy Birthday Day Abhishek! 💛
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
    proposeMessage.style.opacity = "0";
    proposeMessage.style.transition = "opacity 2s ease-in-out";
    proposeMessage.style.zIndex = "100";
  
    document.body.appendChild(proposeMessage);
  
    // Fade in message
    setTimeout(() => {
      proposeMessage.style.opacity = "1";
    }, 500);
  
    // Make the message disappear after 5 seconds
    setTimeout(() => {
      proposeMessage.style.opacity = "0";
      setTimeout(() => {
        proposeMessage.remove();
      }, 2000);
    }, 10000);
  });
  

  function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
    lines.forEach((line, index) => {
      context.fillText(line, x, y + index * (fontSize + lineHeight));
    });
  }
  