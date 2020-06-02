var viewDiariaTestesPorDia = {
    "$schema": "https://vega.github.io/schema/vega-lite/v4.0.2.json",
    "width": "container",
    "config": {
      "background": "transparent",
      "view": {"continuousWidth": 400, "continuousHeight": 300}
    },
    "data": {
      "url": "https://raw.githubusercontent.com/covid19pb/covid19pb.github.io/master/data/dados_pb_covid19_casosPorData.csv"
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
            "title": "Testes de covid-19",
            "titleFontSize": 14
          },
          "scale": {
            "domain": ["Testes por dia"],
            "range": ["#1f77b4"]
          }
        },
        "tooltip": [
          {"type": "temporal", "field": "data", "title": "Data"},
          {"type": "quantitative", "field": "testesPorDia", "title": "Testes por dia"},
          {"type": "quantitative", "field": "testesAcumulados", "title": "Testes acumulados"},
          {"type": "quantitative", "field": "taxa_letalidade", "format": ".2%","title": "Taxa de letalidade"}
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
            "title": "Número de Testes de covid-19",
            "titleFontSize": 14
          },
          "field": "value"
        }
      }
    },
    {
      "mark": "rule",
      "encoding": {
        "y": {
          "field": "testesPorDia",
          "type": "quantitative",
          "aggregate": "mean"
        },
        "color": {"value": "red"},
        "size": {"value": 2}
      }
    }
  ],
    "transform": [
      {"fold": ["testesPorDia"]},
      {
        "calculate": "if((datum.key === 'testesPorDia'),'Testes por dia',datum.key)",
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
      "as": "taxa_letalidade"
      }
    ]
};
vegaEmbed('#visualizacao_diaria_testes_por_dia', viewDiariaTestesPorDia);