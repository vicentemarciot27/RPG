import Weapon from "./Weapon.mjs";

const lvl1weapons = {
    sword: new Weapon(678, "Sword", 10, 5),
    axe: new Weapon(499, "Axe", 15),
    bow: new Weapon(500, "Bow"),
    espadagpc: new Weapon(1, "Espada Grande Pra Cacete", 20, 10, 0, true),
    pistola: new Weapon(700, "Pistola Mauser", 10, 14, 0, true),
};

export default lvl1weapons;
