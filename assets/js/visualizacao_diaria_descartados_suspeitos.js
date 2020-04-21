var viewDiariaDescartadosSuspeitos = {
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
        "domain": ["Descartados acumulados", "Suspeitos Notificados", "Suspeitos Internados"],
        "range": ["#1f77b4", "#ff8533", "#e60000"]
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
    {"fold": ["descartadosAcumulados", "suspeitosInternados", "notificacoesSuspeitos"]},
    {
      "calculate": "if((datum.key === 'descartadosAcumulados'),'Descartados acumulados',datum.key)",
      "as": "key"
    },
    {
      "calculate": "if((datum.key === 'notificacoesSuspeitos'),'Suspeitos Notificados',datum.key)",
      "as": "key"
    },
    {
      "calculate": "if((datum.key === 'suspeitosInternados'),'Suspeitos Internados',datum.key)",
      "as": "key"
    }
  ]
};
vegaEmbed('#visualizacao_diaria_descartados_suspeitos', viewDiariaDescartadosSuspeitos);