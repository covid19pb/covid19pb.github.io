var viewCidades = {
	"$schema": "https://vega.github.io/schema/vega-lite/v4.json",
	"title": "Mapa do coronavírus na Paraíba",
	"width": 320,
	"height": 300,
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
				"name","uf","codigo","meso","micro","casos_suspeitos","casos_confirmados","curados","mortes"
			]
		}
	}],
	"mark": {
		"type": "geoshape",
		"stroke": "white"
	},
	"encoding": {
		"color": {
			"field": "casos_confirmados",
			"type": "quantitative", 
			"title": "Casos confirmados",
			"scale": {
				"range": ["#fae7cb","#ffac41", "#ff1e56", "#323232", "#000000"]
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
				"field": "casos_suspeitos",
				"type": "quantitative",
				"title": "Casos Suspeitos: "
			},
			{
				"field": "casos_confirmados",
				"type": "quantitative",
				"title": "Casos confirmados: "
			},
			{
				"field": "curados",
				"type": "quantitative",
				"title": "Curados: "
			},
			{
				"field": "mortes",
				"type": "quantitative",
				"title": "Mortes: "
			}
		]
	}
};
vegaEmbed('#visualizacao_cidades', viewCidades);