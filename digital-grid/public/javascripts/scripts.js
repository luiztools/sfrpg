const d = document.getElementsByClassName("draggable");

for (let i = 0; i < d.length; i++) {
  d[i].style.position = "absolute";
}

function filter(e) {
  if (!e.target.classList.contains("draggable")) {
    return;
  }

  let target = e.target;
  target.moving = true;
  e.clientX
    ? ((target.oldX = e.clientX), (target.oldY = e.clientY))
    : ((target.oldX = e.touches[0].clientX),
      (target.oldY = e.touches[0].clientY));
  document.onmousemove = dr;
  document.addEventListener("touchmove", dr, { passive: false });
  function dr(event) {
    event.preventDefault();
    if (!target.moving) {
      return;
    }
    e.clientX
      ? ((target.distX = event.clientX - target.oldX),
        (target.distY = event.clientY - target.oldY),
        (target.oldX = event.clientX),
        (target.oldY = event.clientY))
      : ((target.distX = event.touches[0].clientX - target.oldX),
        (target.distY = event.touches[0].clientY - target.oldY),
        (target.oldX = event.touches[0].clientX),
        (target.oldY = event.touches[0].clientY));
    target.style.left = target.offsetLeft + target.distX + "px";
    target.style.top = target.offsetTop + target.distY + "px";
  }
  function endDrag() {
    target.moving = false;
  }
  target.onmouseup = endDrag;
  target.ontouchend = endDrag;
}
document.onmousedown = filter;
document.ontouchstart = filter;