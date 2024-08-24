public classe Pessoa {
    private string _nome { get; set; }
    private int _dade { get; set;}

    public Pessoa(string nome, int idade) {
        this.nome = nome;
        this._dade = idade;
    }
}

public class Program {
    public static void Main()
    {
        var pessoa = new Pessoa();
    }
}