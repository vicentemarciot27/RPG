export default class Potion {
    constructor(id = null, name = "", potionEffect = () => {}) {
      this.id = id;
      this.name = name;
      this.potionEffect = potionEffect;
    }
  }