Mindrawingjs = function () {};

(function(){
  Mindrawingjs.prototype.setup = function (canvasID, width, height) {
    this.c = document.getElementById(canvasID);
    this.ctx = this.c.getContext('2d');

    if (arguments.length == 3) {
      this.c.width = width;
      this.c.height = height;
    }

    this.width = this.c.width;
    this.height = this.c.height;
  };

  Mindrawingjs.prototype.background = function(colour) {
    this.ctx.fillStyle = colour;
    this.ctx.fillRect(0, 0, this.width, this.height);
  };

  Mindrawingjs.prototype.line = function(ax, ay, bx, by) {
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
  };

  Mindrawingjs.prototype.stroke = function(colour) {
    this.ctx.strokeStyle = colour;
  };

  Mindrawingjs.prototype.strokeWeight = function(weight) {
    this.ctx.lineWidth = weight;
  };

  Mindrawingjs.prototype.fill = function(colour) {
    this.ctx.fillStyle = colour;
  };

  Mindrawingjs.prototype.rect = function(ax, ay, w, h) {
    this.ctx.beginPath();
    this.ctx.rect(ax, ay, w, h);
    this.ctx.fill();
    this.ctx.stroke();
  };

  Mindrawingjs.prototype.text = function(text, ax, ay) {
    this.ctx.fillText(text, ax, ay);
  };

  Mindrawingjs.prototype.textSize = function(size) {
    this.ctx.font = size + 'px Arial';
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Mindrawingjs;
  }
})();
