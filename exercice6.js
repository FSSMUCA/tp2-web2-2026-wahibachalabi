let nom = null
let age = 0
let ville = ""
let score = undefined
let actif = false

console.log("Partie A")

console.log("nom -> " + (nom ?? "valeur par défaut"))
console.log("age -> " + (age ?? "valeur par défaut"))
console.log("ville -> " + (ville ?? "valeur par défaut"))
console.log("score -> " + (score ?? "valeur par défaut"))
console.log("actif -> " + (actif ?? "valeur par défaut"))

console.log("Partie B")

console.log("nom -> " + (nom || "valeur par défaut"))
console.log("age -> " + (age || "valeur par défaut"))
console.log("ville -> " + (ville || "valeur par défaut"))
console.log("score -> " + (score || "valeur par défaut"))
console.log("actif -> " + (actif || "valeur par défaut"))

console.log("Partie C")

console.log("nom : " + ((nom ?? "x") === (nom || "x") ? "même résultat" : "résultat différent"))
console.log("age : " + ((age ?? "x") === (age || "x") ? "même résultat" : "résultat différent"))
console.log("ville : " + ((ville ?? "x") === (ville || "x") ? "même résultat" : "résultat différent"))
console.log("score : " + ((score ?? "x") === (score || "x") ? "même résultat" : "résultat différent"))
console.log("actif : " + ((actif ?? "x") === (actif || "x") ? "même résultat" : "résultat différent"))