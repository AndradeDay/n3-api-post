const model = require("../model/contatos")

const getAll = (request, response) => {
  console.log(request.url)
  response.status(200).send(model.agenda)
};

const add = (request, response) => {
  let contato = request.body
  let baseDados = model.agenda.contatos
  contato.id = Math.random().toString(36).substr(-8)

  if (!contato.nome || !contato.dataNascimento || !contato.celular) {
    response.status(400).send("Dados inválidos");
  } else {
    if (baseDados.find(dado => dado.nome === contato.nome)) {
      response.status(400).send("Contato já cadastrado")
    } else {
      model.agenda.contatos.push(contato)
      response.status(201).send(`O signo é ${saberSigno(contato)}`)
    }
  }
  //amigo estou aqui

}

function converterData(dataString) {

  const dia = dataString.split("/")[0]
  const mes = dataString.split("/")[1] - 1
  const ano = dataString.split("/")[2]

  const novaData = new Date(ano, mes, dia);
  return novaData
}

function saberSigno(contato) {

  const dataNasc = converterData(contato.dataNascimento)
  const pegarMes = dataNasc.getMonth()
  const pegarDia = dataNasc.getDate() 
  let signo;
  
  if (pegarMes == 1 && pegarDia >= 20 || pegarMes == 2 && pegarDia <= 18) { signo = "Aquarius"; }
  if (pegarMes == 1 && pegarDia > 31) { signo = "Huh?"; }
  if (pegarMes == 2 && pegarDia >= 19 || pegarMes == 3 && pegarDia <= 20) { signo = "Pisces"; }
  if (pegarMes == 2 && pegarDia > 29) { signo = "Say what?"; }
  if (pegarMes == 3 && pegarDia >= 21 || pegarMes == 4 && pegarDia <= 19) { signo = "Aries"; }
  if (pegarMes == 3 && pegarDia > 31) { signo = "OK.  Whatever."; }
  if (pegarMes == 4 && pegarDia >= 20 || pegarMes == 5 && pegarDia <= 20) { value = "Taurus"; }
  if (pegarMes == 4 && pegarDia > 30) { signo = "I'm soooo sorry!"; }
  if (pegarMes == 5 && pegarDia >= 21 || pegarMes == 6 && pegarDia <= 21) { signo = "Gemini"; }
  if (pegarMes == 5 && pegarDia > 31) { signo = "Umm ... no."; }
  if (pegarMes == 6 && pegarDia >= 22 || pegarMes == 7 && pegarDia <= 22) { signo = "Cancer"; }
  if (pegarMes == 6 && pegarDia > 30) { signo = "Sorry."; }
  if (pegarMes == 7 && pegarDia >= 23 || pegarMes == 8 && pegarDia <= 22) { signo = "Leo"; }
  if (pegarMes == 7 && pegarDia > 31) { signo = "Excuse me?"; }
  if (pegarMes == 8 && pegarDia >= 23 || pegarMes == 9 && pegarDia <= 22) { signo = "Virgo"; }
  if (pegarMes == 8 && pegarDia > 31) { signo = "Yeah. Right."; }
  if (pegarMes == 9 && pegarDia >= 23 || pegarMes == 10 && pegarDia <= 22) { signo = "Libra"; }
  if (pegarMes == 9 && pegarDia > 30) { signo = "Try Again."; }
  if (pegarMes == 10 && pegarDia >= 23 || pegarMes == 11 && pegarDia <= 21) { signo = "Scorpio"; }
  if (pegarMes == 10 && pegarDia > 31) { signo = "Forget it!"; }
  if (pegarMes == 11 && pegarDia >= 22 || pegarMes == 12 && pegarDia <= 21) { signo = "Sagittarius"; }
  if (pegarMes == 11 && pegarDia > 30) { signo = "Invalid Date"; }
  if (pegarMes == 12 && pegarDia >= 22 || pegarMes == 1 && pegarDia <= 19) { signo = "Capricorn"; }
  if (pegarMes == 12 && pegarDia > 31) { signo = "No way!"; }

console.log(pegarMes)
console.log(pegarDia)
return signo;
}

module.exports = {
  getAll,
  add
}
