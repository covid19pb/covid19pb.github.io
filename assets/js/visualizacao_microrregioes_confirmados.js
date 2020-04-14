var viewMicrorregioesConfirmados = {
	"$schema": "https://vega.github.io/schema/vega-lite/v4.json",
	"title": "Casos confirmados de Covid-19 por microrregiões",
	"width": 330,
	"height": 300,
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
				"micro","uf","meso","casos_suspeitos","casos_confirmados","curados","mortes"
			]
		}
	}],
	"mark": {
		"type": "geoshape",
		"stroke": "black"
	},
	"encoding": {
		"color": {
			"field": "casos_confirmados",
			"type": "quantitative", 
			"title": "Casos confirmados",
			"scale": {
				"domain" : [0, 1, 3, 5, 50, 140],
				"range": ["#F0F0F0", "#FFB000", "#FE6100", "#DC267F", "#785EF0","#648FFF"]
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
				"field": "casos_confirmados",
				"type": "quantitative",
				"title": "Casos confirmados: "
			},
			{
				"field": "mortes",
				"type": "quantitative",
				"title": "Mortes: "
			}
		]
	}
};vegaEmbed('#visualizacao_microrregioes_confirmados', viewMicrorregioesConfirmados);