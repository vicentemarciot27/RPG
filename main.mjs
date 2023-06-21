import Inventario from "./UI/Inventario.mjs";

import Weapon from "./Items/Lvl1/Weapon.mjs";
import lvl1weapons from "./Items/Lvl1/weaponList.mjs";
import potions from "./Items/Lvl1/dataPotions.mjs";
let PlayerInv = new Inventario();

const cajado = new Weapon(2, "Cajado", 5, 3);

function simulacao() {
    PlayerInv.AbrirInventario();
    
    PlayerInv.AdicionarItem(lvl1weapons.espadagpc, "equipamento", "primeira_mao");
    PlayerInv.EquiparItem(lvl1weapons.espadagpc, "primeira_mao");
    PlayerInv.AdicionarItem(potions.healingPotion, "pocoes")
    PlayerInv.AdicionarItem(potions.strengthPotion, "pocoes")


    PlayerInv.AdicionarItem(lvl1weapons.pistola, "equipamento", "segunda_mao");
    PlayerInv.EquiparItem(lvl1weapons.pistola, "segunda_mao");

    PlayerInv.AdicionarItem(cajado, "equipamento", "primeira_mao");

    console.log(PlayerInv.inspect());
    
    PlayerInv.FecharInventario();
}


simulacao();
