<h1> DIFERENÇAS ENTRE CONST, LET E VAR </h1>
<p> VAR pode ser acessado de qualquer lugar </p>
<p> let pode ser usado dentro de blocos de codigos </p>
<p> VAR tem escopo global ou de função enquanto let e const tem escopo de bloco (para uma boa explicação bloco é tudo que está dentro de chaves) </p>
<p> CONST não pode ser declarada novamente e nem ter seu valor modificado </p>
<h1> NULL e UNDEFINED </h1>
<p> null é a falta de valor, ou seja, não existe valor mesmo </p>
<p> undefined o valor não existe no compilador </p>
<p> NULL é considerado do tipo objeto </p>
<h1>CONVERSÕES</h1>
<p> Conversão pode sem implícita e explícita. Implícita o próprio javascript converte e explícita nós programdores convertemos a string </p>
<h1>CONSOLE</h1>
<p>console.error() => exibir um erro</p>
<p>console.table() => visualizar de forma mais organizada informações tabulares</p>
<p>console.time() e console.timeEnd() => temporizar o periodo de uma operação que o código leva para fazer </p>
<p>console.trace() => exibi stacktrace de todos os pontos, ou seja, por onde o código passou durante a execução</p>
<h1>EXPRESSÃO DEFUNÇÃO</h1>
<p>Usa-se const para não sobreescrever a função</p>
<p>Diferença principal é que as funções são listadas no topo (hoisting) permitindo que a funçao seja chamada mesm se for declarada mais para baixo no código. Hoisting só acontece para delcarações e não para inicializações. Já as variáveis devem sser declaradas antes de serem usadas</p>