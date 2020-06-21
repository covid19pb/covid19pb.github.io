var viewDiariaMortesRecuperados = {
    "$schema": "https://vega.github.io/schema/vega-lite/v4.0.2.json",
    "width": "container",
    "config": {
        "background": "transparent",
        "view": {"continuousWidth": 400, "continuousHeight": 300}
    },
    "data": {
        "url": "https://raw.githubusercontent.com/covid19pb/covid19pb.github.io/master/data/cidades/campina_grande/data/dados_diarios_cg_covid19.csv"
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
                "domain": ["Recuperados acumulados", "Mortes acumuladas"],
                "range": ["#1f77b4", "#e60000"]
            }
        },
        "tooltip": [
            {"type": "temporal", "field": "data", "title": "Data"},
            {"type": "quantitative", "field": "recuperadosAcumulados", "title": "Recuperados acumulados"},
            {"type": "quantitative", "field": "ObitosAcumulados", "title": "Mortes acumuladas"}
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
        {"fold": ["recuperadosAcumulados", "ObitosAcumulados"]},
        {
            "calculate": "if((datum.key === 'recuperadosAcumulados'),'Recuperados acumulados',datum.key)",
            "as": "key"
        },
        {
            "calculate": "if((datum.key === 'ObitosAcumulados'),'Mortes acumuladas',datum.key)",
            "as": "key"
        }
    ]
};
vegaEmbed('#visualizacao_diaria_mortes_recuperados', viewDiariaMortesRecuperados);