var viewDiariaDisponibilidadeUTI = {
	"$schema": "https://vega.github.io/schema/vega-lite/v4.json",
	"width": "container",
	"data": {"url": "https://raw.githubusercontent.com/covid19pb/covid19pb.github.io/master/data/cidades/campina_grande/data/dados_diarios_cg_covid19.csv"},
	"transform": [
	    {
	     	"fold": ["utiOcupadas","utiDisponiveis"]
	    },
	    {
	    	"calculate": "if((datum.key === 'utiDisponiveis'),'UTI Disponível',datum.key)",
	        "as": "key"
	    },
	    {
	     	"calculate": "if((datum.key === 'utiOcupadas'),'UTI Ocupado',datum.key)",
	        "as": "key"
	    },
	    {
	      	"calculate": "datum.utiDisponiveis / datum.utiTotal",
	      	"as": "percentual_utiDisponiveis"
	    },
	    {
	      	"calculate": "datum.utiOcupadas / datum.utiTotal",
	      	"as": "percentual_utiOcupadas"
	    }
	],
	"mark" : {
		"type": "area",
		"opacity": 0.9
	},
	"encoding": {
		"tooltip" : [
		    {
		    	"type": "temporal",
		        "field": "data",
		        "title": "Data"
			},
			{
		    	"type" : "quantitative",
		        "field" : "utiDisponiveis",
		        "title" : "UTIs Disponíveis"
		    },
		    {
		        "type" : "quantitative",
		        "field" : "utiOcupadas",
		        "title" : "UTIs Ocupadas"
			},
			{
		        "type" : "quantitative",
		        "field" : "percentual_utiDisponiveis",
		        "title" : "UTIs Disponíveis (%)",
		        "format": ".2%"
			},
			{
		        "type" : "quantitative",
		        "field" : "percentual_utiOcupadas",
		        "title" : "UTIs Ocupadas (%)",
		        "format": ".2%"
		    }
		],
	    "x": {
			"timeUnit": "monthdate",
			"field": "data",
			"type": "temporal",
			"axis": {
				"labelAngle": 315,
				"labelFontSize": 12,
				"title": "Data",
				"titleFontSize": 14
	        }
	    },
	    "y": {
	    	"field": "value",
			"type": "quantitative",
			"axis": {
				"labelFontSize": 12,
				"title": "Total de UTIs",
				"titleFontSize": 14
	        }
	    },
	    "color": {
	    	"field": "key",
			"type": "nominal",
			"legend": {
				"columns": 1,
				"labelFontSize": 12,
				"orient": "bottom",
				"title": "Disponibilidade de UTI",
				"titleFontSize": 14
	      	},
	      	"scale": {
	        	"domain": ["UTI Disponível","UTI Ocupado"],
	        	"range": ["#1f77b4","#e60000"]
	        }
	    }
	}	
};
vegaEmbed('#visualizacao_diaria_disponibilidade_uti', viewDiariaDisponibilidadeUTI);