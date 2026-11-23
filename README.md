# Timão C# ⚫⚪

Site para aprender **C# do zero**, em português, com exemplos de futebol e o clima da Fiel.

> Projeto educativo independente, feito por torcedor. Sem vínculo oficial com o Sport Club Corinthians Paulista.

## O que tem

Oito módulos em sequência, do primeiro `Console.WriteLine` até LINQ:

1. **Olá, Timão** — estrutura do programa, `Console.WriteLine`, interpolação de strings
2. **Variáveis e tipos** — `int`, `string`, `double`, `bool`, `var`
3. **Condições** — `if`/`else`, operadores, `switch`
4. **Repetição** — `for`, `foreach`, `while`, arrays
5. **Métodos** — parâmetros, retorno, `switch` expression
6. **Classes e objetos** — propriedades, construtor, métodos de instância
7. **Listas** — `List<T>`, `Count`, casts e formatação numérica
8. **LINQ** — `Where`, `OrderBy`, `Select`, `Sum`, `FirstOrDefault`

Cada módulo tem código comentado, "o que aconteceu" em tópicos e um **quiz de três alternativas**. O progresso é salvo no `localStorage` do navegador.

## Estrutura

```
index.html   # conteúdo dos módulos
styles.css   # tema preto e branco, layout responsivo
app.js       # destaque de sintaxe C#, quizzes, progresso
```

Sem frameworks, sem build, sem dependências externas — três arquivos estáticos. Funciona aberto direto do disco também.

## Rodar localmente

```bash
git clone https://github.com/LuisBalbino-coder/timao-csharp.git
cd timao-csharp
python3 -m http.server 8080
# abra http://localhost:8080
```

## Para praticar de verdade

Instale o [.NET SDK](https://dotnet.microsoft.com/download) e o VS Code com a extensão C#:

```bash
dotnet new console -o Timao
cd Timao
dotnet run
```

No Linux Mint (e em qualquer distro) o fluxo é o mesmo do Windows.

## Licença

Conteúdo e código livres para estudo. Vai, Timão.
