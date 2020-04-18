var viewCidadesConfirmados = {
	"$schema": "https://vega.github.io/schema/vega-lite/v4.json",
	"title": "Casos confirmados de Covid-19 por cidades",
	"width": "container",
	"data": {
		"url": "https://raw.githubusercontent.com/covid19pb/covid19pb.github.io/master/data/mapa_cidades_paraiba.json",
		"format": {
			"type": "topojson",
			"feature": "Munic"
		}
	},
	"transform": [{
		"lookup": "properties.codigo",
		"from": {
			"data": {
				"url": "https://raw.githubusercontent.com/covid19pb/covid19pb.github.io/master/data/dados_pb_covid19_casosPorCidade.csv"
			},
			"key": "codigo",
			"fields": [
				"name","uf","codigo","meso","micro","casos_confirmados","curados","mortes"
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
				"domain" : [0, 3, 10, 20, 50, 150],
				"range": ["#F0F0F0", "#FFB000", "#FE6100", "#DC267F", "#785EF0", "#648FFF"]
			},
			"legend": {
				"direction" : "horizontal",
				"orient" : "bottom"
			}
		},
		"tooltip": [
			{
				"field": "properties.name",
				"type": "nominal",
				"title": "Município: "
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
				"field": "properties.micro",
				"type": "nominal",
				"title": "Microrregião: "
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
};
vegaEmbed('#visualizacao_cidades_confirmados', viewCidadesConfirmados);