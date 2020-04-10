var viewPacienteSexo = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.0.2.json",
  "title": "Casos confirmados por sexo",
  "width": 250,
  "height": 200,
  "config": {
    "background": "white",
    "view": {"continuousWidth": 400, "continuousHeight": 300}
  },
     "data": {
        "url": "https://raw.githubusercontent.com/covid19pb/covid19pb.github.io/master/data/dados_pb_covid19_casosPorPessoa.csv",
        "format": {"type": "csv"}
    },
  "mark": "bar",
  "encoding": {
    "color": {
      "type": "nominal",
      "field": "sexo",
      "legend": {"labelFontSize": 12, "title": "Sexo", "titleFontSize": 14},
      "scale": {
        "domain": ["Masculino", "Feminino", "Não divulgado"],
        "range": ["#1f77b4", "#dc56b4", "#ff9966"]
      }
    },
    "tooltip": [
      {"type": "nominal", "field": "sexo", "title": "Sexo"},
      {"type": "nominal", "field": "total", "title": "Quantidade"}
    ],
    "x": {
      "type": "nominal",
      "axis": {
        "labelAngle": 0,
        "labelFontSize": 12,
        "title": "Sexo",
        "titleFontSize": 14
      },
      "field": "sexo",
      "sort": {"field": "total", "op": "count", "order": "descending"}
    },
    "y": {
      "type": "quantitative",
      "axis": {
        "labelFontSize": 12,
        "title": "Número de Casos",
        "titleFontSize": 14
      },
      "field": "total",
      "scale": {"zero": true}
    }
  },
  "transform": [
    {
      "aggregate": [{"op": "count", "field": "sexo", "as": "total"}],
      "groupby": ["sexo"]
    },
    {
      "calculate": "if((datum.sexo === 'masculino'),'Masculino',datum.sexo)",
      "as": "sexo"
    },
    {
      "calculate": "if((datum.sexo === 'feminino'),'Feminino',datum.sexo)",
      "as": "sexo"
    },
    {
      "calculate": "if((datum.sexo === 'sexo não divulgado'),'Não divulgado',datum.sexo)",
      "as": "sexo"
    }
  ]
};
vegaEmbed('#visualizacao_paciente_sexo', viewPacienteSexo);
