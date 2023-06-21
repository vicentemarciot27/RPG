import Potion from "./Potion.mjs";
import * as dataEffects from "../../Effects/dataEffects.mjs";

const potions = {
    healingPotion: new Potion(
        1,
        "Healing Potion",
        dataEffects.healEffect //
    ),
    strengthPotion: new Potion(
        2,
        "Strength Potion",
        dataEffects.strengthEffect
    ),
};

export default potions;
