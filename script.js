const frames = document.querySelectorAll(".frame");

let isDragging = false;
let activeFrame = null;
let offsetX = 0;
let offsetY = 0;

frames.forEach((frame) => {
  const randomRotation = Math.floor(Math.random() * 21) - 10;
  const randomWidth = Math.floor(Math.random() * 100) + 200; 
  const randomHeight = Math.floor(Math.random() * 50) + 200; 

  frame.style.transform = `rotate(${randomRotation}deg)`;
  frame.style.width = `${randomWidth}px`;
  frame.style.height = `${randomHeight}px`;

  frame.addEventListener("mousedown", (e) => {
    isDragging = true;
    activeFrame = frame;

    const rect = frame.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    frame.style.cursor = "grabbing";
  });
});

document.addEventListener("mousemove", (e) => {
  if (isDragging && activeFrame) {
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;

    activeFrame.style.left = `${x}px`;
    activeFrame.style.top = `${y}px`;
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  if (activeFrame) {
    activeFrame.style.cursor = "grab";
    activeFrame = null;
  }
});
