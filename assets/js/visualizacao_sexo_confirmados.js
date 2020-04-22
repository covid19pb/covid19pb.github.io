var viewSexoConfirmados = {
	"$schema": "https://vega.github.io/schema/vega-lite/v4.json",
	"data": {
		"url": "https://raw.githubusercontent.com/covid19pb/covid19pb.github.io/master/data/dados_pb_covid19_boletim_FaixaEtaria.csv"
	},
	"width": "container",
	"config": {
		"background": "transparent",
		"view": {"continuousWidth": 400, "continuousHeight": 300}
	},
	"transform": [
		{
	      "filter": "((datum.classificacao === 'confirmados') && (datum.ultima_atualizacao === 'True'))"
	    },
	    {
	      "fold": ["masculino", "feminino"]
	    },
	    {
	      "calculate": "if((datum.key === 'masculino'),'Masculino',datum.key)",
	      "as": "key"
	    },
	    {
	      "calculate": "if((datum.key === 'feminino'),'Feminino',datum.key)",
	      "as": "key"
	    }
	],
	"layer": [{
		"mark": {"type": "arc", "innerRadius": 40, "stroke": "#fff"}
	},{
		"mark": {
	    	"type": "text",
	    	"radiusOffset": 50,
	    	"fontSize": 50
	    },
	    "encoding": {
	    	"text": {
	        	"field": "value",
	        	"aggregate" : "sum",
	        	"type": "quantitative"
	      	}
	    }
	}],
	"encoding": {
		"theta": {
	    	"field": "value",
	    	"aggregate" : "sum",
	    	"type": "quantitative",
	    	"stack": true
	    },
	    "radius": {
	    	"field": "value",
	    	"aggregate" : "sum",
	    	"type": "quantitative",
	    	"scale": {
	        	"type": "sqrt",
	        	"zero": true,
	        	"range": [20, 100]
	      	}
	    },
	    "color": {
	      	"field": "key",
	      	"type": "nominal",
	      	"legend": {
	        	"labelFontSize": 16,
	        	"orient": "bottom",
	        	"title": "Sexo",
	        	"titleFontSize": 14
	      	},
	      	"scale": {
	        	"domain": ["Masculino", "Feminino"],
	        	"range": ["#1f77b4", "#dc56b4"]
	      	}
	    }
	},
	"view": {"stroke": null}
};vegaEmbed('#visualizacao_sexo_confirmados', viewSexoConfirmados);