<!DOCTYPE html>
<html lang="vi">

<!-- Mirrored from vinaurl.com/auth/signin by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 13 Nov 2018 10:21:53 GMT -->
<!-- Added by HTTrack -->
<meta http-equiv="content-type" content="text/html;charset=UTF-8"/><!-- /Added by HTTrack -->
<head>
    <meta charset="utf-8"/>
    <title>{{env('APP_NAME')}}</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <base href="{{asset('')}}">
    <meta name="description"
          content="VinaURL.com - Rút gọn link kiếm tiền, thanh toán nhanh gọn, rate cao nhất Việt Nam">
    <link href="frontend/img/favicon.ico" type='image/x-icon' rel='icon'/>
    <link href='frontend/img/favicon.ico' type='image/x-icon' rel='shortcut icon'/>
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700%7CMuli:300,300i,400" rel="stylesheet">
    <link rel="stylesheet" href="frontend/build/css/styles.min3c21.css?ver=5.1.1"/>
    <link rel="stylesheet" href="frontend/build/css/dashboard.min3c21.css?ver=5.1.1"/>
    <link rel="stylesheet" href="assets/build/js/bootstrap-toastr/toastr.min.css">
    @yield('style')
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body class="hold-transition login-page">
<div class="login-box">
    <div class="login-logo">
        <a href="">{{env('APP_NAME')}}</a>
    </div>

    <div class="login-box-body">
        <form method="post" accept-charset="utf-8" id="forgotpassword-form"
              action="{{route('doForgetPasswordView')}}">
            @csrf
            <p>Fill email</p>
            <div class="form-group email  required"><input type="email" name="email" placeholder="Email"
                                                           class="form-control" required="required" maxlength="254"
                                                           id="email" value=""/></div>
            <div class="form-group captcha">
                <div id="captchaForgotpassword" style="display: inline-block;"></div>
            </div>
            <button class="btn btn-primary btn-block btn-flat btn-captcha" id="invisibleCaptchaForgotpassword"
                    type="submit">Send
            </button>
        </form>
    </div>
</div>

<footer>
    <div class="container text-center">
    </div>
</footer>
<script src="frontend/build/js/ads.js"></script>
<script src="frontend/build/js/script.min3c21.js?ver=5.1.1"></script>
<script async src="frontend/build/js/jquery.session.js"></script>
<script async src="frontend/build/js/jquery.cookie.js"></script>
<script>
    var url_href = window.location.href
    if (url_href.substr(-1) === '#') {
        history.pushState('', document.title, url_href.substr(0, url_href.length - 1))
    }
</script>

<script src="assets/build/js/bootstrap-toastr/toastr.min.js"></script>
<script type="text/javascript">
    toastr.options = {
        closeButton: true,
        debug: false,
        positionClass: "toast-bottom-right",
        onclick: null,
        showDuration: "1000",
        hideDuration: "1000",
        timeOut: "5000",
        extendedTimeOut: "1000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut"
    };
    @if (Session::has('error'))
        toastr['error']('{!! Session::get("error") !!}');
    @elseif(Session::has('success'))
        toastr['success']('{!! Session::get("success") !!}');
    @elseif(Session::has('warning'))
        toastr['warning']('{!! Session::get("warning") !!}');
    @endif
</script>
</body>

<!-- Mirrored from vinaurl.com/auth/signin by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 13 Nov 2018 10:21:56 GMT -->
</html>
