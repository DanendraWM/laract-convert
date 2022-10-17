import xlrd, pandas as pd
from googletrans import Translator
import sys
nama_file=f'excel/{sys.argv[1]}'
book = xlrd.open_workbook(f'{nama_file}.xls')
sh = book.sheet_by_index(0)
count_rows=sh.nrows
translator = Translator()
program_desc=[]
for x in range(0, count_rows):
    program=str(sh.cell_value(rowx=x, colx=0))
    translation = translator.translate(program, dest="id")
    program_desc.append(translation.text)

data={"Auto translate Epg":program_desc}
table=pd.DataFrame(data)
table.to_excel(f"{nama_file}_new.xls",index=False,engine='openpyxl')
print(f'selesai dengan nama file : {nama_file}_new.xls')
