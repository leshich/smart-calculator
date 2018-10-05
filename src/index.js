class SmartCalculator {
  constructor(initialValue) {
    this.expression = `${initialValue}`;
    this.actions = {
      add: '+',
      subtract: '-',
      multiply: '*',
      devide: '/',
      pow: '**'
    }
  }

  add(number) {
    this.addToExpression('add', number);
    return this;
  }
  
  subtract(number) {
    this.addToExpression('subtract', number);
    return this;
  }

  multiply(number) {
    this.addToExpression('multiply', number);
    return this;
  }

  devide(number) {
    this.addToExpression('devide', number);
    return this;
  }

  pow(number) {
    this.addToExpression('pow', number);
    return this;
  }

  valueOf() {
    return new Function(`return ${this.expression}`)();
  }

  notNumber(number) {
    return isNaN(number);
  }

  addToExpression(type, number) {
    if (this.notNumber(number)) throw new Error('not a number!');
    this.expression += this.actions[type] + number;
  }
}

module.exports = SmartCalculator;
