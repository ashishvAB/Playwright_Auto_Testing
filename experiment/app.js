// Get the canvas element and context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Array to hold the rectangles
let rectangles = [];
let selectedRectangle = null;  // To keep track of the rectangle being dragged
let offsetX = 0;  // To store the offset for drag
let offsetY = 0;  // To store the offset for drag

// Rectangle class to hold the properties of each rectangle
class Rectangle {
  constructor(x, y, width, height, fillColor = 'red') {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.fillColor = fillColor;
  }

  // Method to draw the rectangle
  draw() {
    ctx.fillStyle = this.fillColor;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  // Method to check if a point is inside the rectangle (for future delete/update)
  isPointInside(x, y) {
    return x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height;
  }
}

// Function to create a rectangle
function createRectangle() {
  const newRectangle = new Rectangle(50, 50, 100, 75, 'blue'); // Example rectangle
  rectangles.push(newRectangle);
  drawAllRectangles();
}

// Function to update an existing rectangle
function updateRectangle() {
  if (rectangles.length === 0) {
    alert('No rectangles to update');
    return;
  }

  // Update the first rectangle as an example (you can modify this for specific rectangles)
  const rectangleToUpdate = rectangles[0];  // Select the first rectangle for simplicity
  rectangleToUpdate.x += 20;  // Move the rectangle to the right
  rectangleToUpdate.y += 20;  // Move the rectangle down
  rectangleToUpdate.fillColor = 'green';  // Change the color to green

  drawAllRectangles();
}

// Function to delete a rectangle
function deleteRectangle() {
  if (rectangles.length === 0) {
    alert('No rectangles to delete');
    return;
  }

  // Delete the first rectangle (modify logic for specific rectangles)
  rectangles.pop();  // Removes the last rectangle in the array

  drawAllRectangles();
}

// Function to clear the canvas
function clearCanvas() {
  rectangles = [];
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Function to draw all rectangles on the canvas
function drawAllRectangles() {
  // Clear the canvas first
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Loop through all rectangles and draw them
  rectangles.forEach(rectangle => rectangle.draw());
}

// Function to handle mouse down event (start dragging)
canvas.addEventListener('mousedown', (e) => {
  const mouseX = e.offsetX;
  const mouseY = e.offsetY;

  // Check if any rectangle was clicked
  selectedRectangle = null;  // Reset selected rectangle
  for (let rect of rectangles) {
    if (rect.isPointInside(mouseX, mouseY)) {
      selectedRectangle = rect;
      offsetX = mouseX - rect.x;
      offsetY = mouseY - rect.y;
      break;
    }
  }
});

// Function to handle mouse move event (dragging)
canvas.addEventListener('mousemove', (e) => {
  if (selectedRectangle) {
    // Calculate the new position of the rectangle while dragging
    const mouseX = e.offsetX;
    const mouseY = e.offsetY;

    selectedRectangle.x = mouseX - offsetX;
    selectedRectangle.y = mouseY - offsetY;

    // Redraw all rectangles including the dragged one
    drawAllRectangles();
  }
});

// Function to handle mouse up event (stop dragging)
canvas.addEventListener('mouseup', () => {
  selectedRectangle = null;  // Deselect the rectangle when the mouse button is released
});

// Function to handle mouse out event (stop dragging if the mouse leaves the canvas)
canvas.addEventListener('mouseout', () => {
  selectedRectangle = null;
  drawAllRectangles();
});
