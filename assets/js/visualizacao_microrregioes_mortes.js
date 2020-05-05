var viewMicrorregioesMortes = {
	"$schema": "https://vega.github.io/schema/vega-lite/v4.json",
//	"title": "Mortes de Covid-19 por microrregiões",
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
	"transform": [{
		"lookup": "properties.micro",
		"from": {
			"data": {
				"url": "https://raw.githubusercontent.com/covid19pb/covid19pb.github.io/master/data/dados_pb_covid19_casosPorMicro.csv"
			},
			"key": "micro",
			"fields": [
				"micro","uf","meso","suspeitosInternados","confirmadosAcumulados","recuperadosAcumulados","mortesAcumuladas"
			]
		}
	}],
	"mark": {
		"type": "geoshape",
		"stroke": "black"
	},
	"encoding": {
		"color": {
			"field": "mortesAcumuladas",
			"type": "quantitative", 
			"title": "Mortes acumuladas",
			"scale": {
				"type":"threshold",
				"domain" : [1, 2, 4, 7, 10, 50],
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
				"field": "properties.uf",
				"type": "nominal",
				"title": "UF: "
			},
			{
				"field": "properties.meso",
				"type": "nominal",
				"title": "Mesorregião: "
			},
						{
				"field": "mortesAcumuladas",
				"type": "quantitative",
				"title": "Mortes acumuladas: "
			},
			{
				"field": "confirmadosAcumulados",
				"type": "quantitative",
				"title": "Confirmados acumulados: "
			}
		]
	}
};vegaEmbed('#visualizacao_microrregioes_mortes', viewMicrorregioesMortes);