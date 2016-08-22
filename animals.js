function Owner(animals) {
  this.animals = animals;
  this.care = function() {
    console.log('## cuddle ##');
    this.animals.forEach(function(a) {
      a.cuddle()
    });
    console.log('## feed ##');
    this.animals.forEach(function(a) {
      a.feed()
    });
    console.log('## cuddle ##');
    this.animals.forEach(function(a) {
      a.cuddle()
    });
  }
}

function Badger() {
  this.happy = 0;
  this.cuddle = function() {
    if (this.happy > 0) {
      console.log('Wheeewwww')
    } else {
      console.log('Grrrr')
    }
  };
  this.feed = function() {
    ++this.happy;
    console.log('miam miam miam');
  }
}

function GoldFish() {
  this.seed = Math.random();
  this.blob = function() {
    if (this.seed > 0.5) {
      console.log('*blub*')
    } else {
      console.log('*blob*')
    }
  };
  this.cuddle = function() {
    this.blob();
  };
  this.feed = function() {
    this.blob();
  }
}

var cha = new Owner([new GoldFish(), new Badger(), new GoldFish(), new GoldFish()]);
cha.care();
