import { createSlice } from "@reduxjs/toolkit";

const initialStats = {
    Strength: 0,
    Agility: 0,
    Stamina: 0,
    Edge: 0,
    usedEdge: 0,
    Logic: 0,
    Intuition: 0,
    Charisma: 0,
    Power: 0,
    usedPower: 0,
    maxStrength:5,
    maxAgility:5,
    maxStamina:5,
    maxEdge:5,
    maxLogic:5,
    maxIntuition:5,
    maxCharisma:5,
    maxPower:5,
    currentArmor: 0,
    armorInit: 0,
    armorDodge:0,
    armorEncumbrance: 0,
    currentShield: 0,
    shieldEncumbrance: 0,
    shieldParry: 0,
    shieldInit: 0,

    Blades: 0,
    Blunt: 0,
    Pierce: 0,
    Ranged: 0,
    Armor: 0,
    Conjuration: 0,
    Enchantment: 0,
    Evocation: 0,
    Terramancy: 0,
    Necromancy: 0,
    Restoration: 0,    
    Blessings: 0,    
    Divination: 0,    
    Providence: 0,    
    Exorcist: 0,    
    Banes: 0,
    Wounding: 0,
    Defiling: 0,
    'Spirit Warrior': 0,
    Shadow: 0,
    'Diamond Fist': 0,
    maxBlades: 5,
    maxBlunt: 5,
    maxPierce: 5,
    maxRanged: 5,
    maxArmor: 5,
    maxConjuration: 5,
    maxEnchantment: 5,
    maxEvocation: 5,
    maxTerramancy: 5,
    maxNecromancy: 5,
    maxRestoration: 5,    
    maxBlessings: 5,    
    maxDivination: 5,    
    maxProvidence: 5,    
    maxExorcist: 5,    
    maxBanes: 5,
    maxWounding: 5,
    maxDefiling: 5,
    'maxSpirit Warrior': 5,
    maxShadow: 5,
    'maxDiamond Fist': 5

}

const charStatSlice = createSlice({
    name: 'charStats',
    initialState: initialStats,
    reducers: {
        initStat(state, action) {
            const stat = action.payload;
            state[stat] = 0;
        },
        initMax(state, action) {
            const stat = action.payload;
            state[`max${stat}`] = 5;
        },
        setStat(state, action) {
            const amount = action.payload.amount;
            const stat = action.payload.stat;
            state[stat] = amount;
        },
        addStat(state, action) {
            const stat = action.payload;
            state[stat] = state[stat] + 1;
           // console.log(stat);
        },
        removeStat(state, action) {
            const stat = action.payload;
            state[stat] = state[stat] - 1;
           // console.log(stat);
        }
    }
})

export const charStatActions = charStatSlice.actions;
export default charStatSlice;