async function usuarioGithub(nome) {
  try {
    const resposta = await fetch(`https://api.github.com/users/${nome}`);
    const objetoJS = await resposta.json();

    const resultado = {
      nome: objetoJS.name ?? "Indisponível",
      email: objetoJS.email ?? "Indisponível",
      foto: objetoJS.avatar_url ?? "Indisponível",
    };

    return resultado;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = usuarioGithub;
