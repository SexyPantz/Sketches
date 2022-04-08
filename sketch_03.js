const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random')

const settings = {
  dimensions: [ 1080, 1080 ]

};

const sketch = ({ context, width, height }) => {

  const myAgentsPink = []
  const myAgentsBlue = []
  let num = random.range(2, 1080);

  for (let i = 0; i < num; i++){
      let nX = random.range(1, width)
      let nY = random.range(1, height)

      myAgentsPink.push(new Agent(nX,nY));
    }
  num = random.range(2, 1080);
  for (let i = 0; i < num; i++){
      let nX = random.range(1, width)
      let nY = random.range(1, height)

      myAgentsBlue.push(new Agent(nX,nY));
    }

  return ({ context, width, height }) => {
    context.fillStyle = 'lightblue';
    context.fillRect(0, 0, width, height);

   // myAgentsPink.forEach(agent => {agent.drawP(context)});
    myAgentsBlue.forEach(agent => {agent.drawB(context)});
    //const agentA = new Agent(800, 400);
    //const agentB = new Agent(300, 700);
   

   // agentA.draw(context);
   // agentB.draw(context);    
  };
};

canvasSketch(sketch, settings);

class Vector {
    constructor(x, y){
      this.x = x;
      this.y = y;
  }
}


class Agent {
    constructor(x, y){
      this.pos = new Vector(x, y);
      this.velocity = new Vector()
      this.y = y;
      this.radius  = random.range(4,12);
    }

    drawB(context){


    //context.strokeStyle='darkblue';

    context.save();
    context.translate(this.pos.x, this.pos.y);
    context.lineWidth = 4;
    context.beginPath();
    context.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI*2);
    context.fill();
    context.strokeStyle = 'black'
    context.stroke();
    context.restore();
    
    }

    drawP(context){
    context.strokeStyle ='pink';
    context.beginPath();
    context.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI*2);
    context.fill();

    }
}