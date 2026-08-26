
function validateForm(form){
	var msg ="";
		
	/* Requisitante */

		
	if(form.getValue("nome") == ""){
		throw "campo nome não foi preenchido.";
	}
	if(form.getValue("email") == ""){
		msg += "campo Email não foi preenchido.";
	}
	if(form.getValue("telefone") == ""){
		msg += "campo Telefone não foi preenchido.";
	}
	if(form.getValue("documentoIdentidade") == ""){
		msg += "campo Documento de Identidade não foi preenchido.";
	}
	if(form.getValue("dataNascimento") == ""){
		msg += "campo Data de Nascimento não foi preenchido.";
	}
	
	/* Responsaveis */
	
	var responsaveis = form.getChildrenIndexes("responsaveisTabela");
	
	if(responsaveis.length == 0) {
		msg += " O campo Responsáveis não foi informado.";
	}
	
	/* Ponto Comercial */
	
	if(form.getValue("tipoPonto") == ""){
		msg += "campo Tipo de Ponto não foi preenchido.";
	}
	if(form.getValue("segunda") != "on" && form.getValue("terca") != "on" && form.getValue("quarta") != "on" &&
		form.getValue("quinta") != "on" && form.getValue("sexta") != "on" && form.getValue("sabado") != "on" 
			&& form.getValue("domingo") != "on") {
		msg += "Campo Dias de Funcionamento não foi informado."
	}
	if(form.getValue("Cep") == ""){
		msg += "campo Cep não foi preenchido.";
	}
	if(form.getValue("logradouro") == ""){
		msg += "campo Logradouro não foi preenchido.";
	}
	if(form.getValue("Bairro") == ""){
		msg += "campo Bairro não foi preenchido.";
	}
	if(form.getValue("Cidade") == ""){
		msg += "campo Cidade não foi preenchido.";
	}
	if(form.getValue("Estado") == ""){
		msg += "campo Estado não foi preenchido.";
	}
	
	/* Financeiro */

	if(form.getValue("valor") == ""){
		msg += "campo Valor não foi preenchido.";
	}

	
	if (msg != "")
	throw msg;
}
