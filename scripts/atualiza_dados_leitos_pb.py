from datetime import date
import csv
import requests
import os.path
import sys

def main(argv):

    csv_file = 'dados_pb_covid19_leitos.csv' if len(argv) == 0 else argv[0]

    data = date.today().strftime('%Y-%m-%d')

    r_uti = requests.get('https://superset.plataformatarget.com.br/superset/explore_json/?form_data=%7B%22slice_id%22%3A615%7D').json()
    uti_disponivel = r_uti['data'][0]['y']
    uti_ocupado = r_uti['data'][1]['y']
    uti_total = uti_disponivel + uti_ocupado

    r_enfermaria = requests.get('https://superset.plataformatarget.com.br/superset/explore_json/?form_data=%7B%22slice_id%22%3A620%7D').json()
    enfermaria_disponivel = r_enfermaria['data'][0]['y']
    enfermaria_ocupado = r_enfermaria['data'][1]['y']
    enfermaria_total = enfermaria_disponivel + enfermaria_ocupado

    leitos = {
        "data": data,
        "uti_disponivel": int(uti_disponivel),
        "uti_ocupado": int(uti_ocupado),
        "uti_total": int(uti_total),
        "enfermaria_disponivel": int(enfermaria_disponivel),
        "enfermaria_ocupado": int(enfermaria_ocupado),
        "enfermaria_total": int(enfermaria_total),
        "total_disponivel": int(uti_disponivel + enfermaria_disponivel),
        "total_ocupado": int(uti_ocupado + enfermaria_ocupado),
        "total": int(uti_total + enfermaria_total)
    }

    file_exists = os.path.isfile(csv_file)
    with open(csv_file, 'a') as csvfile:
            writer = csv.DictWriter(csvfile, fieldnames=leitos.keys())
            if not file_exists:
                writer.writeheader()
            writer.writerow(leitos)

if __name__ == "__main__":
   main(sys.argv[1:])