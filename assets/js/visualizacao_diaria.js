var viewDiaria = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.0.2.json",
  "width": "container",
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
        "columns": 1,
        "labelFontSize": 12,
        "orient": "bottom",
        "title": "Tipos de Casos",
        "titleFontSize": 14
      },
      "scale": {
        "domain": ["Confirmados acumulados", "Confirmados por dia", "Mortes acumuladas"],
        "range": ["#ff8533", "#1f77b4", "#e60000"]
      }
    },
    "tooltip": [
      {"type": "temporal", "field": "data", "title": "Data"},
      {"type": "quantitative", "field": "confirmadosAcumulados", "title": "Confirmados acumulados"},
      {"type": "quantitative", "field": "mortesAcumuladas", "title": "Mortes acumuladas"},
      {"type": "quantitative", "field": "taxa_letalidade", "format": ".2%","title": "Taxa de letalidade"},
      {"type": "quantitative", "field": "confirmadosPorDia", "title": "Confirmados por dia"}
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
    {"fold": ["confirmadosPorDia", "confirmadosAcumulados", "mortesAcumuladas"]},
    {
      "calculate": "if((datum.key === 'confirmadosPorDia'),'Confirmados por dia',datum.key)",
      "as": "key"
    },
    {
      "calculate": "if((datum.key === 'confirmadosAcumulados'),'Confirmados acumulados',datum.key)",
      "as": "key"
    },
    {
      "calculate": "if((datum.key === 'mortesAcumuladas'),'Mortes acumuladas',datum.key)",
      "as": "key"
    },
    {"calculate": "datum.mortesAcumuladas / datum.confirmadosAcumulados", 
    "as": "taxa_letalidade"}
  ]
};
vegaEmbed('#visualizacao_diaria', viewDiaria);