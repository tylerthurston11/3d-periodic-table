import AtomInfo from "./types/AtomInfo";

const data: Record<number, AtomInfo> = {
  "1": { shortName: "H", fullName: "Hydrogen" },
  "2": { shortName: "He", fullName: "Helium" },
  "3": { shortName: "Li", fullName: "Lithium" },
  "4": { shortName: "Be", fullName: "Beryllium" },
  "5": { shortName: "B", fullName: "Boron" },
  "6": { shortName: "C", fullName: "Carbon" },
  "7": { shortName: "N", fullName: "Nitrogen" },
  "8": { shortName: "O", fullName: "Oxygen" },
  "9": { shortName: "F", fullName: "Fluorine" },
  "10": { shortName: "Ne", fullName: "Neon" },
  "11": { shortName: "Na", fullName: "Sodium" },
  "12": { shortName: "Mg", fullName: "Magnesium" },
  "13": { shortName: "Al", fullName: "Aluminum" },
  "14": { shortName: "Si", fullName: "Silicon" },
  "15": { shortName: "P", fullName: "Phosphorus" },
  "16": { shortName: "S", fullName: "Sulfur" },
  "17": { shortName: "Cl", fullName: "Chlorine" },
  "18": { shortName: "Ar", fullName: "Argon" },
  "19": { shortName: "K", fullName: "Potassium" },
  "20": { shortName: "Ca", fullName: "Calcium" },
  "21": { shortName: "Sc", fullName: "Scandium" },
  "22": { shortName: "Ti", fullName: "Titanium" },
  "23": { shortName: "V", fullName: "Vanadium" },
  "24": { shortName: "Cr", fullName: "Chromium" },
  "25": { shortName: "Mn", fullName: "Manganese" },
  "26": { shortName: "Fe", fullName: "Iron" },
  "27": { shortName: "Co", fullName: "Cobalt" },
  "28": { shortName: "Ni", fullName: "Nickel" },
  "29": { shortName: "Cu", fullName: "Copper" },
  "30": { shortName: "Zn", fullName: "Zinc" },
  "31": { shortName: "Ga", fullName: "Gallium" },
  "32": { shortName: "Ge", fullName: "Germanium" },
  "33": { shortName: "As", fullName: "Arsenic" },
  "34": { shortName: "Se", fullName: "Selenium" },
  "35": { shortName: "Br", fullName: "Bromine" },
  "36": { shortName: "Kr", fullName: "Krypton" },
  "37": { shortName: "Rb", fullName: "Rubidium" },
  "38": { shortName: "Sr", fullName: "Strontium" },
  "39": { shortName: "Y", fullName: "Yttrium" },
  "40": { shortName: "Zr", fullName: "Zirconium" },
  "41": { shortName: "Nb", fullName: "Niobium" },
  "42": { shortName: "Mo", fullName: "Molybdenum" },
  "43": { shortName: "Tc", fullName: "Technetium" },
  "44": { shortName: "Ru", fullName: "Ruthenium" },
  "45": { shortName: "Rh", fullName: "Rhodium" },
  "46": { shortName: "Pd", fullName: "Palladium" },
  "47": { shortName: "Ag", fullName: "Silver" },
  "48": { shortName: "Cd", fullName: "Cadmium" },
  "49": { shortName: "In", fullName: "Indium" },
  "50": { shortName: "Sn", fullName: "Tin" },
  "51": { shortName: "Sb", fullName: "Antimony" },
  "52": { shortName: "Te", fullName: "Tellurium" },
  "53": { shortName: "I", fullName: "Iodine" },
  "54": { shortName: "Xe", fullName: "Xenon" },
  "55": { shortName: "Cs", fullName: "Cesium" },
  "56": { shortName: "Ba", fullName: "Barium" },
  "57": { shortName: "La", fullName: "Lanthanum" },
  "58": { shortName: "Ce", fullName: "Cerium" },
  "59": { shortName: "Pr", fullName: "Praseodymium" },
  "60": { shortName: "Nd", fullName: "Neodymium" },
  "61": { shortName: "Pm", fullName: "Promethium" },
  "62": { shortName: "Sm", fullName: "Samarium" },
  "63": { shortName: "Eu", fullName: "Europium" },
  "64": { shortName: "Gd", fullName: "Gadolinium" },
  "65": { shortName: "Tb", fullName: "Terbium" },
  "66": { shortName: "Dy", fullName: "Dysprosium" },
  "67": { shortName: "Ho", fullName: "Holmium" },
  "68": { shortName: "Er", fullName: "Erbium" },
  "69": { shortName: "Tm", fullName: "Thulium" },
  "70": { shortName: "Yb", fullName: "Ytterbium" },
  "71": { shortName: "Lu", fullName: "Lutetium" },
  "72": { shortName: "Hf", fullName: "Hafnium" },
  "73": { shortName: "Ta", fullName: "Tantalum" },
  "74": { shortName: "W", fullName: "Wolfram" },
  "75": { shortName: "Re", fullName: "Rhenium" },
  "76": { shortName: "Os", fullName: "Osmium" },
  "77": { shortName: "Ir", fullName: "Iridium" },
  "78": { shortName: "Pt", fullName: "Platinum" },
  "79": { shortName: "Au", fullName: "Gold" },
  "80": { shortName: "Hg", fullName: "Mercury" },
  "81": { shortName: "Tl", fullName: "Thallium" },
  "82": { shortName: "Pb", fullName: "Lead" },
  "83": { shortName: "Bi", fullName: "Bismuth" },
  "84": { shortName: "Po", fullName: "Polonium" },
  "85": { shortName: "At", fullName: "Astatine" },
  "86": { shortName: "Rn", fullName: "Radon" },
  "87": { shortName: "Fr", fullName: "Francium" },
  "88": { shortName: "Ra", fullName: "Radium" },
  "89": { shortName: "Ac", fullName: "Actinium" },
  "90": { shortName: "Th", fullName: "Thorium" },
  "91": { shortName: "Pa", fullName: "Protactinium" },
  "92": { shortName: "U", fullName: "Uranium" },
  "93": { shortName: "Np", fullName: "Neptunium" },
  "94": { shortName: "Pu", fullName: "Plutonium" },
  "95": { shortName: "Am", fullName: "Americium" },
  "96": { shortName: "Cm", fullName: "Curium" },
  "97": { shortName: "Bk", fullName: "Berkelium" },
  "98": { shortName: "Cf", fullName: "Californium" },
  "99": { shortName: "Es", fullName: "Einsteinium" },
  "100": { shortName: "Fm", fullName: "Fermium" },
  "101": { shortName: "Md", fullName: "Mendelevium" },
  "102": { shortName: "No", fullName: "Nobelium" },
  "103": { shortName: "Lr", fullName: "Lawrencium" },
  "104": { shortName: "Rf", fullName: "Rutherfordium" },
  "105": { shortName: "Db", fullName: "Dubnium" },
  "106": { shortName: "Sg", fullName: "Seaborgium" },
  "107": { shortName: "Bh", fullName: "Bohrium" },
  "108": { shortName: "Hs", fullName: "Hassium" },
  "109": { shortName: "Mt", fullName: "Meitnerium" },
  "110": { shortName: "Ds", fullName: "Darmstadtium" },
  "111": { shortName: "Rg", fullName: "Roentgenium" },
  "112": { shortName: "Cn", fullName: "Copernicium" },
  "113": { shortName: "Nh", fullName: "Nihonium" },
  "114": { shortName: "Fl", fullName: "Flerovium" },
  "115": { shortName: "Mc", fullName: "Moscovium" },
  "116": { shortName: "Lv", fullName: "Livermorium" },
  "117": { shortName: "Ts", fullName: "Tennessine" },
  "118": { shortName: "Og", fullName: "Oganesson" },
};

export default data;