var viewCidadesMortes = {
	"$schema": "https://vega.github.io/schema/vega-lite/v4.json",
	//"title": "Mortes de Covid-19 por cidades",
	"width": "container",
   "config": {
   	   "background": "transparent",
   	   "view": {"continuousWidth": 400, "continuousHeight": 300}   	   
  },
	"data": {
		"url": "https://raw.githubusercontent.com/covid19pb/covid19pb.github.io/master/data/paraiba/mapa_cidades_paraiba.json",
		"format": {
			"type": "topojson",
			"feature": "Munic"
		}
	},
	"transform": [
		{
		"lookup": "properties.codigo",
		"from": {
			"data": {
				"url": "https://raw.githubusercontent.com/covid19pb/covid19pb.github.io/master/data/paraiba/dados_pb_covid19_casosPorCidade.csv"
			},
			"key": "codigo",
			"fields": [
				"data","municipio","codigo","mesorregiao","microrregiao","confirmadosAcumulados","mortesAcumuladas"
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
				"domain" : [1, 10, 25, 50, 75, 100],
				"range": ["#F0F0F0", "#FFBD00", "#FF5400", "#FF0054", "#9E0059", "#390099","#000000"]
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
};
vegaEmbed('#visualizacao_cidades_mortes', viewCidadesMortes);