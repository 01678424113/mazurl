<?php

namespace App\Http\Controllers;

use App\Models\ShortUrl;
use App\Models\Sing;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;

class ShortUrlController extends Controller
{
    public function shortUrl(Request $request)
    {
        $string = substr(str_replace(['+', '/', '='], '', base64_encode(random_bytes(10))), 0, 5) . '_' . substr(str_replace(['+', '/', '='], '', base64_encode(random_bytes(5))), 0, 32) . rand(0, 100);
        $check = ShortUrl::where('id_url', $string)->first();
        while (!empty($check)) {
            $string = substr(str_replace(['+', '/', '='], '', base64_encode(random_bytes(10))), 0, 5) . '_' . substr(str_replace(['+', '/', '='], '', base64_encode(random_bytes(5))), 0, 32) . rand(0, 100);
            $check = ShortUrl::where('id_url', $string)->first();
            if (empty($check)) {
                break;
            }
        }

        $user = \Auth::user();
        $short_url = new ShortUrl();
        $short_url->user_id = (isset($user) ? $user->id : null);
        $short_url->root_url = $request->url;
        $short_url->id_url = $string;
        $short_url->view = 0;
        $short_url->title = '';
        $short_url->description = '';
        try {
            $short_url->save();
            $response = [
                'status' => 1,
                'text' => $short_url->id_url
            ];
        } catch (\Exception $e) {
            $response = [
                'status' => -1,
                'text' => $e->getMessage()
            ];
        }
        return $response;
    }

    public function index()
    {
        $data = ShortUrl::select('*')->cursor();
        return view('page.short_url.index', compact('data'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $model = ShortUrl::findOrFail($id);
        return view('page.short_url.edit', compact('model'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $short_url = ShortUrl::find($id);
        if ($short_url) {
            $short_url->status = (!empty($request->status) ? 1 : 0);
            $short_url->title = $request->title;
            $short_url->description = $request->description;
            $flag = $short_url->save();
        }
        if ($flag) {
            return redirect()->back()->with('success', 'Cập nhật Short URL thành công');
        }
        return redirect()->back()->with('error', 'Cập nhật Short URL không thành công')->withInput(Input::all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = \Auth::user();
        $model = ShortUrl::findOrFail($id);
        if ($model->user_id = $user->id) {
            $flag = $model->delete();
            if ($flag) {
                return back()->with('success', 'Xoá Short URL thành công');
            }
            return back()->with('error', 'Xoá Short URL không thành công');
        }
        return back()->with('error', 'Bạn không có quyền thực hiện hành động này');
    }

    public function myShortUrl()
    {
        $user = \Auth::user();
        $data = ShortUrl::select('*')->where('user_id', $user->id)->cursor();
        return view('page.short_url.index', compact('data'));
    }

    public function autoConvertShortUrl()
    {
        $sings = Sing::select('api_youtube')->get();
        $success = 0;
        $errors = 0;
        if (count($sings) > 0) {
            foreach ($sings as $sing) {
                $root_url = env('URL_API_DOWNLOAD_MP3') . $sing->api_youtube;

                $string = substr(str_replace(['+', '/', '='], '', base64_encode(random_bytes(10))), 0, 5) . '_' . substr(str_replace(['+', '/', '='], '', base64_encode(random_bytes(5))), 0, 32) . rand(0, 100);
                $check = ShortUrl::where('id_url', $string)->first();
                while (!empty($check)) {
                    $string = substr(str_replace(['+', '/', '='], '', base64_encode(random_bytes(10))), 0, 5) . '_' . substr(str_replace(['+', '/', '='], '', base64_encode(random_bytes(5))), 0, 32) . rand(0, 100);
                    $check = ShortUrl::where('id_url', $string)->first();
                    if (empty($check)) {
                        break;
                    }
                }

                $user = \Auth::user();
                $short_url = new ShortUrl();
                $short_url->user_id = (isset($user) ? $user->id : null);
                $short_url->root_url = $root_url;
                $short_url->api_youtube = $sing->api_youtube;
                $short_url->id_url = $string;
                $short_url->view = 0;
                $short_url->title = '';
                $short_url->description = '';
                try {
                    $short_url->save();
                    $success++;
                } catch (\Exception $e) {
                    $errors++;
                }
            }
        }
        echo 'Success: ' . $success . ' | Errors: ' . $errors;
    }

    public function cUrl($url)
    {
        $user_agent = 'Mozilla/5.0 (Windows NT 6.1; rv:8.0) Gecko/20100101 Firefox/8.0';

        $options = array(

            CURLOPT_CUSTOMREQUEST => "GET",        //set request type post or get
            CURLOPT_POST => false,        //set to GET
            CURLOPT_USERAGENT => $user_agent, //set user agent
            CURLOPT_COOKIEFILE => "cookie.txt", //set cookie file
            CURLOPT_COOKIEJAR => "cookie.txt", //set cookie jar
            CURLOPT_RETURNTRANSFER => true,     // return web page
            CURLOPT_HEADER => false,    // don't return headers
            CURLOPT_FOLLOWLOCATION => true,     // follow redirects
            CURLOPT_ENCODING => "",       // handle all encodings
            CURLOPT_AUTOREFERER => true,     // set referer on redirect
            CURLOPT_CONNECTTIMEOUT => 120,      // timeout on connect
            CURLOPT_TIMEOUT => 120,      // timeout on response
            CURLOPT_MAXREDIRS => 10,       // stop after 10 redirects
        );

        $ch = curl_init($url);
        curl_setopt_array($ch, $options);
        $content = curl_exec($ch);
        $err = curl_errno($ch);
        $errmsg = curl_error($ch);
        $header = curl_getinfo($ch);
        curl_close($ch);
        $header['errno'] = $err;
        $header['errmsg'] = $errmsg;
        $header['content'] = $content;
        return $content;
    }
}
