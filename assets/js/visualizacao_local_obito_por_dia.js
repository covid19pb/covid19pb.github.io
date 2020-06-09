var viewLocalObitoPorDia = {
	"$schema": "https://vega.github.io/schema/vega-lite/v4.json",
	"data": {
		"url": "https://raw.githubusercontent.com/covid19pb/covid19pb.github.io/master/data/dados_pb_covid19_pacientes_mortes.csv"
  	},
  	"width": "container",
  	"height": "300",
    "config": {
    	"background": "transparent",
    	"view": {"continuousWidth": 400, "continuousHeight": 300}
    },
  	"transform": [
        {
          "calculate": "if((datum.localDoObito === ''),'Não Identificado',datum.key)",
          "as": "key"
        },
        {
          "calculate": "if((datum.localDoObito === 'SAMU'),'SAMU',datum.key)",
          "as": "key"
        },
		{
          "calculate": "if((datum.localDoObito === 'UPA'),'UPA',datum.key)",
          "as": "key"
        },
		{
          "calculate": "if((datum.localDoObito === 'hospital privado'),'Hospital Privado',datum.key)",
          "as": "key"
        },
		{
          "calculate": "if((datum.localDoObito === 'hospital público'),'Hospital Público',datum.key)",
          "as": "key"
        },
		{
          "calculate": "if((datum.localDoObito === 'maternidade pública'),'Maternidade Pública',datum.key)",
          "as": "key"
        },
		{
          "calculate": "if((datum.localDoObito === 'residência'),'Residência',datum.key)",
          "as": "key"
        }
	],
	"layer": [
		{
			"mark": {
				"type": "bar"
			},
			"encoding": {
				"y": {
					"axis": {
						"title": "Quantidade de óbitos",
						"labelFontSize": 12,
						"titleFontSize": 12
					},
					"field": "key",
					"type": "quantitative",
					"aggregate": "count",
					"sort":"-color"
				},
				"x": {
					"axis": {
						"labelAngle": 315,
						"labelFontSize": 12,
						"titleFontSize": 12,
						"title": null
					},
					"field": "dataDoInicioDosSintomas",
					"type": "temporal"
				},
				"color": {
					"legend": true,
					"field": "key",
					"type": "nominal",
					"scale": {
						"domain": ["SAMU","Não Identificado","UPA", "Hospital Privado", "Hospital Público", "Maternidade Pública", "Residência"],
	  					"range": ["#FE0312","#FFBD00", "#FF5400", "#FF0054", "#9E0059", "#390099","#000000"]
					}
				},
				"opacity": {"value": 0.7}
			}
		}
	]
};
vegaEmbed('#visualizacao_local_obito_por_dia', viewLocalObitoPorDia);