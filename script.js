const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "รักแพรที่สุดดดด😘";
  gif.src =
    "https://media.discordapp.net/attachments/1200484038624936039/1207936060554743849/cb064582-f77a-496b-be26-c2f750fce478.gif?ex=65e1751f&is=65cf001f&hm=9f0deb6d041999f18f29d3d266ece698eb6bc86617abdee9debdd8f0c0057136&";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
