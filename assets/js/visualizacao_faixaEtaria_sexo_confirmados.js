var viewFaixaEtariaSexoConfirmados = {

  "$schema": "https://vega.github.io/schema/vega-lite/v4.0.2.json",
  "title": "Casos confirmados por Faixa Etária/Sexo",
  "spacing": 20,
  "config": {
    "background": "transparent",
    "view": {"continuousWidth": 400, "continuousHeight": 300},
    "title": {"anchor": "middle", "fontSize": 14, "offset": 5, "orient": "top"}
  },
  "data": {
    "url": "https://raw.githubusercontent.com/covid19pb/covid19pb.github.io/master/data/dados_pb_covid19_boletim_FaixaEtaria.csv"
  },
  "facet": {
    "row": {
      "type": "nominal",
      "field": "key",
      "header": {"labels": false, "title": ""},
      "sort": {"field": "key:N"}
    }
  },
  "spec": {
    "mark": "bar",
    "encoding": {
      "color": {
        "type": "nominal",
        "field": "key",
        "legend": {
          "labelFontSize": 12,
          "orient": "bottom",
          "title": "Sexo",
          "titleFontSize": 14
        },
        "scale": {
          "domain": ["Masculino", "Feminino"],
          "range": ["#1f77b4", "#dc56b4"]
        }
      },
      "tooltip": [
        {"type": "temporal", "field": "data", "title": "Data"},
        {"type": "nominal", "field": "key", "title": "Sexo"},
        {"type": "quantitative", "field": "value", "title": "Quantidade"}
      ],
      "x": {
        "type": "nominal",
        "axis": {
          "labelAngle": 315,
          "labelFontSize": 12,
          "title": "Faixa Etária",
          "titleFontSize": 14
        },
        "field": "faixa_etaria"
      },
      "y": {
        "type": "quantitative",
        "axis": {
          "labelFontSize": 12,
          "title": "Número de Casos",
          "titleFontSize": 14
        },
        "field": "value",
        "scale": {"zero": true}
      }
    },
    "width": 300,
    "height": 200,
    "transform": [
      {
        "filter": "((datum.classificacao === 'confirmados') && (datum.ultima_atualizacao === 'True'))"
      },
      {"fold": ["masculino", "feminino"]},
      {
        "calculate": "if((datum.key === 'masculino'),'Masculino',datum.key)",
        "as": "key"
      },
      {
        "calculate": "if((datum.key === 'feminino'),'Feminino',datum.key)",
        "as": "key"
      }
    ]
  }
};
vegaEmbed('#visualizacao_faixaEtaria_sexo_confirmados', viewFaixaEtariaSexoConfirmados);