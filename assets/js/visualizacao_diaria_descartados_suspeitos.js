var viewDiariaDescartadosSuspeitos = {
	"$schema": "https://vega.github.io/schema/vega-lite/v4.json",
	"width": 300,
	"height": 200,
	"data": {
		"url": "https://raw.githubusercontent.com/covid19pb/covid19pb.github.io/master/data/dados_pb_covid19_casosPorData.csv",
		"format": {"type": "csv"}
	},
	"transform": [{"fold": ["casosDescartados", "casosSuspeitos"]}],
	"mark": {
		"type": "line",
		"point": {
			"filled": false,
			"fill": "white"
		}
	},
	"encoding": {
		"x": {
			"field": "data",
			"type": "temporal",
			"timeUnit": {
			    "unit": "monthdate"
			},
			"axis": {
				"title": "Data (em dias)",
				"grid": true
			}
		},
		"y": {
			"field": "value",
			"type": "quantitative",
			"axis": {
				"title": "Quantidade de casos",
				"grid": true
			}
		},
		"color": {
			"field": "key",
			"type": "nominal",
			"title":"Tipos de casos",
			"legend": {
				"direction" : "horizontal",
				"orient" : "bottom"
			}
		},
		"tooltip": [
		{
			"field": "value",
			"type" : "quantitative",
			"title" : "Quantidade de casos"
		},
		{
			"field": "data",
			"type" : "temporal",
			"title" : "Data"
		}
		]
	}
				  
};
vegaEmbed('#visualizacao_diaria_descartados_suspeitos', viewDiariaDescartadosSuspeitos);