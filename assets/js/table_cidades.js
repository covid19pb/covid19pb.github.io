function csvToTable(data){
	var allRows = data.split(/\r?\n|\r/);
	var table = "<table class='table table-striped'>";

	for(var singleRow = 0; singleRow < allRows.length; singleRow++){
		if(singleRow === 0){
			table += "<thead>";
			table += "<tr>";
		} else {
			table += "<tr>";
		}

		var rowCells = allRows[singleRow].split(',');
		for(var rowSingleCell = 0; rowSingleCell < rowCells.length; rowSingleCell++){
			if(singleRow === 0){
				table += "<th>";
				table += rowCells[rowSingleCell];
				table += "</th>";
			} else {
				table += "<td>";
				table += rowCells[rowSingleCell];
				table += "</td>";
			}
		}

		if(singleRow === 0){
			table += "</tr>";
			table += "</thead>";
			table += "<tbody>";
		} else {
			table += "</tr>";
		}
	}

	table += "</tbody>";
	table += "</table>";

	$("#tableCidades").append(table);

}

$.ajax({
	url: "https://raw.githubusercontent.com/covid19pb/covid19pb.github.io/master/data/dados_pb_covid19_casosPorCidade.csv",
	dataType: "text"
}).done(csvToTable);