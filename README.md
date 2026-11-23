# Timão C# ⚫⚪

Curso gratuito de **C# em português**, com exemplos de futebol e o clima da Fiel. 26 módulos em quatro trilhas, do primeiro `Console.WriteLine` até API com banco de dados, jogo em Unity e app desktop.

> Projeto educativo independente, feito por torcedor. Sem vínculo oficial com o Sport Club Corinthians Paulista.

## Trilhas

### Fundamentos — 16 módulos (`fundamentos.html`)
1. Olá, Timão — primeiro programa, interpolação, como o C# roda (IL/CLR)
2. Variáveis, tipos e conversões — `int`, `double`, `decimal`, `var`, `TryParse`, cast
3. Condições — `if`/`else`, `switch`, ternário, curto-circuito
4. Repetição e arrays — `for`, `while`, `do/while`, `foreach`, `break`/`continue`
5. Métodos — retorno, `ref`/`out`, opcionais, sobrecarga
6. Classes, objetos e propriedades — `init`, `private set`, `static`
7. Listas e coleções básicas — `List<T>`, `Sort` com lambda
8. LINQ — `Where`, `OrderBy`, `Select`, `GroupBy`, execução adiada
9. Exceções — `try`/`catch`/`finally`, `throw`, filtros `when`, exceção personalizada
10. Arquivos e JSON — `File`, `Path`, `System.Text.Json`, `IOException`
11. Enums, structs, records e nullable — `?`, `??`, pattern matching
12. Herança, interfaces e polimorfismo — `abstract`, `virtual`/`override`, composição
13. Generics e coleções avançadas — `Dictionary`, `HashSet`, `Queue`, `Stack`
14. Delegates, eventos e lambdas — `Action`, `Func`, `event`
15. Async, await e threads — `Task`, `WhenAll`, `CancellationToken`
16. Testes, GC e boas práticas — xUnit, `IDisposable`, `using`

### Games com Unity — 4 módulos (`games.html`)
G1 MonoBehaviour e ciclo de vida · G2 física e colisões · G3 UI, prefabs e ScriptableObject · G4 build, object pooling e performance.

### Web e back-end — 3 módulos (`web.html`)
W1 Minimal API · W2 EF Core com SQLite · W3 JWT, configuração segura e deploy.

### Automação, desktop e dados — 3 módulos (`automacao.html`)
D1 scripts de console e agendamento · D2 Avalonia e MVVM · D3 HTTP, CSV, nuvem e IA.

Cada módulo tem código comentado, tópicos "o que você precisa saber" e um **quiz de três alternativas**. O progresso fica salvo no `localStorage` do navegador (compartilhado entre as páginas).

## Estrutura

```
index.html        # início, mapa das trilhas e "o que dá para fazer com C#"
fundamentos.html  # 16 módulos de linguagem
games.html        # trilha Unity
web.html          # trilha ASP.NET Core
automacao.html    # trilha console/desktop/dados
styles.css        # tema preto e branco, responsivo
app.js            # destaque de sintaxe C#, quizzes, progresso
```

Sem frameworks, sem build, sem dependências externas: são arquivos estáticos.

## Rodar localmente

```bash
git clone https://github.com/LuisBalbino-coder/timao-csharp.git
cd timao-csharp
python3 -m http.server 8080
# abra http://localhost:8080
```

Site publicado: <https://luisbalbino-coder.github.io/timao-csharp/>

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
