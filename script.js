document.addEventListener("mousemove", (e) => {
  let xShift = (e.clientX / window.innerWidth) * 20 - 10;
  let yShift = (e.clientY / window.innerHeight) * 20 - 10;
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot) => {
    dot.style.top = `${yShift + 20}px`;
    dot.style.left = `${xShift + 20}px`;
  });
});
