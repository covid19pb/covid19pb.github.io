var viewDiaria = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.0.2.json",
  "width": 300,
    "height": 200,
  "config": {
    "background": "transparent",
    "view": {"continuousWidth": 400, "continuousHeight": 300}
  },
  "data": {
    "url": "https://raw.githubusercontent.com/covid19pb/covid19pb.github.io/master/data/dados_pb_covid19_casosPorData.csv"
  },
  "mark": {
    "type": "line",
    "opacity": 0.8,
    "point": {"filled": false, "fill": "white"},
    "strokeWidth": 2.5
  },
  "encoding": {
    "color": {
      "type": "nominal",
      "field": "key",
      "legend": {
        "columns": 3,
        "labelFontSize": 12,
        "orient": "bottom",
        "title": "Tipos de Casos",
        "titleFontSize": 14
      },
      "scale": {
        "domain": ["Total de Casos", "Novos Casos", "Mortes"],
        "range": ["#ff8533", "#1f77b4", "#e60000"]
      }
    },
    "tooltip": [
      {"type": "quantitative", "field": "value", "title": "Número de Casos"},
      {"type": "temporal", "field": "data", "title": "Data"}
    ],
    "x": {
      "type": "temporal",
      "axis": {
        "labelAngle": 315,
        "labelFontSize": 12,
        "title": "Data",
        "titleFontSize": 14
      },
      "field": "data",
      "timeUnit": "monthdate"
    },
    "y": {
      "type": "quantitative",
      "axis": {
        "labelFontSize": 12,
        "title": "Número de Casos",
        "titleFontSize": 14
      },
      "field": "value"
    }
  },
  "transform": [
    {"fold": ["novosCasos", "totalDeCasos", "mortes"]},
    {
      "calculate": "if((datum.key === 'novosCasos'),'Novos Casos',datum.key)",
      "as": "key"
    },
    {
      "calculate": "if((datum.key === 'totalDeCasos'),'Total de Casos',datum.key)",
      "as": "key"
    },
    {
      "calculate": "if((datum.key === 'mortes'),'Mortes',datum.key)",
      "as": "key"
    }
  ]
};
vegaEmbed('#visualizacao_diaria', viewDiaria);