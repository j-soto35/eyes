const balls = document.getElementsByClassName("ball");

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + "%";
  const y = (event.clientY * 100) / window.innerHeight + "%";

  for (const eye in balls) {
    balls[eye].style.left = x;
    balls[eye].style.top = y;
    balls[eye].transform = "translate(-" + x + ",-" + y + ")";
  }
};
