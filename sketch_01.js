const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.strokeStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.lineWidth =  width * 0.01;
  
        const myheight  = height*0.1;
        const mywidth   = width*0.1;
        const gap       = width*0.03;
        const ix        = height*0.17;
        const iy        = width*0.17;
        let x, y;
        const off = width * 0.02

    for(let i = 0; i < 5; i++){
        for (let j = 0; j < 5; j++){

          x = ix + (mywidth + gap)*i
          y = iy + (myheight + gap)*j 
          


          context.beginPath();
          context.rect(x, y, mywidth, myheight);
          context.stroke();

          if (Math.random() < 0.5){
          context.beginPath();
          context.rect(x + off/2, y + off/2, mywidth- off, myheight-off);
          context.stroke();
        }
      }
    }
  };
};

canvasSketch(sketch, settings);
