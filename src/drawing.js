drawing = {
  setup: function(canvasID, width, height) {
    this.c = document.getElementById(canvasID);
    this.ctx = this.c.getContext('2d');

    if (arguments.length == 3) {
      this.c.width = width;
      this.c.height = height;
    }

    this.width = this.c.width;
    this.height = this.c.height;
  },
  background: function(colour) {
    this.ctx.fillStyle = colour;
    this.ctx.fillRect(0, 0, this.width, this.height);
  },
  line: function(ax, ay, bx, by) {
    // so 1px lines are crisp, else they are spread over 2 px width and half the intensity
    if (this.ctx.lineWidth == 1) {
      ax += 0.5;
      ay += 0.5;
      bx += 0.5;
      by += 0.5;
    }
    this.ctx.beginPath();
    this.ctx.moveTo(ax, ay);
    this.ctx.lineTo(bx, by);
    this.ctx.stroke();
  },
  stroke: function(colour) {
    this.ctx.strokeStyle = colour;
  },
  strokeWeight: function(weight) {
    this.ctx.lineWidth = weight;
  },
  fill: function(colour) {
    this.ctx.fillStyle = colour;
  },
  rect: function(ax, ay, w, h) {
    this.ctx.beginPath();
    this.ctx.rect(ax, ay, w, h);
    this.ctx.fill();
    this.ctx.stroke();
  }
};