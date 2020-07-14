class Chair {
  constructor () {
    this.type = 'office';
    this.wheels = 0;
    this.backrest = true;
    this.armrests = false;
    this.headrest = false;
  }
}

class ChairBuilder {
  constructor(){
    this.chair = new Chair();
  }
  setType(type) {
    this.chair.type = type;
    return this;
  }
  addWheels(wheels) {
    this.chair.wheels = wheels;
    return this;
  }
  addBackrest(backrest) {
    this.chair.backrest = backrest;
    return this;
  }
  addArmrest(armrests) {
    this.chair.armrests = armrests;
    return this;
  }
  addHeadrest(headrest) {
    this.chair.headrest = headrest;
    return this;
  }
  chooseSeatMaterial(seatMaterial) {
    this.chair.seatMaterial = seatMaterial;
    return this;
  }
  build() {
    return this.chair;
  }
};

const defaultChair = new ChairBuilder().build();

const gamingChair = new ChairBuilder()
  .setType('gaming')
  .addWheels(5)
  .addArmrest(true)
  .addHeadrest(true)
  .chooseSeatMaterial('leather')
  .build();

const comfortableOfficeChair = new ChairBuilder()
  .addWheels(3)
  .addArmrest(true)
  .chooseSeatMaterial('fabric')
  .build();

console.log(defaultChair);
console.log(gamingChair);
console.log(comfortableOfficeChair);