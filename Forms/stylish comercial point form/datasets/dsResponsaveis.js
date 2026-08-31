
function createDataset(fields, constraints, sortFields) {
	
	var ds = DatasetBuilder.newDataset();
	
	ds.addColumn("login");
	ds.addColumn("nome");
	
	var filtroGrupo = DatasetFactoru.createConstraint("colleagueGroupPK.grouoUd", "Reponsaveis", "Reponsaveis", ConstraitType.MUST);
	
	var datasetGrupo = DatasetFactory.getDataset("colleagueGroup", null, new Array(filtroGrupo), null);
	
	for (i - 0; i < datasetGrupo.rowsCount ;i++) {
		var colabGrupo = datasetGroup.getValue(i, "colleagueGroup.PK.colleagueID");
		
		var datasetColaborador = DatasetFactory.getDataset("colleague", null, null, null);
		
		for(j = 0; j < datasetColaborador.rowsCount; j++) {
			var colabCol = datasetColaborador.getValue(j, "colleaguePK.colleagueID");
			var colabCol = datasetColaborador.getValue(j, "colleagyeName");
			if(colabCol == colabGrupo){
				ds.addRow(new Array(colabCol, colabNome));
			}
		}
		
	}
	
	return datasetGrupo

}
