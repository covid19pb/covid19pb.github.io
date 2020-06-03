var viewDiariaMortesPorDia = {
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
                  "title": "Tipos de Casos",
                  "titleFontSize": 14
              },
              "scale": {
                  "domain": ["Mortes por dia"],
                  "range": ["#e60000"]
              }
          },
          "tooltip": [
              {"type": "temporal", "field": "data", "title": "Data"},
              {"type": "quantitative", "field": "mortesPorDia", "title": "Mortes por dia"},
              {"type": "quantitative", "field": "confirmadosAcumulados", "title": "Confirmados acumulados"},
              {"type": "quantitative", "field": "mortesAcumuladas", "title": "Mortes acumuladas"},
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
                  "title": "Número de Casos",
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
          "field": "mortesPorDia",
          "type": "quantitative",
          "aggregate": "mean"
        },
        "color": {"value": "black"},
        "size": {"value": 3},
        "tooltip": [
          {
            "field": "mortesPorDia",
            "type": "quantitative",
            "aggregate": "mean",
            "format": ".2f",
            "title": "Média de mortes diárias"
          }
        ]
      }
    }
  ],
    "transform": [
        {"fold": ["mortesPorDia"]},
        {
          "calculate": "if((datum.key === 'mortesPorDia'),'Mortes por dia',datum.key)",
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
        {
            "calculate": "datum.mortesAcumuladas / datum.confirmadosAcumulados", 
            "as": "taxa_letalidade"
        }
    ]
};
vegaEmbed('#visualizacao_diaria_mortes_por_dia', viewDiariaMortesPorDia);