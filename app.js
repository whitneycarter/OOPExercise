// OOP EXERCISE

// 1a
const mulan = {
  title: `Mulan`,
  main: `Fa Mulan`,
  // 1b
  quote: function(){
    return `Dishonor! Dishonor on your whole family!`;
  },
  // 1c
  storyline: function(){
    return `The movie ${this.title} is about ${this.name}.`;
  }
};

// 2a
const tangled = {
  title: `Tangled`,
  main: `Rapunzel`,
  // 2b
  quote: function(){
    return `I can't believe I did this! I can't believe I did this! I have to go home! I am never going back! I'm a horrible daughter! BEST DAY EVER!`;
  },
  // 2c
  storyline: function(){
    return `The movie ${this.title} is about ${this.main}.`;
  }
}

// 3a
function DisneyMovie(title, main){
  this.title = title;
  this.main = main;
}

// 3b
DisneyMovie.prototype.storyline = function(){
  return `The movie ${this.title} is about ${this.main}.`;
}

// 3c
const mulan1 = new DisneyMovie(`Mulan`, `Fa Mulan`);
console.log(mulan1);
console.log(mulan1.storyline());

// 3d
const tangled1 = new DisneyMovie(`Tangled`, `Rapunzel`);
console.log(tangled1);
console.log(tangled1.storyline());

// 4a
class DM {
  constructor(title, main){
    this.title = title;
    this.main = main;
  }
  // 4b
  storyline(){
  return `The movie ${this.title} is about ${this.main}.`;
  }
  // 4e
  static loveDisneyMovies(){
    return `I Love Disney Movies`;
  }
}

// 4c
const mulan2 = new DM(`Mulan`, `Fa Mulan`);
console.log(mulan2);
console.log(mulan2.storyline());

// 4d
const tangled2 = new DM(`Tangled`, `Rapunzel`);
console.log(tangled2);
console.log(tangled2.storyline());

// 4f
console.log(DM.loveDisneyMovies());

// 5a
class DMCast extends DM {
  // 5b
  constructor(title, main, cast){
    // 5c
    super(title, main);
    this.cast = cast;
  }
  // BONUS
  // 6a
  static create(title, main, cast){
    return new DMCast(title, main, cast);
  }
}

// 5d
const mulan3 = new DMCast(
  `Mulan`,
  `Fa Mulan`,
  {
    mulan: `Ming-Na Wen`,
    mushu: `Eddie Murphy`,
    shang: `BD Wong`,
    theEmperor: `Pat Morita`
  }
  );
console.log(mulan3);
console.log(mulan3.storyline());
console.log(DMCast.loveDisneyMovies());

// 5e
const rapunzel3 = new DMCast(
  `Tangled`,
  `Rapunzel`,
  {
    rapunzel: `Mandy Moore`,
    flynnRider: `Zachary Levi`,
    motherGothel: `Donna Murphy`
  }
);
console.log(rapunzel3);
console.log(rapunzel3.storyline());

// BONUS
// 6b
const moana = DMCast.create(
  `Moana`,
  `Moana of Motunui`,
  {
    moana: `Auli'i Cravalho`,
    maui: `Dwayne Johnson`,
    grammaTala: `Rachel House`,
    chiefTui: `Temuera Morrison`
  }
);

// 6c
console.log(moana);
console.log(moana.storyline());