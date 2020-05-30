function csvToTable(data){
	var allRows = data.split(/\r?\n|\r/);
	var table = "<table class='table table-bordered'>";

	table += "<thead class='thead-dark'>";
	table += "<tr>";

	//table += "<th scope='col'>Data</th>";
	// table += "<th scope='col'>Última atualização</th>";
	table += "<th scope='col'>Município</th>";
	// table += "<th scope='col'>Código</th>";
	// table += "<th scope='col'>Mesorregião</th>";
	// table += "<th scope='col'>Microregião</th>";
	table += "<th scope='col'>Confirmados</th>";
	table += "<th scope='col'>Mortes</th>";

	table += "</tr>";
	table += "</thead>";

	table += "<tbody>";

	for(var singleRow = 1; singleRow < allRows.length; singleRow++){

		table += "<tr>";
		var rowCells = allRows[singleRow].split(',');

		
		for(var rowSingleCell = 0; rowSingleCell < rowCells.length; rowSingleCell++){

			if((rowSingleCell === 2) || (rowSingleCell === 6) || (rowSingleCell === 7)){
				if(rowCells[6] >= 1){
					table += "<td>";
					table += rowCells[rowSingleCell];
					table += "</td>";	
				}
			}
		}

		table += "</tr>";

	}

	table += "</tbody>";
	table += "</table>";

	$("#tableCidades").append(table);

}

$.ajax({
	url: "https://raw.githubusercontent.com/covid19pb/covid19pb.github.io/master/data/dados_pb_covid19_casosPorCidade.csv",
	dataType: "text"
}).done(csvToTable);