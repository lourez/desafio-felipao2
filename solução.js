// Definição da classe Heroi
class Heroi {
  // Construtor que recebe nome, idade e tipo do herói
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Método atacar
  atacar() {
    let ataque;
    if (this.tipo === "ninja") {
      ataque = "shuriken";
    } else {
      ataque = "atacou";
    }
    // Exibe a mensagem de ataque
    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

// Criando um objeto Heroi e chamando o método atacar
const heroi = new Heroi("Naruto", 15, "ninja");
heroi.atacar();
