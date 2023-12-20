class StringBuilder {
  #value = [];

  constructor([initialValue]) {
    this.#value = [initialValue];
  }

  getValue() {
    return this.#value.join('');
  }

  padEnd(endStr) {
    this.#value.push(endStr);
  }

  padStart(startStr) {
    this.#value.unshift(startStr);
    
  }

  padBoth(bothStr) {
    this.#value.unshift(bothStr);
    this.#value.push(bothStr);
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue());
builder.padStart("^");
console.log(builder.getValue());
builder.padEnd("^");
console.log(builder.getValue());
builder.padBoth("=");
console.log(builder.getValue());