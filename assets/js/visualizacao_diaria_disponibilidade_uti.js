var viewDiariaDisponibilidadeUTI = {
	"$schema": "https://vega.github.io/schema/vega-lite/v4.json",
	"width": "container",
	"data": {"url": "https://raw.githubusercontent.com/covid19pb/covid19pb.github.io/master/data/dados_pb_covid19_leitos.csv"},
	"transform": [
	    {
	     	"fold": ["uti_ocupado","uti_disponivel"]
	    },
	    {
	    	"calculate": "if((datum.key === 'uti_disponivel'),'UTI Disponível',datum.key)",
	        "as": "key"
	    },
	    {
	     	"calculate": "if((datum.key === 'uti_ocupado'),'UTI Ocupado',datum.key)",
	        "as": "key"
	    },
	    {
	      	"calculate": "datum.uti_disponivel / datum.uti_total",
	      	"as": "percentual_uti_disponivel"
	    },
	    {
	      	"calculate": "datum.uti_ocupado / datum.uti_total",
	      	"as": "percentual_uti_ocupado"
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
		        "field" : "uti_disponivel",
		        "title" : "UTIs Disponíveis"
		    },
		    {
		        "type" : "quantitative",
		        "field" : "uti_ocupado",
		        "title" : "UTIs Ocupadas"
			},
			{
		        "type" : "quantitative",
		        "field" : "percentual_uti_disponivel",
		        "title" : "UTIs Disponíveis (%)",
		        "format": ".2%"
			},
			{
		        "type" : "quantitative",
		        "field" : "percentual_uti_ocupado",
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