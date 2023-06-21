import Weapon from "../Items/Lvl1/Weapon.mjs";
import util from 'util';

export default class Inventario {
    constructor() {
        this.equipamento = {
            primeira_mao: [],
            segunda_mao: [],
            dedos: [],
            luvas: [],
            cabeca: [],
            face: [],
            armadura: [],
            camisa: [],
        };
        this.comida = [];
        this.pocoes = [];
        this.misc = [];
        this.questitems = [];
        this.magicalitems = [];
        this.equipados = {
            primeira_mao: "",
            segunda_mao: "",
            dedos: [],
            luvas: "",
            cabeca: "",
            face: "",
            armadura: "",
            camisa: "",
        };
        this.ouro = 0;
        this.vida = 0;
        this.mana = 0;
    }

    AbrirInventario() {
        console.log("Abrindo...");
    }

    FecharInventario() {
        console.log("Fechado X");
    }

    RemoverItem(item, tab, categoria = null) {
        if (categoria) {
            //alguns itens nao têm categoria
            const indice = this.equipamento[cat].findIndex(
                (i) => i.name === item.name
            );
            this[tab][categoria].splice(indice, 1);
        } else {
            const indice = this[tab].findIndex((i) => i == item);
            this[tab].splice(indice, 1);
        }
    }

    AdicionarItem(item, tab, categoria = null) {
        if (categoria) {
            this[tab][categoria] = this[tab][categoria].filter(
                (el) => el !== ""
            ); // Remove empty strings from the array
            this[tab][categoria].push(item);
        } else {
            this[tab] = this[tab].filter((el) => el !== ""); // Remove empty strings from the array
            this[tab].push(item);
        }
    }

    EquiparItem(item, cat) {
        const indice = this.equipamento[cat].findIndex((i) => i.id === item.id);
        if (indice == -1) {
            console.log("Item não disponível no inventário.");
        } else if (this.equipamento[cat][indice].equipavel === false) {
            console.log(
                "Item não é/está equipável. Verifique as condições para equipá-lo"
            );
        } else {
            if (!this.equipados[cat]) {
                this.equipados[cat] = this.equipamento[cat][indice];
            } else {
                this.equipamento[cat].push(this.equipados[cat]);
            }
            this.updateStats();
        }
    }

    updateStats() {}



    inspect() {
        const formatObject = (obj, indentLevel = 1) => {
          const indent = ' '.repeat(indentLevel * 2);
          const lines = Object.entries(obj).map(([key, value]) => {
            const formattedValue = typeof value === 'object' ? formatObject(value, indentLevel + 1) : value;
            return `${indent}${key}: ${formattedValue}`;
          });
          return `{\n${lines.join(',\n')}\n${' '.repeat((indentLevel - 1) * 2)}}`;
        };
    
        const equipamento = {};
        for (const key in this.equipamento) {
          equipamento[key] = this.equipamento[key].map((item) => util.inspect(item, { colors: true }));
        }
    
        const equipados = {};
        for (const key in this.equipados) {
          const value = this.equipados[key];
          if (Array.isArray(value)) {
            equipados[key] = value.map((item) => util.inspect(item, { colors: true }));
          } else {
            equipados[key] = util.inspect(value, { colors: true });
          }
        }
    
        return `Inventario {
      equipamento: ${formatObject(equipamento, 2)},
      comida: ${util.inspect(this.comida, { colors: true, depth: null })},
      pocoes: ${util.inspect(this.pocoes, { colors: true, depth: null })},
      misc: ${util.inspect(this.misc, { colors: true, depth: null })},
      questitems: ${util.inspect(this.questitems, { colors: true, depth: null })},
      magicalitems: ${util.inspect(this.magicalitems, { colors: true, depth: null })},
      equipados: ${formatObject(equipados, 2)},
      ouro: ${this.ouro},
      vida: ${this.vida},
      mana: ${this.mana}
    }`;
      }
}

// toString() {

//     const inventoryString = JSON.stringify(this, (key, value) => {
//       if (value instanceof Weapon) {
//         return value.name;
//       }
//       return value;
//     }, 2);
//     return inventoryString;

//   }
