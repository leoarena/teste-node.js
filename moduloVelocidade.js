function analisarVelocidade(velocidadeAtual, velocidadeMaxima) {
  if (velocidadeAtual <= velocidadeMaxima) return "sem multa";
  if (
    velocidadeAtual > velocidadeMaxima &&
    velocidadeAtual <= velocidadeMaxima + (velocidadeMaxima * 20) / 100
  )
    return "multa leve";
  else return "multa grave";
}

module.exports = analisarVelocidade;
