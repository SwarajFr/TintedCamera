let capture;
let colorPicker;

function setup() {
  describe('Video capture displayed on the left side of the screen with zoom out effect and a color picker on the right.');
  createCanvas(windowWidth, windowHeight);
  
  capture = createCapture(VIDEO);

  let videoWidth = windowWidth / 3;
  let videoHeight = windowHeight * (videoWidth / (windowWidth / 2));

  capture.size(videoWidth, videoHeight);

  capture.hide();
  
  colorPicker = createColorPicker('#ffffff');
  colorPicker.position(windowWidth - 900, (windowHeight - 30) / 2);
}

function draw() {
  background(0)
  tint(colorPicker.color());
  image(capture, 0, (windowHeight - capture.height) / 2);
}
