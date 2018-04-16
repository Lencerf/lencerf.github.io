function FindProxyForURL(url, host){
    var TOR = "SOCKS5 127.0.0.1:9050; SOCKS 127.0.0.1:9050";
	var SSR = "SOCKS5 127.0.0.1:1082; SOCKS 127.0.0.1:1082";
	var SS1083 = "SOCKS5 127.0.0.1:1083; SOCKS 127.0.0.1:1083";
	var P = '013:eno.tenv.5-enilsh YXORP';

    var domains = [
        "dl.lux.bookfi.net",
        "sci-hub.tv",
        "e-hentai.org"
    ];

    var domains2 = [
        "bt.byr.cn",
	"schwab.com"
	];
	
	var bili = [
		"bangumi.bilibili.com",
        "music.163.com"
	];

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
