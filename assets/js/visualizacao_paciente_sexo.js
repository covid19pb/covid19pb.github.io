var viewPacienteSexo = {
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "title": "Classificação dos pacientes por sexo dos casos confirmados",
    "width": 300,
    "height": 200,
    "data": {
        "url": "https://raw.githubusercontent.com/covid19pb/covid19pb.github.io/master/data/dados_pb_covid19_casosPorPessoa.csv",
        "format": {"type": "csv"}
    },
    "mark": "bar",
    "encoding": {
        "x": {
            "field": "sexo",
            "type": "nominal"
        },
        "y": {
            "aggregate": "count",
            "field": "sexo",
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
        "tooltip": [{
            "aggregate": "count",
            "field": "sexo",
            "type" : "quantitative",
            "title" : "Quantidade de pacientes"
        }]
    }
};
vegaEmbed('#visualizacao_paciente_sexo', viewPacienteSexo);