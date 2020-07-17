var viewDiariaConfirmadosPorDia = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.0.2.json",
  "width": "container",
  "config": {
    "background": "transparent",
    "view": {"continuousWidth": 400, "continuousHeight": 300}
  },
  "data": {
    "url": "https://raw.githubusercontent.com/covid19pb/covid19pb.github.io/master/data/cidades/campina_grande/data/dados_diarios_cg_covid19.csv"
  },
  "layer": [
  {
    "mark": {
      "type": "bar",
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
          "domain": ["Confirmados por dia"],
          "range": ["#1f77b4"]
        }
      },
      "tooltip": [
        {"type": "temporal", "field": "data", "title": "Data"},
        {"type": "quantitative", "field": "confirmadosAcumulados", "title": "Confirmados acumulados"},
        {"type": "quantitative", "field": "ObitosAcumulados", "title": "Mortes acumuladas"},
        {"type": "quantitative", "field": "letalidade", "format": ".2%","title": "Taxa de letalidade"},
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
    }
  },
  {
    "mark": "line",
    "encoding": {
      "y": {
        "field": "media_movel",
        "type": "quantitative"
      },
      "x": {
        "type": "temporal",
        "field": "data",
        "timeUnit": "monthdate"
      },
      "color": {"value": "red"},
      "size": {"value": 3},
      "tooltip": [
        {
          "field": "media_movel",
          "type": "quantitative",
          "format": ".2f",
          "title": "Média móvel dos casos confirmados"
        }
      ]
    }
  }
],
  "transform": [
    {"fold": ["confirmadosPorDia"]},
    {
      "calculate": "if((datum.key === 'confirmadosPorDia'),'Confirmados por dia',datum.key)",
      "as": "key"
    },
    {
        "window": [
          {
            "field": "confirmadosPorDia",
            "op": "mean",
            "as": "media_movel"
          }
        ]
    }
  ]
};
vegaEmbed('#visualizacao_diaria_confirmados_por_dia', viewDiariaConfirmadosPorDia);