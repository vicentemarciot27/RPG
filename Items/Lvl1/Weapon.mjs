export default class Weapon {
    constructor(id = null, name = "",dmg = 0, atk = 0, level = 0, equipavel = true) {
        this.id = id;
        this.name = name;
        this.dmg = dmg;
        this.atk = atk;
        this.level = level;
        this.equipavel = equipavel;
    }

    // toString(){
    //     return {
    //       id: ${this.id},
    //       name: '${this.name}',
    //       dmg: ${this.dmg},
    //       atk: ${this.atk},
    //       level: ${this.level},
    //       equipavel: ${this.equipavel}
    //     }`;
    //   }
}
