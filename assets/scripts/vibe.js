const vibes = [
    "...and you are awesome!",
    "...have a wonderful day!",
    "...and you've got this!",
    "...and so is this puppy! 🐶",
    "...Con đường dẫn tới địa ngục được dát vàng bằng những ý tốt",
    "...hành trình vạn dặm bắt đầu từ 1 bước chân"
  ];

   // choose a random good vibe
  var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

  // display a good vibe
  document.querySelector(".vibe").append(vibe);