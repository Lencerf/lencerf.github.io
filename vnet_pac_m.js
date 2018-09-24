function FindProxyForURL(url, host){
	var P = '08001:4.98.032.53 YXORP';
	
	var bili = [
		"bangumi.bilibili.com",
		"music.163.com",
		"music.126.net",
		"ip.ws.126.net",
		"music.httpdns.c.163.com",
		"m10.music.126.net"
	];

    var ips = [
        "223.252.199.66",
        "103.65.41.126"
    ]

	for (var i = bili.length - 1; i >= 0; i--) {
    	if (dnsDomainIs(host, bili[i])) {
    		return P.split("").reverse().join("");
    	}
	}
   /* 
    var ip = dnsResolve(host);
    for (var i = ips.length - 1; i >= 0; i--) {
        if (ip == ips[i]) {
            return P.split("").reverse().join("");
        }
    }
*/
	return 'DIRECT';
}