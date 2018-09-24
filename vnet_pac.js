function FindProxyForURL(url, host){
    var TOR = "SOCKS5 127.0.0.1:9050; SOCKS 127.0.0.1:9050";
	var SSR = "SOCKS5 127.0.0.1:1082; SOCKS 127.0.0.1:1082";
	var SS1083 = "SOCKS5 127.0.0.1:1083; SOCKS 127.0.0.1:1083";
    var BLACKHOLE = "PROXY 127.0.0.1:18080";


    var black = [
        "e-hentai.org",
        "bilibili.com",
        "mikanani.me",
        "twitter.com",
        "facebook.com",
        "weibo.com"
    ];

    var domains = [
        "dl.lux.bookfi.net",
        "sci-hub.tv",
        "e-hentai.org"
    ];

    var domains2 = [
        "bt.byr.cn"
	];
	
	var bili = [
		"bangumi.bilibili.com",
        "music.163.com"
    ];

    if(myIpAddress().startsWith("10.186") || myIpAddress().startsWith("192.168.1.233")) { // at school
        if (weekdayRange("MON", "FRI") && timeRange(9, 18)) { // work_time
            for (var i = black.length - 1; i >= 0; i--) {
                if (dnsDomainIs(host, black[i])) {
                    return BLACKHOLE;
                }
            }  
        }
    }
    
    if(dnsDomainIs(host,"schwab.com") && myIpAddress().startsWith("10.186")) {
        return SSR;
    }

    for (var i = domains.length - 1; i >= 0; i--) {
    	if (dnsDomainIs(host, domains[i])) {
    		return TOR;
    	}
    }

    for (var i = domains2.length - 1; i >= 0; i--) {
    	if (dnsDomainIs(host, domains2[i])) {
    		return SSR;
    	}
	}

	for (var i = bili.length - 1; i >= 0; i--) {
    	if (dnsDomainIs(host, bili[i])) {
    		return SS1083;//P.split("").reverse().join("");
    	}
	}
	return 'DIRECT';
}
