function validateForm(form){
	var msg ="";
		
	/* Requisitante */

	if(form.getValue("nome") == ""){
		throw i18n.translate("validaNome");
	}
	if(form.getValue("email") == ""){
		msg += i18n.translate("validaEmail");
	}
	if(form.getValue("telefone") == ""){
		msg += i18n.translate("validaTelefone");
	}
	if(form.getValue("documentoIdentidade") == ""){
		msg += i18n.translate("validaDocumentoIdentidade");
	}
	if(form.getValue("dataNascimento") == ""){
		msg += i18n.translate("validaDataNascimento");
	}
	
	/* Responsaveis */
	
	var responsaveis = form.getChildrenIndexes("responsaveisTabela");
	
	if(responsaveis.length == 0) {
		msg += i18n.translate("validaResponsaveis");
	}
	
	/* Ponto Comercial */
	
	if(form.getValue("tipoPonto") == ""){
		msg += i18n.translate("validaTipoPonto");
	}
	if(form.getValue("segunda") != "on" && form.getValue("terca") != "on" && form.getValue("quarta") != "on" &&
		form.getValue("quinta") != "on" && form.getValue("sexta") != "on" && form.getValue("sabado") != "on" 
			&& form.getValue("domingo") != "on") {
		msg += i18n.translate("validaDiasFuncionamento");
	}
	if(form.getValue("cep") == ""){
		msg += i18n.translate("validaCep");
	}
	if(form.getValue("logradouro") == ""){
		msg += i18n.translate("validaLogradouro");
	}
	if(form.getValue("bairro") == ""){
		msg += i18n.translate("validaBairro");
	}
	if(form.getValue("cidade") == ""){
		msg += i18n.translate("validaCidade");
	}
	if(form.getValue("estado") == ""){
		msg += i18n.translate("validaEstado");
	}
	
	/* Financeiro */

	if(form.getValue("valor") == ""){
		msg += i18n.translate("validaValor");
	}

	if (msg != "")
	throw msg;
}
