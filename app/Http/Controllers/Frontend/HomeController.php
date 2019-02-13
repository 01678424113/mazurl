<?php

namespace App\Http\Controllers\Frontend;

use App\Libs\Helpers;
use App\Models\Admin;
use App\Models\ShortUrl;
use App\Models\Sing;
use App\Rules\Utf8StringRule;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;
use Illuminate\Validation\Rule;
use Validator;

class HomeController extends Controller
{
    public function index()
    {
        return view('frontend.page.index');
    }

    public function payoutRate()
    {
        return view('frontend.page.payout-rates');
    }

    public function paymentProof()
    {
        return view('frontend.page.payment-proof');
    }

    public function terms()
    {
        return view('frontend.page.terms');
    }

    public function privacy()
    {
        return view('frontend.page.privacy');
    }

    public function listArticle()
    {
        return view('frontend.page.article.list');
    }

    public function article($slug)
    {
        return view('frontend.page.article.article');
    }

    public function login()
    {
        return view('frontend.page.login');
    }

    public function doLogin(Request $request)
    {
        $credentials = $request->only('email', 'password');
        $credentials['status'] = Admin::$ACTIVE_STATUS;

        if (Auth::attempt($credentials)) {
            return redirect()->intended('/');
        }else{
            return redirect()->back()->with('error','Tài khoản không chính xác hoặc đã bị khóa');
        }
    }

    public function logout()
    {
    }

    public function register()
    {
        return view('frontend.page.register');
    }

    public function doRegister(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required', new Utf8StringRule(), 'min:2', 'max:191', Rule::unique('admins')],
            'email' => ['required', 'min:2', 'max:191', Rule::unique('admins')],
            'password' => 'required|nullable|confirmed',
        ]);
        if ($validator->fails()) {
            $error = Helpers::getValidationError($validator);
            return back()->with(['error' => $error])->withInput(Input::all());
        }
        $model = new Admin();
        $model->name = $request->name;
        $model->email = $request->email;
        $model->password = bcrypt($request->password);
        $model->status = Admin::$ACTIVE_STATUS;
        $model->amount = 0;
        $flag = $model->save();

        $model->assignRole('user');
        if ($flag) {
            return redirect()->route('loginView')->with('success', 'Tạo tài khoản thành công');
        }
        return redirect()->route('loginView')->with('error', 'Tạo tài khoản không thành công')->withInput(Input::all());
    }

    public function forgetPassword()
    {
        return view('frontend.page.forgot-pw');
    }

    public function doForgetPassword(Request $request)
    {

    }
    public function redirectStepOne($short_url_id)
    {
        $short_url = ShortUrl::where('id_url', $short_url_id)->first();

        if($short_url){
            if($short_url->status == ShortUrl::$ACTIVE){
                $short_url->view = $short_url->view + 1;
                $short_url->save();
                $root_url = $short_url->root_url;
                return view('frontend.page.redirect-1', compact('root_url'));
            }else{
                return redirect()->back()->with('error','Link has been looked');
            }
        }else{
            return redirect()->back()->with('error','Link not found');
        }
    }

    public function redirectLagu($api_youtube)
    {
        $sing = Sing::where('api_youtube',$api_youtube)->first();

        if (strpos($sing->urlgoc, 'laguaz.net') !== FALSE) {
            $root_url = 'http://dl.gudanglagu.info/video-to-mp3.php?api=' . $api_youtube;
        } else {
            $root_url = 'https://wapdownloadlagu.net' . '/download-mp3/' . $sing->api . '/' . $sing->name;
        }
        return view('frontend.page.redirect-1',compact('root_url'));
    }
}
