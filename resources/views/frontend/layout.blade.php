<?php
if (!$_SERVER['HTTPS']) {
    header("Location: https://" . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']);
}
?>
<!DOCTYPE html>
<html lang="vi">

<!-- Mirrored from vinaurl.com/ by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 13 Nov 2018 10:21:27 GMT -->
<!-- Added by HTTrack -->
<meta http-equiv="content-type" content="text/html;charset=UTF-8"/><!-- /Added by HTTrack -->
<head>
    <meta charset="utf-8"/>
    <title>MAZURL.COM</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="google-site-verification" content="1Lw2ir9yWifENhBMiK2PC-NB6j6gRluI7K7Y2mPMfYk" />
    <base href="{{asset('')}}">
    <meta name="description"
          content="VinaURL.com - Rút gọn link kiếm tiền, thanh toán nhanh gọn, rate cao nhất Việt Nam">
    <link href="frontend/img/favicon.ico" type='image/x-icon' rel='icon'/>
    <link href='frontend/img/favicon.ico' type='image/x-icon' rel='shortcut icon'/>
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700%7CMuli:300,300i,400" rel="stylesheet">
    <link rel="stylesheet" href="frontend/build/css/styles.min3c21.css?ver=5.1.1"/>
    <link rel="stylesheet" href="assets/build/js/bootstrap-toastr/toastr.min.css">
    @yield('style')
    <!--[if lt IE 9]> 
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <script src='https://www.google.com/recaptcha/api.js?hl=vi'></script>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-111374639-3"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-111374639-3');
    </script>

</head>
<body class="home" onscroll="checkScrollTop()">

<nav id="mainNav" class="navbar navbar-default navbar-fixed-top">
    <div class="container">

        <div class="navbar-header page-scroll">
            <button type="button" class="navbar-toggle" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand " href="">{{env('APP_NAME')}}</a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
                <li>
                    <a href="{{route('homeView')}}">HOME</a>
                </li>
                <li>
                    <a href="{{route('payoutRate')}}">PAYOUT RATES</a>
                </li>
                <li>
                    <a href="{{route('paymentProof')}}">PAYMENT PROOF</a>
                </li>
                <li>
                    <a href="{{route('listArticle')}}">BLOG</a>
                </li>

                @if(Auth::user())
                    <li class="dropdown language-selector">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                           aria-expanded="false">Hi, {{Auth::user()->name}} <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li>
                                <a href="{{ route('logout') }}"
                                   onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                    <i class="fa fa-sign-out pull-right"></i>{{ __('Logout') }}</a>
                                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                    @csrf
                                </form>
                            <li>
                        </ul>
                    </li>
                @else
                    <li>
                        <a href="{{route('loginView')}}">SIGN IN</a>
                    </li>
                    <li>
                        <a href="{{route('registerView')}}">SIGN UP</a>
                    </li>
                    <li class="dropdown language-selector">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                           aria-expanded="false"><i class="fa fa-language"></i> <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li>
                                <a href="">English (United States)</a></li>
                            <li>
                        </ul>
                    </li>
                @endif
            </ul>
        </div>

    </div>

</nav>


@yield('content')

<footer>
    <div class="payment-methods">
        <div class="container text-center">
            <img src="frontend/img/Payment-Methods.png" alt=""/></div>
    </div>
    <div class="copyright-container">
        <div class="hidden-sm hidden-md hidden-xs" style="position: absolute; left: 20px; margin-top:5px; color:#fff"><a
                    href="https://vnbit.org/coinex">► Trade coin</a></div>
        <div class="container">
            <div class="row">
                <div class="col-sm-4 bottom-menu">
                    <ul class="list-inline">
                        <li><a href="{{route('privacy')}}">PRIVACY</a>
                        </li>
                        <li><a href="{{route('terms')}}">TERMS</a>
                        </li>
                    </ul>
                </div>
                <div class="col-sm-4 social-links">
                    <ul class="list-inline">
                        <li><a href=""><i
                                        class="fa fa-facebook"></i></a></li>
                        <li><a href=""><i class="fa fa-twitter"></i></a>
                        </li>
                        <li><a href=""><i class="fa fa-google-plus"></i></a>
                        </li>
                    </ul>
                </div>
                <div class="col-sm-4 copyright">
                    <div>Copyright &copy; {{env('APP_NAME')}} 2018</div>
                </div>
            </div>
        </div>
    </div>
</footer>
<script src="/js/test.js"></script>
<script async src="frontend/build/js/jquery.session.js"></script>
<script async src="frontend/build/js/jquery.cookie.js"></script>
<script async src="frontend/build/js/checkit.min.js"></script>
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

<script>
   /* $(document).ready(function () {
        if (checkit.Browser.UCBrowser()) {
            $('#link-view').replaceWith('<a href="https://bit.ly/2K438Ka"><img src="frontend/build/img/ucbrowser.png"></a><br /><br /><a href="https://vnbit.org/aliniex">Mua Bitcoin ngay hôm nay!</a>');
        }
        else {
            return true;
        }
        ;
    });*/
    function checkScrollTop() {
        var top = $(window).scrollTop();
        if(top > 100){
            $('.navbar-default').css('background','#659571')
        }else{
            $('.navbar-default').css('background','transparent')
        }
    }
</script>
@yield('script')
</body>

</html>
