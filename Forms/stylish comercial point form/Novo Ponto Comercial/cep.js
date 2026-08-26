
// Quando o campo de CEP perder o foco (blur), executa a função
$("#cep").blur(function() {
    // Remove caracteres não numéricos ou pega o valor atual e faz a requisição para a API do ViaCEP
    $.getJSON("//viacep.com.br/ws/"+ $("#cep").val() +"/json/", function(dados) {
        
        // Preenche os campos do formulário automaticamente com os dados retornados pela API
        $("#logradouro").val(dados.logradouro); // Preenche o logradouro (rua, avenida, etc.)
        $("#bairro").val(dados.bairro);         // Preenche o bairro
        $("#cidade").val(dados.localidade);     // Preenche a cidade (localidade)
        $("#estado").val(dados.uf);             // Preenche o estado (UF)
        
    });
});
