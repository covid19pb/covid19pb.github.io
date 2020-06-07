var viewLocalObito = {
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
	"encoding": {
		"x": {
			"axis": {
				"title": "Quantidade de óbitos",
				"labelFontSize": 12,
				"titleFontSize": 12
				},
				"field": "key",
			"type": "quantitative",
			"aggregate": "count"
		},
		"y": {
			"axis": {
				"labelFontSize": 12,
				"titleFontSize": 12,
				"title": null
			},
			"field": "key",
			"type": "nominal",
			"sort": "x"
		}
	},
	"layer": [
		{
			"mark": {
				"type": "bar",
				"cornerRadiusEnd": 4,
				"size": 30
			},
			"encoding": {
				"color": {
					"legend": null,
					"field": "key",
					"type": "nominal",
					"scale": {
						"domain": ["SAMU","Não Identificado","UPA", "Hospital Privado", "Hospital Público", "Maternidade Pública", "Residência"],
	  					"range": ["#FE0312","#FFBD00", "#FF5400", "#FF0054", "#9E0059", "#390099","#000000"]
					}
				},
				"opacity": {"value": 0.7}
			}
		},
		{
	  		"mark": {
	    		"type": "text",
	    		"align": "left",
	    		"baseline": "middle",
	    		"stroke": "black",
	    		"dx": 0,
	    		"fontSize": 15
	  		},
  			"encoding": {
		    	"text": {
		    		"field": "key",
		    		"type": "quantitative",
		    		"aggregate": "count"
		    	}
  			}
		}
	]
};
vegaEmbed('#visualizacao_local_obito', viewLocalObito);