const idadeMinima = 18;
const idadeCliente = 20;

if (idadeCliente >= idadeMinima) {
    console.log("Cliente pode entrar!")
} else {
    console.log("Cliente não possui idade minima")
}
//                  condição                      true                            false
console.log(idadeCliente >= idadeMinima ? "Cliente pode entrar!" : "Cliente não possui idade minima")

