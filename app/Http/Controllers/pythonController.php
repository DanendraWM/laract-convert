<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use App\Models\converter;
use App\Http\Resources\ConverterCollection;
class pythonController extends Controller
{
    public function index() {
        $convertColl= new ConverterCollection(converter::orderBy('title','ASC')->paginate(6));
        $converter=converter::orderBy('title', 'ASC')->get();
        return Inertia::render('HomePage',compact('converter','convertColl'))->with('message','tst 123 pesan ini');
        // return $converter;
    }
    public function convertPost(request $request,$nama_script)
    {
        $request->validate([
            'file' => [ 'max:5000','required'],
        ], [
            'file.required'=>'File harus terisi',
            // 'file.mimes' => 'file convert harus: excel',
            'file.max'=>'file tidak boleh lebih dari 5mb'
        ]);
        $file=$request->file;
        $original_filename=$request->file->getClientOriginalName();
        $filename = Str::slug(pathinfo($original_filename, PATHINFO_FILENAME),'_');
        $extension = pathinfo($original_filename, PATHINFO_EXTENSION);
        $nama_file=$filename.'.'.$extension;
        $new_nama_file=Str::slug($filename,'_').'_new.'.$extension;
        $file_new=Str::slug($filename,'_').'_new';
        $file->move(public_path('excel'),$nama_file);
        $command = escapeshellcmd('python '.$nama_script.'.py '.$filename);
        $output = shell_exec($command);
        unlink(public_path('excel') . '\\' . $nama_file);
        // ($extension == "xlsx") ? unlink(public_path('excel') . '\\' . $filename.'.xls'):false;
        if (!file_exists( public_path('excel/'.$file_new.'.xls'))){
            $file_new=false;
            return inertia::render('ConvertPage',compact('file_new'))->with('message','Terjadi kesalahan :( , Gagal convert file');
        }
        return inertia::render('ConvertPage',compact('file_new'))->with('message','Convert file berhasil :) ');
    }
    public function convert($nama_script)
    {
        return Inertia::render('ConvertPage',compact('nama_script'));
    }
    public function test()
    {
        return !file_exists( public_path('excel/11063_new.xls') ) ? "ga ada":"ada";
    }     
}
