import xlrd, pandas as pd
from datetime import datetime
from googletrans import Translator
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
time_zero = datetime.strptime('00:00:00', '%H:%M:%S')
for x in range(2, count_rows):
    durasi=x+1
    schedule=sh.cell_value(rowx=x, colx=2)
    schedule=str(sh.cell_value(rowx=x, colx=2)).title() if type(schedule) == str else int(sh.cell_value(rowx=x, colx=2))
    schedule_name.append(schedule)
    program=str(sh.cell_value(rowx=x, colx=8)).capitalize()
    translation = translator.translate(program, dest="id")
    program_desc.append(translation.text)
    schedule_date=datetime.strptime(sh.cell_value(rowx=x, colx=3),'%d/%m/%Y').strftime('%Y.%m.%d')
    schedule_date_cont=datetime.strptime(sh.cell_value(rowx=x if durasi >= count_rows else durasi, colx=3),'%d/%m/%Y').strftime('%Y.%m.%d')
    xl_time=datetime.strptime(sh.cell_value(rowx=x, colx=4),'%H:%M') if len(sh.cell_value(rowx=x, colx=4)) != 8 else datetime.strptime(sh.cell_value(rowx=x, colx=4),'%H:%M:%S')
    xl_end=datetime.strptime(sh.cell_value(rowx=x, colx=5),'%H:%M') if len(sh.cell_value(rowx=x, colx=5)) != 8 else datetime.strptime(sh.cell_value(rowx=x, colx=5),'%H:%M:%S')
    start_time=xl_time.strftime('%H:%M:%S')
    end_time=(xl_time - time_zero + xl_end).time()
    end_date=schedule_date_cont if schedule_date!=schedule_date_cont else schedule_date
    date_start_time.append(f'{schedule_date} {start_time}')
    date_end_time.append(f'{end_date} {end_time}')
data={
    "Schedule Name":schedule_name,
    "Start Time":date_start_time,
    "End Time":date_end_time,
    "Program Description":program_desc,
}
table=pd.DataFrame(data)
table.to_excel(f"{nama_file}_new.xls",index=False,engine='openpyxl')
print(f'selesai dengan nama file : {nama_file}_new.xls')