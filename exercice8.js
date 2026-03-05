let nom = "   Fatima   "
let age = "23"
let email = "fatima@example"
let scoreJeu = "150pts"
let estAdmin = "false"
let derniereConnexion = null
let nombreConnexions = "0"

nom = nom.trim()

if(nom === ""){
nom = "Inconnu"
}

age = parseInt(age)

let ageStatut = (Number.isNaN(age) || age <= 0) ? "invalide" : "valide"

let emailValide = false

if(email.includes("@")){
let partie = email.split("@")[1]
if(partie.includes(".")){
emailValide = true
}
}

let score = parseInt(scoreJeu)

if(Number.isNaN(score)){
score = 0
}

let admin = (estAdmin === "true")

let connexion = derniereConnexion ?? "Jamais connecté"

let nb = Number(nombreConnexions)

let texteConnexion = (nb === 0) ? "Aucune connexion" : nb

console.log("===== RAPPORT UTILISATEUR =====")
console.log('nom : "' + nom + '"')
console.log("age :", age,"("+ageStatut+")")
console.log('email : "' + email + '"', emailValide ? "(valide)" : "(invalide)")
console.log("scoreJeu :", score)
console.log("estAdmin :", admin)
console.log('derniereConnexion : "' + connexion + '"')
console.log("nombreConnexions :", texteConnexion)
console.log("================================")