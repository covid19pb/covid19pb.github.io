var viewMortesPorDiaPorFaixaEtaria = {
	"$schema": "https://vega.github.io/schema/vega-lite/v4.json",
	  "transform": [{"filter": "datum.classificacao === 'mortos'"}],
	  "width": "container",
	  "data": {
	    "url": "https://raw.githubusercontent.com/covid19pb/covid19pb.github.io/master/data/dados_pb_covid19_boletim_FaixaEtaria.csv"
	  },
	  "mark": "rect",
	  "encoding": {
	    "x": {
	      "timeUnit": "monthdate",
	      "field": "data",
	      "type": "ordinal",
	      "axis": {
	        "labelAngle": 315,
	          "labelFontSize": 12,
	          "title": "Data",
	          "titleFontSize": 14
	      }
	    },
	    "y": {
	      "field": "faixa_etaria",
	      "type": "nominal",
	      "title": "faixa etária",
	      "sort" : "descending",
	      "axis": {
	          "labelFontSize": 12,
	          "title": "Faixa Etária",
	          "titleFontSize": 14
	        }
	    },
	    "color": {
	      "field": "total",
	      "type": "quantitative",
	      "legend": {
	          "columns": 1,
	          "labelFontSize": 12,
	          "orient": "bottom",
	          "title": "Óbitos",
	          "titleFontSize": 14
	        },
	      "scale": {
					"type":"threshold",
					"domain" : [1, 10, 20, 30, 40, 50],
					"range": ["#F0F0F0", "#FFBD00", "#FF5400", "#FF0054", "#9E0059", "#390099","#000000"]
				}
	    }
	  }
};
vegaEmbed('#visualizacao_mortes_por_dia_por_faixa_etaria', viewMortesPorDiaPorFaixaEtaria);