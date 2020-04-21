var viewPacienteIdade = {
"$schema": "https://vega.github.io/schema/vega-lite/v4.json",
"title": "Casos confirmados por Idade",
    "width": 300,
    "height": 200,
    "data": {
        "url": "https://raw.githubusercontent.com/covid19pb/covid19pb.github.io/master/data/dados_pb_covid19_casosPorPessoa.csv",
        "format": {"type": "csv"}
    },
  "config": {
    "background": "transparent",
    "view": {"continuousWidth": 400, "continuousHeight": 300},
    "title": {"anchor": "middle", "fontSize": 14, "offset": 5, "orient": "top"}
  },
  "mark": "bar",
  "encoding": {
    "color": {"value": "#003366"},
    "tooltip": [
      {
        "type": "quantitative",
        "aggregate": "count",
        "field": "idade",
        "title": "Quantidade"
      }
    ],
    "x": {
      "type": "quantitative",
      "axis": {
        "labelAngle": 0,
        "labelFontSize": 12,
        "title": "Idade",
        "titleFontSize": 14
      },
      "bin": {"maxbins": 10},
      "field": "idade"
    },
    "y": {
      "type": "quantitative",
      "aggregate": "count",
      "axis": {
        "labelFontSize": 12,
        "title": "Número de Casos",
        "titleFontSize": 14
      },
      "scale": {"zero": true}
    }
  },
  "transform": [
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
    },
    {
      "calculate": "if((datum.idade === 'idade não divulgada'),'Não divulgada',datum.idade)",
      "as": "idade"
    },
    {
      "calculate": "if((datum.idade === 'Idade não divulgada'),'Não divulgada',datum.idade)",
      "as": "idade"
    }
  ] 
};
vegaEmbed('#visualizacao_paciente_idade', viewPacienteIdade);