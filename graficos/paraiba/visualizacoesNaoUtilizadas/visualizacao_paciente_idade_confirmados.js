var viewPacienteIdadeConfirmado = { 
  "$schema": "https://vega.github.io/schema/vega-lite/v4.0.2.json",
   "width": "container",
   "title": "Confirmados por Faixa Etária",
     "data": {
     "url": "https://raw.githubusercontent.com/covid19pb/covid19pb.github.io/master/data/dados_pb_covid19_boletim_FaixaEtaria.csv"
   },
   "transform": [
     {
        "filter": {
          "field": "ultima_atualizacao",
          "equal" : "True"
        },
        "filter": {
          "field": "classificacao",
          "equal": "confirmados"
        }
     }
   ],
   "config": {
     "background": "transparent",
     "view": {"continuousWidth": 400, "continuousHeight": 300},
     "title": {"anchor": "middle", "fontSize": 14, "offset": 5, "orient": "top"}
   },
   "mark": "bar",
   "encoding": {
     "color": {"value": "#003366"},
     "tooltip": [
       {"type": "temporal", "field": "data", "title": "Data"},
       {"type": "quantitative", "field": "total", "title": "Quantidade"}
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
       "field": "total",
       "scale": {"zero": true}
     }
   }
};
vegaEmbed('#visualizacao_paciente_idade_confirmados', viewPacienteIdadeConfirmado);
