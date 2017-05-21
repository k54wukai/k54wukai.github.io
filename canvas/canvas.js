var canvas = document.querySelector('canvas');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var c = canvas.getContext('2d');

    var colorArray = [
        '#E67E22',
        '#212F3D',
        '#8E44AD',
        '#CACFD2'
    ];


    var mouse = {
        x: undefined,
        y: undefined
    }
    
    var maxRadius = 50;
    var minRadius = 30;


    window.addEventListener('mousemove', function(){
        mouse.x = event.x;
        mouse.y = event.y;
    })
    
function Circle(x, y, dx, dy, radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    
    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }
    
    this.update = function(){
        if(this.x + radius> canvas.width || this.x - this.radius < 0){
        this.dx = -this.dx;
        }
        if (this.y + radius > canvas.height|| this.y - this.radius < 0){
            this.dy = -this.dy;
        }
        
        this.x += this.dx;
        this.y += this.dy;
        
        
        // activity;   
        if (mouse.x - this.x < 70 && mouse.x - this.x > -70 && mouse.y-this.y <70 && mouse.y - this.y > -70){
            if (this.radius < 50){
                    this.radius += 1;
            }
        }
        else if (this.radius > 10){
            this.radius -= 1;
        }
        
        this.draw();
    }
}

var circleArray = [];

for (var i = 0; i < 200; i++){
    var radius = 10;
    var x = Math.random() * (innerWidth - radius *2) + radius;
    var y = Math.random() * (innerHeight - radius *2) + radius;
    var dx = (Math.random() - 0.5) * 2;
    var dy = (Math.random() - 0.5) * 2;
    circleArray.push(new Circle(x, y, dx, dy, radius));

}


function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth, innerHeight);
    for (var i =0 ; i < circleArray.length; i++){
        circleArray[i].update();
    }
    
}

animate();