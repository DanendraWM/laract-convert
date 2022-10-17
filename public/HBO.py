import xlrd, pandas as pd
from googletrans import Translator
import sys
nama_file=f'excel/{sys.argv[1]}'
book = xlrd.open_workbook(f'{nama_file}.xls')
sh = book.sheet_by_index(0)
count_rows=sh.nrows
translator = Translator()
schedule_name=[]
program_desc=[]
date_start_time=[]
date_end_time=[]
for x in range(1, count_rows):
    durasi=x+1
    schedule=sh.cell_value(rowx=x, colx=3)
    schedule=str(sh.cell_value(rowx=x, colx=3)).title() if type(schedule) == str else int(sh.cell_value(rowx=x, colx=3))
    schedule_name.append(schedule)
    program=str(sh.cell_value(rowx=x, colx=9)).capitalize()
    translation = translator.translate(program, dest="id")
    program_desc.append(translation.text)
    schedule_date=xlrd.xldate.xldate_as_datetime(sh.cell_value(rowx=x, colx=0), book.datemode).strftime('%Y.%m.%d')
    schedule_date_cont=xlrd.xldate.xldate_as_datetime(sh.cell_value(rowx=x if durasi >= count_rows else durasi, colx=0), book.datemode).strftime('%Y.%m.%d')
    start_time=xlrd.xldate.xldate_as_datetime(sh.cell_value(rowx=x, colx=1), book.datemode).strftime('%H:%M:%S')
    end_time=xlrd.xldate.xldate_as_datetime(sh.cell_value(rowx=x, colx=1)+sh.cell_value(rowx=x, colx=2), book.datemode).strftime('%H:%M:%S')
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
