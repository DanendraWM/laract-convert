import xlrd, pandas as pd
from googletrans import Translator
from datetime import datetime
import sys
nama_file=f'excel/{sys.argv[1]}'
df=pd.read_excel(f'{nama_file}.xlsx')
df.to_excel(f"{nama_file}.xls",index=False)
book = xlrd.open_workbook(f"{nama_file}.xls")
sh = book.sheet_by_index(0)
count_rows=sh.nrows
translator = Translator()
schedule_name=[]
program_desc=[]
date_start_time=[]
date_end_time=[]
for x in range(1, count_rows):
    durasi=x+1 
    schedule=sh.cell_value(rowx=x, colx=2)
    schedule=str(schedule).title() if type(schedule) == str else int(schedule)
    schedule_name.append(schedule)
    program=str(sh.cell_value(rowx=x, colx=5)).capitalize()
    translation = translator.translate(program, dest="id")
    program_desc.append(translation.text)
    date=xlrd.xldate.xldate_as_datetime(sh.cell_value(rowx=x, colx=0), book.datemode).strftime('%Y.%m.%d')
    start_time=datetime.strptime(sh.cell_value(rowx=x, colx=1),'%H:%M').strftime('%H:%M:%S')
    end_time=datetime.strptime(sh.cell_value(rowx=durasi, colx=1),'%H:%M').strftime('%H:%M:%S') if durasi < count_rows else "00:00:00"
    date_start_time.append(f"{date} {start_time}")
    date_end_time.append(f"{date} {end_time}")
data={
    "Schedule Name":schedule_name,
    "Start Time":date_start_time,
    "End Time":date_end_time,
    "Program Description":program_desc,
}
table=pd.DataFrame(data)
table.to_excel(f"{nama_file}_new.xls",index=False)
print(f'selesai dengan nama file : {nama_file}_new.xls')