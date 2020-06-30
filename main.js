// customElements.define('typing-indicator',
//   class extends HTMLElement {
//     constructor() {
//       super();

//       const shadowRoot = this.attachShadow({ mode: 'open' });

//       const container = document.createElement('div');
//       container.setAttribute('class', 'container');
//       const block = document.createElement('div');
//       block.setAttribute('class', 'block');
//       const dot = document.createElement('div');
//       dot.setAttribute('class', 'dot');
//       const dot2 = document.createElement('div');
//       dot2.setAttribute('class', 'dot');
//       const dot3 = document.createElement('div');
//       dot3.setAttribute('class', 'dot');
//       const style = document.createElement('style');
//       style.textContent = `
//         .block {
//           align-items: center;
//           display: flex;
//           height: 17px;
//         }

//         .container .dot {
//           background-color: #90949c;
//         }

//         .container .user-dot {
//           background-color: white;
//         }

//         .dot {
//           animation: mercuryTypingAnimation 1.5s infinite ease-in-out;
//           border-radius: 2px;
//           display: inline-block;
//           height: 4px;
//           margin-right: 2px;
//           width: 4px;
//         }

//         @keyframes mercuryTypingAnimation{
//           0%{
//             transform:translateY(0px)
//           }
//           28%{
//             transform:translateY(-5px)
//           }
//           44%{
//             transform:translateY(0px)
//           }
//         }

//         .dot:nth-child(1){
//           animation-delay: 200ms;
//         }
//         .dot:nth-child(2){
//           animation-delay: 300ms;
//         }
//         .dot:nth-child(3){
//           animation-delay: 400ms;
//         }
//       `;

//       shadowRoot.append(style);
//       block.append(dot);
//       block.append(dot2);
//       block.append(dot3);
//       container.append(block);
//       shadowRoot.append(container);
//     }

//     connectedCallback() {
//       const dots = this.getElementsByClassName("dot");

//       const dotClass = this.getAttribute("dotclass");

//       if (dotClass) {
//         Array.from(dots).forEach((dot) => {
//           // Do stuff here
//           dot.setAttribute('class', dotClass);
//         });
//       }
//     }
//   });


// customElements.define('chatbot-message-bot',
//   class extends HTMLElement {
//     constructor() {
//       super();
//     }

//     connectedCallback() {
//       const text = this.textContent;
//       this.textContent = null;

//       this.setAttribute('class', 'chatbot__message--bot');

//       const div = document.createElement('div');
//       const typingIndicator = document.createElement('typing-indicator');
      
//       // Initialize element with typing indicator
//       div.append(typingIndicator);
//       this.append(div);
//     }
//   });

// customElements.define('chatbot-message-user',
//   class extends HTMLElement {
//     constructor() {
//       super();
//     }

//     connectedCallback() {
//       this.textContent = null;

//       this.setAttribute('class', 'chatbot__message--user');

//       const div = document.createElement('div');
//       const typingIndicator = document.createElement('typing-indicator');
//       typingIndicator.setAttribute("dotclass", "user-dot");

//       // Initialize element with typing indicator
//       div.append(typingIndicator);
//       this.append(div);
//     }
//   });

window.addEventListener("load", () => {
  // const simulateChat = () => {
  //   const chatbox = document.getElementById("chat-container");
  //   let currSender = "bot";
  
  //   const sendMessage = () => {
  //     // clear previous messages
  //     if (chatbox.children.length > 8) {
  //       chatbox.removeChild(chatbox.firstChild);
  //     }

  //     const message = document.createElement('chatbot-message-' + currSender);
  //     const typingIndicator = document.createElement('typing-indicator');
  
  //     message.append(typingIndicator);

  //     // append message after a second or two pause
  //     setTimeout(() => {
  //       chatbox.append(message);

  //       // switch sender
  //       currSender = currSender === "user" ? "bot" : "user";
    
  //       // After a random number of seconds, replace
  //       // with text content
  //       setTimeout(() => {
  //         message.innerHTML = "&nbsp;".padEnd(
  //           Math.floor((Math.random() * 30) + 10) * 7, " &nbsp;"
  //         );
    
  //         // recursively call function to send another message
  //         sendMessage();
  //       },
  //         // generate number between 1000-3500ms
  //         Math.floor(Math.random() * 5000) + 3000
  //       );
  //     }, Math.floor(Math.random() * 2000));

  //   }
  
  //   sendMessage();
  // }

  // simulateChat();

  // animate blob
	// var radius = 8;
	// TweenMax.staggerFromTo('.blob', 4 ,{
	// 	cycle: {
	// 		attr:function(i) {
	// 			var r = i*90;
	// 			return {
	// 				transform:'rotate('+r+') translate('+radius+',0.1) rotate('+(-r)+')'
	// 			}      
	// 		}
	// 	}  
	// },{
	// 	cycle: {
	// 		attr:function(i) {
	// 			var r = i*90+360;
	// 			return {
	// 				transform:'rotate('+r+') translate('+radius+',0.1) rotate('+(-r)+')'
	// 			}      
	// 		}
	// 	},
	// 	ease:Linear.easeNone,
	// 	repeat:-1
  // });
  
  /* HAMBURGER MENU */
  // drop down menu on hamburger icon click
  const hamburgerEl = document.getElementsByClassName("navigation__hamburger")[0];
  const navListEl = document.getElementsByClassName("navigation__list")[0];
  const navLinks = document.getElementsByClassName("navigation__item--link");

  const toggleHamburger = () => {
    const isVisible = navListEl.style.display === "flex";
    if (isVisible) {
      navListEl.style.display = "none";
      document.body.style.height = "100%";
      document.body.style.overflow = "auto";
    } else {
      navListEl.style.display = "flex";
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";
    }
  }

  // toggle hamburger visibility on click
  hamburgerEl.addEventListener("click", () => {
    toggleHamburger();
  });

  // hide hamburger when a navlink is pressed
  for (const item of navLinks) {
    item.addEventListener("click", () => {
      const isVisible = navListEl.style.display === "flex";

      if (isVisible) toggleHamburger();
    });
  }
  
  // reset nav list and body styles on resize
  window.addEventListener("resize", () => {
    navListEl.style.display = "";
    document.body.style.height = "";
    document.body.style.overflow = "";
  });

  /* CIRCUIT ANIMATION */
  class Dots {
    constructor(width, height, spacing) {
        this.spacing = spacing;
        this.dots = [];
        this.alphaStep = 1 / 10;
        this.cols = Math.floor(width / spacing);
        this.rows = Math.floor(height / spacing);

        const canvas = document.createElement('canvas'),
            ctx = canvas.getContext('2d');

        canvas.width = width;
        canvas.height = height;
        this.canvas = canvas;
        this.ctx = ctx;

        this.draw();
    }
    draw() {
        const ctx = this.ctx,
            spacing = this.spacing;
            
        ctx.fillStyle = 'rgba(0,153,255,.1)';
        this.dots = Array.apply(null, Array(this.cols)).map((n, x) => {
            return Array.apply(null, Array(this.rows)).map((p, y) => {
                let dot = {
                    opacity: 0.1,
                    x: x * spacing,
                    y: y * spacing
                };

                ctx.fillRect(dot.x, dot.y, 1, 1);
                return dot;
            });
        });
    }
    ghost() {
        const ghostDots = document.createElement('canvas');
        ghostDots.width = this.canvas.width;
        ghostDots.height = this.canvas.height;

        const dotsCtx = ghostDots.getContext('2d');
        dotsCtx.fillStyle = 'rgb(0,153,255)';        
        this.dots.forEach(col => {
            col.forEach(dot => {
                dotsCtx.fillRect(dot.x, dot.y, 1, 1);
            });
        });

        return ghostDots;
    }
}

class Circuits {
    constructor(width, height, size, minLength, maxLength) {
        this.size = size;
        this.width = width;
        this.height = height;
        this.cols = ~~(width/size);
        this.rows = ~~(height/size);

        this.scene = Array.apply(null, Array(this.cols)).map( () =>  new Col(this.rows));

        this.collection = [];
        this.minLength = minLength;
        this.maxLength = maxLength;


        this.populate();
        this.draw();
    }
    draw() {
        const canvas = document.createElement('canvas'),
            ctx = canvas.getContext('2d'),
            size = this.size;

        canvas.width = this.width;
        canvas.height = this.height;

        ctx.strokeStyle = 'rgb(0,153,255)';
        ctx.lineWidth = Math.round(size/10);
        this.collection.forEach(circuit => {
            let point = [circuit.start[0], circuit.start[1]],
                path = circuit.path;

            ctx.beginPath();
            ctx.moveTo(point[0] * size + size / 2 + path[0][0] * size / 4, point[1] * size + size / 2 + path[0][1] * size / 4);
            path.forEach((dir, index) => {
                point[0] += dir[0];
                point[1] += dir[1];
                if (index === path.length - 1) {
                    ctx.lineTo(point[0] * size + size / 2 - dir[0] * size / 4, point[1] * size + size / 2 - dir[1] * size / 4);
                } else {
                    ctx.lineTo(point[0] * size + size / 2, point[1] * size + size / 2);
                }
            });
            ctx.stroke();
        });

        ctx.lineWidth = ~~(this.size/5);
        ctx.fillStyle = 'rgb(0,153,255)';
        this.collection.forEach(circuit => {
            ctx.beginPath();
            ctx.arc(circuit.start[0] * size + size / 2, circuit.start[1] * size + size / 2, size / 4, 0, 2 * Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(circuit.end[0] * size + size / 2, circuit.end[1] * size + size / 2, size / 4, 0, 2 * Math.PI, false);
            ctx.fill();
        });

        this.canvas = canvas;
    }
    populate() {
        const size = this.size;

        let start = null,
            n = 1000,
            maxLength = this.maxLength,
            minLength = this.minLength,
            length = 0,
            dir = null;
        
        while ((start = this.getStart()) && n--) {
            length = minLength + ~~(Math.random() * (maxLength - minLength));
            dir = this.getDir(start);

            this.setUsed(start[0], start[1]);
            // if we can move from this point
            if (dir[0] !== 0 || dir[1] !== 0) {
                let circuit = new Circuit(start, size),
                    moving = true,
                    path = [start[0], start[1]],
                    coords = [start[0], start[1]];
                length--;

                while (moving && length) {
                    circuit.path.push(dir);
                    circuit.coords.push([path[0], path[1]]);

                    path[0] += dir[0];
                    path[1] += dir[1];

                    // set used
                    this.setUsed(path[0], path[1]);
                    // get new dir
                    dir = this.getDir(path, dir);
                    if (dir[0] === 0 && dir[1] === 0) {
                        moving = false;
                    }
                    length--;
                }

                if (circuit.path.length >= minLength) {
                    circuit.end = path;
                    circuit.coords.push([path[0], path[1]]);

                    let speed = Math.random() * 0.5 + 0.5;

                    circuit.things.push(things.create(circuit, speed * 1));

                    if (circuit.path.length > maxLength / 3) {
                        speed = Math.random() * 0.5 + 0.5;
                        circuit.things.push(things.create(circuit, -speed, circuit.path.length * size));
                    }

                    if (circuit.path.length > maxLength / 1.5) {
                        speed = Math.random() * 0.5 + 0.5 * (Math.random() >= 0.5 ? -1 : 1);
                        circuit.things.push(things.create(circuit, speed, Math.random() * circuit.path.length * size));
                    }

                    circuit.length = circuit.path.length * size;
                    this.collection.push(circuit);
                }
            }
        }
    }
    getStart() {
        let found = false,
            col = null,
            row = null,
            free = [],
            result = false;

        const scene = this.scene;
        
        // select cols with free cell
        scene.forEach((col, index) => {
            if (col.free) {
                free.push(index);
            }
        });

        if (free.length) {
            // pick one of the col
            col = this.pickOne(free);
            
            // select the free cells in the col
            free.length = 0;
            scene[col].rows.forEach((row, index) => {
                if (row === 0) {
                    free.push(index);
                }
            });

            // pick one of the cell
            row = this.pickOne(free);

            result = [col, row];
        }
        return result;
    }
    pickOne(array) {
        return array[~~(Math.random() * array.length)];
    }
    setUsed(x, y) {
        this.scene[x].rows[y] = 1;
        this.scene[x].free--;
    }
    isAvailable(x, y) {
        const scene = this.scene;
        let result = false;
        if (typeof scene[x] !== 'undefined') {
            if (typeof scene[x].rows[y] !== 'undefined') {
                if (scene[x].rows[y] === 0) {
                    result = true;
                }
            }
        }
        return result;
    }

    // get direction
    // if a current direction is given, there is 50% chances to go in the same
    getDir(fromPoint, oldDir = null) {
        const possibleX = [],
            possibleY = [],
            result = [0, 0];

        if (oldDir && Math.random() <= 0.5) {
            if (this.isAvailable(fromPoint[0] + oldDir[0], fromPoint[1] + oldDir[1])) {
                return oldDir;
            }
        }

        // Xs
        if (this.isAvailable(fromPoint[0] - 1, fromPoint[1])) {
            possibleX.push(-1);
        }
        if (this.isAvailable(fromPoint[0] + 1, fromPoint[1])) {
            possibleX.push(1);
        }

        // Ys
        if (this.isAvailable(fromPoint[0], fromPoint[1] - 1)) {
            possibleY.push(-1);
        }
        if (this.isAvailable(fromPoint[0], fromPoint[1] + 1)) {
            possibleY.push(1);
        }

        if (possibleX.length && Math.random() < 0.5) {
            result[0] = this.pickOne(possibleX);
        } else if (possibleY.length) {
            result[1] = this.pickOne(possibleY);
        }

        return result;
    }   
}

class Col {
    constructor(rows) {
        this.rows = Array.apply(null, Array(rows)).map(() => 0);
        this.free = rows;
    }
}

class Circuit {
    constructor(start, size) {
        this.start = start;
        this.cellSize = size;
        this.path = [];
        this.end = null;
        this.things = [];
        this.length = 0;
        this.coords = [];
    }
}

class Things {
    constructor(width, height) {
        this.width = width;
        this.height = height;

        this.canvas = document.createElement('canvas');
        this.canvas.width = width;
        this.canvas.height = height;
        this.ctx = this.canvas.getContext('2d');

        this.collection = [];
    }
    create(circuit, velocity, done = 0) {
        const thing = new Thing(circuit, velocity, done);
        this.collection.push(thing)
        return thing;
    }
    update() {
        this.collection.forEach( thing => {
            thing.update();
        });
    }
    draw() {
        const ctx = this.ctx,
            radius = this.lightRadius,
            diameter = radius * 2,
            space = radius/3;

        let radial = null, 
            diffX = null,
            diffY = null;
        ctx.clearRect(0 , 0, this.width, this.height);
        this.collection.forEach(thing => {
            thing.update();
            radial = this.ghostRadial;
            diffX = diffY = radius;
            if (thing.distFromSister() <= space) {
                radial = this.ghostSuperRadial;
                diffX = radial.width/2;
                diffY = radial.height/2;
            } 
            ctx.drawImage(radial, thing.x - diffX, thing.y - diffY, radial.width, radial.height); 
        });

        ctx.save();
        ctx.globalCompositeOperation = 'destination-in';
        ctx.drawImage(this.dotsGhost, 0, 0);
        ctx.restore();

        ctx.save();
        ctx.globalCompositeOperation = 'source-over';
        ctx.fillStyle = '#afe3e9';
        this.collection.forEach(thing => {
            ctx.beginPath();
            ctx.arc(thing.x, thing.y, radius / 6, 0, 2 * Math.PI, false);
            ctx.fill();
        });
        ctx.restore();
    }
    setDotsGhost(canvas) {
        this.dotsGhost = canvas;
    }
    setLight(lightRadius) {
        this.lightRadius = lightRadius;

        this.ghostRadial = document.createElement('canvas');
        this.ghostRadial.width = lightRadius * 2;
        this.ghostRadial.height = lightRadius * 2;

        const radialCtx = this.ghostRadial.getContext('2d');
        let gradient = radialCtx.createRadialGradient(lightRadius, lightRadius, lightRadius, lightRadius, lightRadius, 0);
        gradient.addColorStop(0, "rgba(24, 129, 141, 0)");
        gradient.addColorStop(1, "rgba(24, 129, 141, .6)");

        radialCtx.fillStyle = gradient;
        radialCtx.fillRect(0, 0, lightRadius * 2, lightRadius * 2);


        // star
        this.ghostSuperRadial = document.createElement('canvas');
        const radWidth = this.ghostSuperRadial.width = lightRadius * 15;
        const radHeight = this.ghostSuperRadial.height = lightRadius * 20;

        const superRadialCtx = this.ghostSuperRadial.getContext('2d');

        //gradient = superRadialCtx.createRadialGradient(lightRadius * 1.5, lightRadius * 1.5, lightRadius * 1.5, lightRadius * 1.5, lightRadius * 1.5, 0);
        gradient = superRadialCtx.createRadialGradient(radWidth/2, radHeight/2, radWidth/2, radWidth/2, radHeight/2, 0);
        gradient.addColorStop(0, "rgba(37, 203, 223, 0)");
        gradient.addColorStop(1, "rgba(37, 203, 223,  .4)");

        superRadialCtx.fillStyle = gradient;
        //superRadialCtx.fillRect(0, 0, lightRadius * 3, lightRadius * 3);

        superRadialCtx.beginPath();
        superRadialCtx.moveTo(radWidth/2 + lightRadius/6, radHeight/2-lightRadius/3);
        superRadialCtx.lineTo(radWidth, 0);
        superRadialCtx.lineTo(radWidth/2+lightRadius/3, radHeight/2-lightRadius/6);
        superRadialCtx.lineTo(3 * radWidth/4, radHeight/2);
        superRadialCtx.lineTo(radWidth/2+lightRadius/3, radHeight/2+lightRadius/6);
        superRadialCtx.lineTo(radWidth, radHeight);
        superRadialCtx.lineTo(radWidth/2+lightRadius/6, radHeight/2+lightRadius/3);
        superRadialCtx.lineTo(radWidth/2, 3*radHeight/4);
        superRadialCtx.lineTo(radWidth/2-lightRadius/6, radHeight/2+lightRadius/3);
        superRadialCtx.lineTo(0, radHeight);
        superRadialCtx.lineTo(radWidth/2-lightRadius/3, radHeight/2+lightRadius/6);
        superRadialCtx.lineTo(radWidth/4, radHeight/2);
        superRadialCtx.lineTo(radWidth/2-lightRadius/3, radHeight/2-lightRadius/6);
        superRadialCtx.lineTo(0, 0);
        superRadialCtx.lineTo(radWidth/2 - lightRadius/6, radHeight/2-lightRadius/3);
        superRadialCtx.lineTo(radWidth/2, radHeight/4);
        superRadialCtx.lineTo(radWidth/2 + lightRadius/6, radHeight/2-lightRadius/3);
        superRadialCtx.fill();
    }
}


class Thing {
    constructor(circuit, velocity, done = 0) {
        this.circuit = circuit;
        this.velocity = velocity;
        this.done = done;
        this.x = 0;
        this.y = 0;
        this.dots = [];
    }
    update() {
        const circuit = this.circuit,
            size = circuit.cellSize;

        let x = 0,
            y = 0;
        // update this
        const length = circuit.length,
            start = circuit.start,
            end = circuit.end,
            path = circuit.path;
        this.done += this.velocity;
        if (this.done <= 0) {
            this.done = 0;
            this.velocity = -this.velocity;
        } else if (this.done >= length) {
            this.done = length;
            this.velocity = -this.velocity;
        }

        if (this.done <= size / 2) {
            x = (start[0] * size + size / 2) + this.done * path[0][0];
            y = (start[1] * size + size / 2) + this.done * path[0][1];
        } else if (this.done > (length - size / 2)) {
            x = (end[0] * size + size / 2) - (length - this.done) * path[path.length - 1][0];
            y = (end[1] * size + size / 2) - (length - this.done) * path[path.length - 1][1];
        } else { 
          
            const index = ~~ (this.done / size),
                done = this.done - index * size,
                dir = [path[index][0], path[index][1]],
                point = circuit.coords[index];

            x = point[0] * size + size / 2 + done * dir[0];
            y = point[1] * size + size / 2 + done * dir[1];
        }
        x = ~~x;
        y = ~~y;
        this.x = x;
        this.y = y;
    }
    distFromSister() {
        const circuit = this.circuit;
        let dist = Infinity,
            tmp = null;
        circuit.things.forEach( thing => {
            if (thing !== this) {
                tmp = Math.abs(thing.done - this.done);
                if (tmp < dist) {
                    dist = tmp;
                }
            }
        });

        return dist;
    }
}


class Background {
    constructor(width, height) {
        this.width  = width;
        this.height = height;
    }
    getBackground() {
        const canvas = document.createElement('canvas'),
            ctx = canvas.getContext('2d');

        canvas.width = this.width;
        canvas.height = this.height;

        ctx.fillStyle = 'rgba(0,0,0,0)';
        ctx.fillRect(0, 0, this.width, this.height);

        ctx.drawImage(dots.canvas, 0, 0);
        ctx.drawImage(circuits.canvas, 0, 0);

        return canvas;
    }
}


//

// background init
const bgCanvas = document.getElementById('c'),
    width = bgCanvas.width = 250,
    height = bgCanvas.height = 250,
    bgCtx = bgCanvas.getContext('2d');

// dots
const dots = new Dots(width, height, 2);

// things
const things = new Things(width, height);
    // get dot ghost
    // it will serve as a clip canvas for the gradients to only show where there is originally dots in the background
    things.setDotsGhost(dots.ghost());
    things.setLight(dots.spacing * 4);

// circuits
const maxLength = 16,
    minLength = 3,
    cellSize = 10,
    circuits = new Circuits(width, height, cellSize, minLength, maxLength);

// background first and only draw
const background = new Background(width, height),
    staticBG = background.getBackground();
bgCtx.drawImage(staticBG, 0, 0);

// animation
const canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d');
canvas.width = width;
canvas.height = height;
canvas.style.position = "absolute";
canvas.style.height = "100%";
const section = document.querySelector('.circuit > .visual');
section.appendChild(canvas);

function loop() {
    // update things
    //things.update();

    ctx.clearRect(0, 0, width, height);
    // draw things
    things.draw();
    ctx.drawImage(things.canvas, 0, 0);

    requestAnimationFrame(loop);
}

// draw bg (dots + circuit) on the main canvas

loop();
});