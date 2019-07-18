App Skill Test

Projeto em angular 8 para a apresentação de um dashboard com as skills pessoais.

Atividades

1. Responsividade do Dashboard de Skills
    
    Arrumar o layout dos cards de forma responsiva, para exibir em telas com breakpoint lg ou maiores com 3 cards, breakpoint md com 2 cards, e menores que md com 1.
    Referência dos breakpoints: https://github.com/angular/flex-layout/wiki/Responsive-API.

2. Funcionalidades do Card

    - A cada click no botão like, incrementar um contador e exibir a quantidade de likes
        - esse contador deve ser incrementado e salvo via api rest (pode utilizar a api do httpClient)
        - após o incremento de likes chegar no valor 5, deve ficar azul
        - após o incremento de likes chegar em um valor maior que 10, escolha uma cor de sua preferencia que não seja nem preto nem azul.
        - uma api rest já está integrada usando o https://github.com/angular/in-memory-web-api. Está configurado um delay de 5 segundos. 
        Por isso, implemente também algum tipo de loading amigável para informar o usuário do processamento da requisição.
    
    - no botão share, abrir uma nova aba no seu linkedin.

3. Design

    Essa tela está bem sem graça não? Bom, ta aí a chance de você mostrar seus dotes artísticos !
    Afinal, queremos encantar nossos clientes com a apresentação dessas skilss, portanto seja criativo, e fique a vontade para adicionar animações, cores, bordas, enfim, o que achar melhor para que essa tela fique mais apresentável.