// function winBattle(bool) {
//     return bool;
// }

// var experiencePoints = winBattle(false) ? 10 : 1
//
// console.log(experiencePoints)

// function ifThursday(bool) {
//     return bool;
// }
//
// var frozenTreats = ifThursday(false) ? "Yay, soft serve day!" : "Is it Thursday yet?"
//
// console.log(frozenTreats)

// function ifCute(bool) {
//     return bool;
// }
//
// var Onyx = ifCute(false) ? "OMG YOU'RE SO CUTE" : "Ew, you're poopy right now."
//
// console.log(Onyx)

function destinySubclass(destinyClass) {
    var subclassSelection;
    switch (destinyClass) {
        case "Titan":
            subclassSelection = "You have four subclasses to choose from: Sunbreaker, Sentinel, Striker, or Behemoth";
            break;
        case "Hunter":
            subclassSelection = "You have four subclasses to choose from: Nightstalker, Arcstrider, Gunslinger, or Revenant";
            break;
        case "Warlock":
            subclassSelection = "You have four subclasses to choose from: Dawnblade, Voidwalker, Stormcaller, or Shadebinder";
    }
    return subclassSelection;
}

console.log(destinySubclass("Warlock"))

function FFXIVJobType(FFXIVJob) {
    var XIVJobTypeOutput;
    switch (FFXIVJob) {
        case "GNB":
        case "PLD":
        case "WAR":
        case "DRK":
            XIVJobTypeOutput = "This is a tank job."
            break;
        case "DRG":
        case "MNK":
        case "SAM":
        case "NIN":
            XIVJobTypeOutput = "This is a melee DPS job."
            break;
        case "BRD":
        case "MCH":
        case "DNC":
            XIVJobTypeOutput = "This is a ranged DPS job."
            break;
        case "RDM":
        case "SMN":
        case "BLM":
            XIVJobTypeOutput = "This is a spell caster DPS job."
            break;
        case "WHM":
        case "AST":
        case "SCH":
            XIVJobTypeOutput = "This is a healer job."
            break;
        case "BLU":
            XIVJobTypeOutput = "This is a limited spell caster job."
            break;
        default:
            XIVJobTypeOutput = "This is a limited 'nothing' job."

    }
    return XIVJobTypeOutput
}

console.log(FFXIVJobType(""))