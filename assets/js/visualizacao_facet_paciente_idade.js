var viewFacetPacienteIdade = {
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "title": "Classificação por idade divididos pelo sexo",
    "width": 250,
    "height": 200,
    "data": {
        "url": "https://raw.githubusercontent.com/covid19pb/covid19pb.github.io/master/data/dados_pb_covid19_casosPorPessoa.csv",
        "format": {"type": "csv"}
    },
    "mark": "bar",
    "encoding": {
        "x": {
            "bin": {"maxbins": 10},
            "field": "idade",
            "type": "quantitative",
            "title" : "idade"
        },
        "y": {
            "aggregate": "count",
            "type": "quantitative",
            "title" : "Quantidade de casos"
        },
        "color": {
            "field": "sexo",
            "type": "nominal",
            "legend": {
                "direction" : "horizontal",
                "orient" : "bottom"
            }
        },
        "row": {"field": "sexo", "type": "nominal"},
        "tooltip": [{
            "aggregate": "count",
            "field": "idade",
            "type" : "quantitative",
            "title" : "Quantidade de pacientes"
        }]
    }
};
vegaEmbed('#visualizacao_facet_paciente_idade', viewFacetPacienteIdade);