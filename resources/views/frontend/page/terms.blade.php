@extends('frontend.layout')
@section('content')

    <header>
        <div class="container">
            <div class="intro-text">
                <div class="intro-lead-in">Terms of Use</div>
            </div>
        </div>
    </header>
    <section id="services">
        <div class="container">
            <p data-fulltext="" data-placeholder="Translation" dir="ltr" id="tw-target-text">
                This site allows you to shorten any URL and earn revenue by sharing that short URL. Ads are shown to
                viewers on their way to their destination URLs. By using the Services of the Site, you agree that the
                Site includes advertisements on such short URLs as a requirement for the Site to operate.</p>
            <p><strong>
                    By using the services of the site you need to agree to us the following:</strong></p>
            <p>Advertise on MAZURL.com traffic exchange sites and PTC sites;

                Put short links on web pages containing content that may be threatening, harassing, defamatory, obscene,
                containing any viruses, trojans, worms, time bombs, abort programs, or software containment. Can cause
                damage to the viewer or server of the site;

                Shorten URLs redirecting to sites containing the content mentioned above or redirecting to a site
                without content that confuses the user for profit;

                Use the shortened link service for any unlawful or unauthorized purpose including copyright,
                pornography, video, pornography; threatening, abusive, harassing, harassing or otherwise violating the
                legal rights of any person or entity;

                Offer incentives or ask visitors to click on the shortened link;

                Spam links or any link owned by MAZURL on the forum, website, social network in any form;

                Use fake / automated traffic in any way to your shortened link. This system will automatically lock your
                account. The system can detect invalid traffic including iframes, redirects, bots, proxies, traffic
                exchanges, email traffic, PTC traffic, hitleap, jingling, ...

                Automatically redirect to your short url from another site. That is, the viewer must click on the link
                to be considered a valid access;

                Open your abstract URL using iframe or popups / popunder;

                Click on your short URL to generate revenue. We will keep your revenue or lock your account if detected.

                Create a "redirect loop" with the domain MAZURL or similar services to generate revenue;

                Transmit files containing viruses, spyware, adware, trojans or other malicious code;

                Interfering with other publishers using the Site's services;

                Create multiple accounts. Only allow one account per person;

                Abuse from contact systems such as sending messages related to payment before the due date, threatening
                service change and / or providing incorrect or incomplete data.
                Content that promotes hatred, discrimination, or discrimination against an individual or group based on
                race or ethnic origin, religion, disability, age, nationality, or past status. warrior, sexual
                orientation, gender, sexual orientation, or other characteristics associated with systematic
                discriminatory or systematic behavior.

                Hacking / cracking content

                Malware or adware

                Drug and drug paraphernalia are prohibited

                Content that promotes, sells or promotes products from endangered or threatened animal species.

                Sell ​​alcoholic beverages online

                Selling cigarettes or tobacco-related products
                Selling prescription drugs

                Sale of weapons or ammunition (for example, firearms, firearm parts, fighting knives, electric guns)

                Sell ​​or distribute subject matter or student essays

                Any other content that is illegal, promotes illegal activity or violates the legal rights of others

                Using a proxy server to hide or forge IP access for personal gain, the account will be permanently
                blocked

                For contributors, you are not allowed to ref yourself, we will permanently lock your account for
                referrals and will not pay for any earnings as this violates the policy.

                The shortened link sets the password to continue to redirect the page to the target link, whether
                intentionally or unintentionally.
            </p>
            <p>
                If you agree to the terms, then you can register and make money today with the registration link&nbsp;<a
                        href="{{route('registerView')}}"><strong>in here</strong></a>.</p>
        </div>
    </section>

@endsection