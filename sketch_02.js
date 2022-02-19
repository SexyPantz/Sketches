const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle =  "#36AF0F";
    context.fillRect(0, 0, width, height);


    context.fillStyle = 'black';


    //teset teste tesw
    const myHeight = height * 0.30;
    const myWidth = width * 0.30;

    const x = width * 0.5;
    const y = height * 0.5;


    
    context.translate(540, 540);
    //context.translate(-100, -100);
    //context.rotate(0.25)


    context.beginPath();
    //context.rect(-myWidth*0.5, -myWidth*0.5, myWidth, myHeight);
    context.rect(0, 0, myWidth, myHeight);
    context.fill();

  };
};

canvasSketch(sketch, settings);
