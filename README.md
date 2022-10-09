<hr>

<main>
    <h1 align="center">JavaScript Tipos, Variáveis e Funções</h1>
    <p align="center" style="font-size: 1.25rem;">
        <a href="#sobre">Sobre</a> •
        <a href="#tabela-de-conteudo">Tabela de Conteúdo</a> •
        <a href="#tecnologias">Tecnologias</a> •
        <a href="#certificado">Certificado</a> •
        <a href="#autor">Autor</a>
    </p>
</main>

<hr>

<section id="sobre">
    <h2 style="font-size: 1.25rem;">Sobre</h2>
    <p style="text-align: justify;">Os estudos <b>deste repositório</b> foram feitos de acordo com o curso <a href="https://cursos.alura.com.br/course/fundamentos-javascript-tipos-variaveis-funcoes">JavaScript: tipos, variáveis e funções
</a> com <b>auxílio</b> dos instrutores <b>Leonardo Sartorello</b> e <b>Juliana Amoasei</b>.</p>
    <p style="text-align: justify;">Com isso, quero enfatizar que o <b>conteúdo este repositório foi um estudo</b>! Não o criei sozinho, mas todo o conhecimento fornecido vou absorvido.</p>
</section>

<section id="tabela-de-conteudo">
    <h2 style="font-size: 1.25rem;">Tabela de Conteúdo</h2>
    <ul style="text-align: justify;">
        <li>Que o computador consegue apenas armazenar valores em alguns tipos de variáveis, como números texto e booleanos;</li>
        <li>Como declarar uma variável numérica, com tipo number, e associar um valor a ela, podendo ser um inteiro ou um valor de ponto flutuante;</li>
        <li>Como declarar uma variável de texto, conhecida como string, e colocar uma frase, número, pontuação ou uma mistura de todos esses dentro dela;</li>
        <li>Como declarar uma variável booleana e definir seu valor como verdadeiro (true) ou falso (false);</li>
        <li>Onde as booleanas mais aparecem, como resultados de comparações com <code>===</code> ou outros operadores de comparação como <code>>=</code>;</li>
        <li><code>var</code> tem um escopo global, então funciona em qualquer parte do código, o que pode gerar possíveis problemas em relação à lógica da aplicação;</li>
        <li><code>let</code> e <code>const</code> têm escopo local, sendo assim, não podem ser acessadas em outros escopos, e <code>const</code> não pode ter seu valor alterado depois de definido;</li>
        <li>O JavaScript considera alguns valores como false durante comparações, como com null, undefined, 0, NaN e Strings vazias;</li>
        <li>null é usado quando não queremos dar um valor para uma variável, mas também não queremos deixá-lo como undefined (não definido);</li>
        <li>null é um objeto no JavaScript, diferente de undefined, que tem seu próprio tipo, e isso pode causar problemas se não tomarmos cuidado ao utilizá-lo;</li>
        <li>O JavaScript converte automaticamente entre tipos de valores, como números para texto e para booleanos, porém não é interessante deixá-lo fazer isso automaticamente, pois podem ocorrer erros;</li>
        <li>Temos como forçar uma mudança de tipo utilizando os métodos <code>Number()</code> e <code>String()</code>, onde <code>Number()</code> converte as variáveis para números ou NaN caso tenha algum erro na conversão, e <code>String()</code> converte as variáveis para texto;</li>
        <li>As características principais do JavaScript, como ser uma linguagem interpretada e dinamicamente tipada;</li>
        <li>O que o NodeJS é um interpretador de JavaScript para backend, ou seja, não executa no navegador, mas sim no servidor;</li>
        <li>Como ler os erros que aparecem no console da aplicação, podendo usar um tradutor, como o Google Tradutor, para entender o que o erro está avisando;</li>
        <li>O que é stacktrace, também chamado de pilha, que nos auxilia a saber o que está acontecendo quando temos um erro, e onde ele se localiza;</li>
        <li>O que é o Console API e como podemos utilizá-lo usando o <code>console.log()</code> e <code>console.error()</code>;</li>
        <li>Onde as mensagem do console devem aparecer dependendo do interpretador que estamos usando, sendo que para o NodeJS as mensagens são mostradas no terminal;</li>
        <li>A diferença entre fazer comparações com <code>==</code>, em que o JavaScript faz conversão entre os tipos de variáveis antes de fazer a comparação, e <code>===</code>, em que tanto o valor quanto o tipo da variável deve ser o mesmo;</li>
        <li>Como é escrito um operador ternário, com o qual fazemos uma comparação entre valores digitando um <code>?</code>, seguido da possibilidade true, um <code>:</code> e a possibilidade <code>false</code>, ou seja, <code>comparação ? true : false</code>;</li>
        <li>O porquê do nome “operador ternário”, que se deve ao fato de termos 3 operadores juntos em uma única linha para desempenhar uma tarefa e devolver um resultado;</li>
        <li>O uso da template literal, que facilita a construção de strings que demandam concatenação (a operação em que se junta 2 strings), e foi introduzido no ES6;</li>
        <li>Como usar a template literal, escrevendo o texto entre acentos graves () e colocando as variáveis com ${variavel} para que o valor deles fique nessa posição;</li>
        <li>O que são funções, pequenos trechos de código que podem ser executados uma ou mais vezes;</li>
        <li>As vantagens de se usar uma função, pois com elas conseguimos deixar o código mais curto e mais legível, facilitando a manutenção;</li>
        <li>Como retornar informações da função, utilizando o <code>return</code>, lembrando que o <code>console.log()</code> apenas mostra a informação no terminal e não para outras partes do código;</li>
        <li>A utilidade dos argumentos, já que com eles podemos passar variáveis para as funções poderem usar os valores;</li>
        <li>Que com o hoisting o JavaScript analisa todo o código procurando por variáveis declaradas com <code>var</code> e funções para trazer tais declarações para o início do código;</li>
        <li>Expressões de função, uma maneira diferente de montar funções usando variáveis do tipo const e chamando-as pelo nome. Lembrando que é necessário que o programa passe pela variável antes de podermos chamá-la, já que não há suporte à hoisting;</li>
        <li>Arrow function, uma função declarada de maneira mais compacta usando uma const. A arrow function também não tem suporte à hoisting.</li>
    </ul>
</section>

<section id="tecnologias">
    <h2 style="font-size: 1.25rem;">Tecnologias</h2>
    <ul>
        <li><a href="https://www.javascript.com/">JavaScript</a>.</li>
    </ul>
</section>

<section id="certificado">
    <h2 style="font-size: 1.25rem;">Certificado</h2>
    <p style="text-align: justify;">Veja o certificado que obtive no curso! Ou veja online <a href="https://cursos.alura.com.br/certificate/7fd38642-48c3-482b-9459-cd59c8c0cf19">aqui</a>.</p>
    <img src="Certificado de Conclusão JavaScript tipos, variáveis e funções.jpg">
</section>

<section id="autor">
    <h2 style="font-size: 1.25rem;">Autor</h2>
    <img src="foto.jpg" width="170">
    <p style="text-align: justify;"><i>Emanuel Marcos (E.Barboza)<i></p>
</section>
