@extends('frontend.layout')
@section('content')
    <header class="shorten">
        <div class="container">
            <div class="intro-text">
                <div class="intro-lead-in wow zoomIn" data-wow-delay="0.3s">Shorten URLs and</div>
                <div class="intro-heading wow pulse" data-wow-delay="2.0s">EARN MONEY</div>
                <div class="row wow rotateInUpLeft" data-wow-delay="0.3s">
                    <div class="col-sm-8 col-sm-offset-2">
                        <form method="post" accept-charset="utf-8" id="shorten" class="form-inline shorten_form"
                              action="{{route('shortUrl')}}">
                            @csrf
                            <div class="form-group">
                                <input type="url" name="url" placeholder="Your URL in here"
                                       required="required" class="form-control input-lg" id="url"/>
                                <input type="hidden" name="ad_type" value="2"/>
                                <button type="button" id="btn_short_url"><img
                                            src="frontend/img/Right-Arrow.png" alt=""/></button>
                            </div>
                        </form>
                        <div class="shorten add-link-result hidden">
                            <div class="form-group">
                                <div class="input-group">
                                    <input class="form-control input-lg input_result" value="" readonly="">
                                    <div class="input-group-addon copy-it"
                                         data-clipboard-text="" data-toggle="tooltip" onclick="copy()"
                                         data-placement="bottom" title="" data-original-title="Copy" style="cursor: pointer"><i
                                                class="fa fa-clone"></i></div>
                                    <div class="input-group-addon reshort" data-toggle="tooltip" data-placement="bottom"
                                         title="" data-original-title="Reshort" style="cursor: pointer"><i class="fa fa-refresh"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <section>
        <div class="container text-center">
            <div class="section-title wow bounceIn">
                <h3 class="section-subheading">MAKE MONEY FAST AND SIMPLE</h3>
                <h2 class="section-heading">ONLY 3 STEPS</h2>
            </div>
            <div class="row wow fadeInUp">
                <div class="col-sm-4">
                    <div class="step step1">
                        <div class="step-img"><i class="ms-sprite ms-sprite-step1"></i></div>
                        <h4 class="step-heading">Create acount</h4>
                        <div class="step-content"></div>
                        <div class="step-num"><span>1</span></div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="step step2">
                        <div class="step-img"><i class="ms-sprite ms-sprite-step2"></i></div>
                        <h4 class="step-heading">Shorten URL</h4>
                        <div class="step-content"></div>
                        <div class="step-num"><span>2</span></div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="step step3">
                        <div class="step-img"><i class="ms-sprite ms-sprite-step3"></i></div>
                        <h4 class="step-heading">Received money</h4>
                        <div class="step-content"></div>
                        <div class="step-num"><span>3</span></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="bg-light-gray">
        <div class="container text-center">
            <div class="section-title wow bounceIn">
                <h3 class="section-subheading">Earn money no limit</h3>
                <h2 class="section-heading">Why do you need to join?</h2>
            </div>
            <div style="display: flex; flex-wrap: wrap;">
                <div class="col-sm-4 wow fadeInUp">
                    <div class="feature">
                        <div class="feature-img"><i class="ms-sprite ms-sprite-f1"></i></div>
                        <h4 class="feature-heading">MAZURL là gì?</h4>
                        <div class="feature-content">MAZURL
                            is a completely free tool, where you can shorten the link, in addition to free, you get
                            paid. So now you can make money at home, when managing and protecting your links.
                        </div>ư
                    </div>
                </div>
                <div class="col-sm-4 wow fadeInUp">
                    <div class="feature">
                        <div class="feature-img"><i class="ms-sprite ms-sprite-f2"></i></div>
                        <h4 class="feature-heading">How to earn money?</h4>
                        <div class="feature-content">
                            You can generate income with MAZURL in just 3 steps: create an account, shorten and share
                            your link, receive money income from us. So easy
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 wow fadeInUp">
                    <div class="feature">
                        <div class="feature-img"><i class="ms-sprite ms-sprite-f3"></i></div>
                        <h4 class="feature-heading">10% give collaborators</h4>
                        <div class="feature-content">
                            The MAZURL Collaborator Program is a great way to promote your services and earn more with
                            your shortcuts! Introduce your friends and get 10% more income from them!
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 wow fadeInUp">
                    <div class="feature">
                        <div class="feature-img"><i class="ms-sprite ms-sprite-f4"></i></div>
                        <h4 class="feature-heading">Smart System</h4>
                        <div class="feature-content">You easily handle and test all the features from the control
                            panel.
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 wow fadeInUp">
                    <div class="feature">
                        <div class="feature-img"><i class="ms-sprite ms-sprite-f5"></i></div>
                        <h4 class="feature-heading">Detail report</h4>
                        <div class="feature-content">
                            Report and analyze your earnings and campaigns details.
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 wow fadeInUp">
                    <div class="feature">
                        <div class="feature-img"><i class="ms-sprite ms-sprite-f6"></i></div>
                        <h4 class="feature-heading">Quick payment</h4>
                        <div class="feature-content">
                            When the balance reaches $ 25.00 you will be paid. We support payment in many forms and
                            quickly.
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 wow fadeInUp">
                    <div class="feature last">
                        <div class="feature-img"><i class="ms-sprite ms-sprite-f7"></i></div>
                        <h4 class="feature-heading">Highest price</h4>
                        <div class="feature-content">
                            Make the most of your visit with our very attractive price.
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 wow fadeInUp">
                    <div class="feature last">
                        <div class="feature-img"><i class="ms-sprite ms-sprite-f8"></i></div>
                        <h4 class="feature-heading">Developer API</h4>
                        <div class="feature-content">
                            The reduction is completely automatic with the API we provide, making money has never been
                            so easy.
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 wow fadeInUp">
                    <div class="feature last">
                        <div class="feature-img"><i class="ms-sprite ms-sprite-f9"></i></div>
                        <h4 class="feature-heading">Suport</h4>
                        <div class="feature-content">Group support always ready online 24/7</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="stats">
        <div class="container">
            <div class="row">
                <div class="col-sm-4 text-center">
                    <div class="stat wow flipInY">
                        <i class="ms-sprite ms-sprite-total-clicks"></i>
                        <div class="stat-num">
                            5.277.011
                        </div>
                        <div class="stat-text">
                            Click
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 text-center">
                    <div class="stat wow flipInY">
                        <i class="ms-sprite ms-sprite-total-links"></i>
                        <div class="stat-num">
                            309.609
                        </div>
                        <div class="stat-text">
                            Shorten URL
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 text-center">
                    <div class="stat wow flipInY">
                        <i class="ms-sprite ms-sprite-total-users"></i>
                        <div class="stat-num">
                            3.022
                        </div>
                        <div class="stat-text">
                            Member
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="bg-light-gray">
        <div class="container">
            <div class="section-title wow bounceIn">
                <h3 class="section-subheading">Contact</h3>
                <h2 class="section-heading">Do you need help?</h2>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-6">
                    <form method="post" accept-charset="utf-8" id="contact-form" action="">
                        <div class="form-group wow fadeInUp">
                            <label for="name">Your name:</label><input type="text" name="name" required="required"
                                                                       class="form-control" id="name"/>
                            <p class="help-block text-danger"></p>
                        </div>
                        <div class="form-group wow fadeInUp">
                            <label for="email">Your email:</label><input type="text" name="email" required="required"
                                                                         class="form-control" id="email"/>
                            <p class="help-block text-danger"></p>
                        </div>
                        <div class="form-group wow fadeInUp">
                            <label for="subject">Title:</label><input type="text" name="subject" required="required"
                                                                       class="form-control" id="subject"/>
                            <p class="help-block text-danger"></p>
                        </div>
                        <div class="form-group wow fadeInUp">
                            <label for="message">Message:</label><textarea name="message" required="required"
                                                                           class="form-control" id="message"
                                                                           rows="5"></textarea>
                            <p class="help-block text-danger"></p>
                        </div>
                        <div class="wow fadeInUp">
                            <div class="form-group captcha">
                                <div id="captchaContact" style="display: inline-block;"></div>
                            </div>
                        </div>
                        <div class="wow fadeInUp">
                            <div id="success"></div>
                            <button class="btn btn-contact" id="invisibleCaptchaContact" type="submit">Send for us
                            </button>
                        </div>
                    </form>
                    <div class="contact-result"></div>
                </div>
                <div class="hidden-xs col-sm-6 text-center">
                    <img src="frontend/img/Connection-Image.png" alt=""/></div>
            </div>
        </div>
    </section>
    <div id="paypal-button-container"></div>
    <script src="https://www.paypalobjects.com/api/checkout.js"></script>
    <script>
        // Render the PayPal button
        paypal.Button.render({
            // Set your environment
            env: 'sandbox', // sandbox | production

            // Specify the style of the button
            style: {
                layout: 'vertical',  // horizontal | vertical
                size:   'medium',    // medium | large | responsive
                shape:  'rect',      // pill | rect
                color:  'gold'       // gold | blue | silver | white | black
            },

            // Specify allowed and disallowed funding sources
            //
            // Options:
            // - paypal.FUNDING.CARD
            // - paypal.FUNDING.CREDIT
            // - paypal.FUNDING.ELV
            funding: {
                allowed: [
                    paypal.FUNDING.CARD,
                    paypal.FUNDING.CREDIT
                ],
                disallowed: []
            },

            // Enable Pay Now checkout flow (optional)
            commit: true,

            // PayPal Client IDs - replace with your own
            // Create a PayPal app: https://developer.paypal.com/developer/applications/create
            client: {
                sandbox: 'AfW_JkOHUuQybnSIXBv4TWGwu2FqYB2VWDwvVwfXBf8C7tcMEHoqQSbLESuvrY_L5I1DOXUqzug2JUDb',
                production: '<insert production client id>'
            },

            payment: function (data, actions) {
                return actions.payment.create({
                    payment: {
                        transactions: [
                            {
                                amount: {
                                    total: '0.01',
                                    currency: 'USD'
                                }
                            }
                        ]
                    }
                });
            },

            onAuthorize: function (data, actions) {
                return actions.payment.execute()
                    .then(function () {
                        window.alert('Payment Complete!');
                    });
            }
        }, '#paypal-button-container');
    </script>
@endsection

@section('script')
    <script>
        $('#btn_short_url').click(function () {
            $.ajax({
                url: "{{route('shortUrl')}}",
                type: 'post',
                data: $('.shorten_form').serialize()
            }).done(function (res) {
                if (res.status === 1) {
                    $('.shorten_form').addClass('hidden');
                    $('.input_result').val("{{env('SHORT_URL')}}"+res.text);
                    $('.copy-it').attr('data-clipboard-text',"{{env('SHORT_URL')}}"+res.text);
                    $('.add-link-result').removeClass('hidden');
                } else {
                    console.log(res);
                    alert('Link không hợp lệ');
                }
            });
        });
        function copy() {
            /* Get the text field */
            var copyText = $('.input_result');
            /* Select the text field */
            copyText.select();
            /* Copy the text inside the text field */
            document.execCommand("copy");
            /* Alert the copied text */
            alert("Copy thành công");
        }
        $('.reshort').click(function () {
            $('.shorten_form').removeClass('hidden');
            $('#url').val('');
            $('.add-link-result').addClass('hidden');
        })
    </script>
@endsection
