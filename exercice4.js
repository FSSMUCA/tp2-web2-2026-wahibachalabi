let diff = 0

function test(a,b,labelA,labelB){

let r1 = a == b
let r2 = a === b

console.log(labelA + " == " + labelB + " -> " + r1 + " | " + labelA + " === " + labelB + " -> " + r2)

if(r1 && !r2){
diff++
}

}

test(0,"0","0","\"0\"")
test(0,"","0","\"\"")
test(0,false,"0","false")
test("",false,"\"\"","false")
test(null,undefined,"null","undefined")
test(null,false,"null","false")
test(NaN,NaN,"NaN","NaN")
test(1,"1","1","\"1\"")
test(" \t\n ",0,"\" \\t\\n \"","0")

console.log("---")
console.log(diff + " paire(s) où == et === donnent des résultats différents")