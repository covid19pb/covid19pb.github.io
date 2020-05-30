var viewMicrorregioesConfirmados = {
	"$schema": "https://vega.github.io/schema/vega-lite/v4.json",
//	"title": "Casos confirmados de Covid-19 por microrregiões",
	"width": "container",
   "config": {
   	   "background": "transparent",
   	   "view": {"continuousWidth": 400, "continuousHeight": 300}   	   
  },
	"data": {
		"url": "https://raw.githubusercontent.com/covid19pb/covid19pb.github.io/master/data/mapa_micro_paraiba.json",
		"format": {
			"type": "topojson",
			"feature": "microrregioes"
		}
	},
	"transform": [
		{
		  "filter": "(datum.ultima_atualizacao === 'True')"
		},
		{
		"lookup": "properties.micro",
		"from": {
			"data": {
				"url": "https://raw.githubusercontent.com/covid19pb/covid19pb.github.io/master/data/dados_pb_covid19_casosPorMicro.csv"
			},
			"key": "micro",
			"fields": [
				"data","ultima_atualizacao","mesorregiao","microrregiao","confirmadosAcumulados","mortesAcumuladas"
			]
		}
	}],
	"mark": {
		"type": "geoshape",
		"stroke": "black"
	},
	"encoding": {
		"color": {
			"field": "confirmadosAcumulados",
			"type": "quantitative", 
			"title": "Confirmados acumulados",
			"scale": {
				"type":"threshold",
				"domain" : [1, 100, 250, 500, 1000, 2000],
				"range": ["#F0F0F0", "#FFBD00", "#FF5400", "#FF0054", "#9E0059", "#390099","#000000"]
			},
			"legend": {
				"direction" : "horizontal",
				"orient" : "bottom"
			}
		},
		"tooltip": [
			{
				"field": "properties.micro",
				"type": "nominal",
				"title": "Microrregião: "
			}, 
			{
				"field": "properties.meso",
				"type": "nominal",
				"title": "Mesorregião: "
			},
			{
				"field": "confirmadosAcumulados",
				"type": "quantitative",
				"title": "Confirmados acumulados: "
			},
			{
				"field": "mortesAcumuladas",
				"type": "quantitative",
				"title": "Mortesa acumuladas: "
			}
		]
	}
};vegaEmbed('#visualizacao_microrregioes_confirmados', viewMicrorregioesConfirmados);