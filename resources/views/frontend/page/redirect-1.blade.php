@extends('frontend.layout')
@section('content')
    <header>
        <div class="section-inner">
            <div class="container">
                <div class="intro-text" style="padding-top: 50px;padding-bottom: 50px;">
                </div>
            </div>
        </div>
    </header>
    <section class="blog">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="box-main">
                        <div class="row">
                            <div align="center">
                                <div class="row">
                                    <div class="col-md-12">
                                        <script async
                                                src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                                        <!-- autoa -->
                                        <ins class="adsbygoogle"
                                             style="display:flex;margin: auto;max-width: 500px"
                                             data-ad-client="ca-pub-3002075943322489"
                                             data-ad-format="auto"></ins>
                                        <script>
                                            (adsbygoogle = window.adsbygoogle || []).push({});
                                        </script>
                                    </div>
                                </div>


                                <form method="post" accept-charset="utf-8" id="link-view" action="">
                                    <br>
                                    <div class="col-md-12">
                                        <div class="g-recaptcha" style="height: 100px;"
                                             data-sitekey="6LcuI3wUAAAAAEMQJW2R4T6ifAkFp6EAmwimnNsU"
                                             data-callback="imNotARobot"></div>
                                    </div>

                                    <div class="col-md-12">
                                        <script async
                                                src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                                        <!-- autoa -->
                                        <ins class="adsbygoogle"
                                             style="display:flex;margin: auto;max-width: 500px"
                                             data-ad-client="ca-pub-3002075943322489"
                                             data-ad-format="auto"></ins>
                                        <script>
                                            (adsbygoogle = window.adsbygoogle || []).push({});
                                        </script>
                                    </div>
                                    <a href="{{$root_url}}" class="btn btn-primary btn-captcha"
                                       style="margin-top: 10px"
                                       id="invisibleCaptchaShortlink"
                                       onmousemove="" type="submit" disabled="disabled">Keep moving later <span
                                                id="count">5</span>
                                    </a>
                                    <div class="col-md-12">
                                        <script async
                                                src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                                        <!-- autoa -->
                                        <ins class="adsbygoogle"
                                             style="display:flex;margin: auto;max-width: 800px;margin-top: 15px"
                                             data-ad-client="ca-pub-3002075943322489"
                                             data-ad-format="auto"></ins>
                                        <script>
                                            (adsbygoogle = window.adsbygoogle || []).push({});
                                        </script>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div style="margin-bottom:20px; font-size:13px" align="center">
                        Create an account or log into Facebook. Connect with friends, family and other people you know.
                        Share photos and videos, send messages and get updates.
                    </div>
                    <div class="alert alert-danger" align="center">
                        <a href="" class="alert-danger" style="font-weight:bold">
                            BITCOIN 2018
                        </a>
                    </div>
                    <div class="text-left" style="margin-bottom:20px; text-align:justify">
                        <h3>What is MAZURL?</h3>
                        <p>
                            MAZURL is a completely free tool, where you can shorten the link, in addition to free, you
                            get paid. So now you can make money at home, when managing and protecting your links.</p>

                        <h3>Short url and make money</h3>
                        <p>Signup for an account in just 2 minutes. Once you've completed your registration just start
                            '.
                            'creating short URLs and sharing the links with your family and friends.</p>
                    </div>

                </div>
                <div class="col-md-12">
                    <script async
                            src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                    <!-- autoa -->
                    <ins class="adsbygoogle"
                         style="display:flex;margin: auto;max-width: 800px;margin-top: 15px"
                         data-ad-client="ca-pub-3002075943322489"
                         data-ad-format="auto"></ins>
                    <script>
                        (adsbygoogle = window.adsbygoogle || []).push({});
                    </script>
                </div>
            </div>
        </div>
    </section>

@endsection
@section('script')
    <script>
        var imNotARobot = function () {
            countDown();
        };
        function countDown() {
            setTimeout(function () {
                var count = parseInt($('#count').html());
                if (count > 0) {
                    count = count - 1;
                    $('#count').html(count);
                    countDown();
                } else {
                    $('.btn-captcha').removeAttr('disabled')
                }
            }, 1000);
        }
    </script>
@endsection