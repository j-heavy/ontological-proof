function necessary(x) {
	return x
}

function possible(x) {
	return x
}

function implication(a, b) {
	return a ? b : true
}

// INDIVIDUALS

let A, B, C, D, x = true
let G

///

function Positive(x) {
	return x
}

function axiom1(a) {
	return !Positive(a) === Positive(!a)
}

function axiom2(a, b) {
	return implication(
    (Positive(a) && necessary(implication(a, b))),
    Positive(b)
  )
}

function theorem1(a) {	
	return implication(Positive(a), possible(a))
}

function definition1(a) {
	G = !!(implication(Positive(a), a))

	return G
}

function axiom3(a) {
	return Positive(a)
}

function corollaries() {
	return possible(G)
}

function axiom4(a) {
	return implication(Positive(a), necessary(Positive(a)))
}

function ess(a) {
	return a && implication(B, necessary(implication(a, C)))
}

function theorem2() {
	return implication(G, ess(G, x))
}

function NE() {
	return implication(ess(A, x), possible(A))
}

function theorem3(a) {
	return necessary(a)
}

function ontologicalProof() {
	return axiom1(A) 
		&& axiom2(A, B)
		&& theorem1(A)
		&& definition1(A)
		&& axiom3(G)
		&& corollaries()
		&& axiom4(A)
		&& ess(A, x)
		&& NE(x)
		&& theorem3(G)
}

export default ontologicalProof