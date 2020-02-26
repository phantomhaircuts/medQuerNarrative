window.onload = (event) => {
  console.log('fall');
  leaves = [];

  // seed the world with leaves
  function leafSeed (updateLeaf) {
    let world = document.querySelector('.overlay');
    let leaf = document.createElement('div');
    leaf.setAttribute('class', 'sakura-leaves');
    leaf.style.left = Math.random() * (1400 - 0) + 10+ 'px';
    leaf.style.top = Math.random() * (1400 - 0) + 10+ 'px';
    world.appendChild(leaf);
    leaves.push(leaf);
  }
  // fall is here so let it rain
  for (let i = 0; i < 150; i++) {
    leafSeed();
  }

  // Let them dance
  function updateLeaf (leaf) {
    // var t = 'translateX(200px)';
    // leaf.style.webkitTransform = t;
    // leaf.style.MozTransform = t;
    // leaf.style.oTransform = t;
    // leaf.style.transform = t;
    yPos = leaf.offsetTop;
    xPos = leaf.offsetLeft
    console.log(xPos + ',' + yPos);

    let posX = xPos;
    let posY = yPos;
    let velocity = 0;
    pos = 0;
    var id = setInterval(frame, 50);
    function frame() {
        let a = Math.random() * 10 - 5;
        randomSeed = Math.random() * 1.8 - 1;
        velocity = velocity + randomSeed;
        posX = posX + velocity;
        posY= posY + velocity;
        leaf.style.top = -posY + 'px';
        leaf.style.left = posX + 'px';
        leaf.style.rotateZ(a);
        console.log(xPos + ',' + yPos);
    }
  }
  // Each leaf dances to the beat of its own drum
  for (var i = 0; i < leaves.length; i++) {
    updateLeaf(leaves[i]);
  }
};
