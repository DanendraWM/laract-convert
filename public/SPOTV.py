import xlrd, pandas as pd
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
for x in range(1, count_rows):
    durasi=x+1
    schedule=sh.cell_value(rowx=x, colx=8)
    schedule=str(schedule).title() if type(schedule) == str else int(schedule)
    program=str(sh.cell_value(rowx=x, colx=16)).capitalize()
    translation = translator.translate(program, dest="id")
    date_after_one_day=xlrd.xldate.xldate_as_datetime(sh.cell_value(rowx=durasi if durasi < count_rows else x, colx=1), book.datemode).strftime('%Y.%m.%d')
    date_ori=xlrd.xldate.xldate_as_datetime(sh.cell_value(rowx=x, colx=1), book.datemode).strftime('%Y.%m.%d') 
    date=date_ori if date_ori == date_after_one_day else date_after_one_day
    start_time=sh.cell_value(rowx=x, colx=3)
    end_time=sh.cell_value(rowx=durasi, colx=3) if durasi < count_rows else "00:00:00"
    schedule_name.append(schedule)
    program_desc.append(translation.text)
    date_start_time.append(f'{date_ori} {start_time}')
    date_end_time.append(f'{date} {end_time}')
data={
    "Schedule Name":schedule_name,
    "Start Time":date_start_time,
    "End Time":date_end_time,
    "Program Description":program_desc,
}
table=pd.DataFrame(data)
table.to_excel(f"{nama_file}_new.xls",index=False)
print(f'selesai dengan nama file : {nama_file}_new.xls')
