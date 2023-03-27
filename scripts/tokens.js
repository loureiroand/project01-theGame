class Token {
  constructor(y, type) {
    this.x = canvas.width;
    this.y = y;
    this.width = 70;
    this.height = 70;
    this.type = type;
    this.isReady = false;

    const img = new Image();

    img.onload = () => {
      this.image = img;
      this.isReady = true;
    };

    if (type === 'sheep') {
      img.src = '../images/sheep_body_01.png';
    } else if (type === 'grass') {
      img.src = '../images/grass_01.png';
    }
    // adjust the position of tokens
    if (this.y < 0) {
      this.y = 0;
    } else if (this.y + this.height > canvas.height) {
      this.y = canvas.height - this.height;
    }
  }

  draw() {
    if (this.isReady) {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  }

  move() {
    this.x -= 2;
  }

  // left border is at x position
  left = () => {
    return this.x;
  };

  // right border is the x position plus the width of the element
  right = () => {
    return this.x + this.width;
  };

  // top border is the y position
  top = () => {
    return this.y;
  };

  // bottom border is at y position plus the height of the element
  bottom = () => {
    return this.y + this.height;
  };

  collisionWith = shepherd => {
    return !(
      this.bottom() < shepherd.top() ||
      this.top() > shepherd.bottom() ||
      this.right() < shepherd.left() ||
      this.left() > shepherd.right()
    );
  };
}
