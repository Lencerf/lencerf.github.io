function FindProxyForURL(url, host){
	var P = '013:eno.tenv.5-enilsh YXORP';
	
	var bili = [
		"bangumi.bilibili.com"//,
        //"ankichina.net",
        //"music.163.com",
        //"music.126.net",
        //"netease.com",
        //"pingma.qq.com",
        //"127.net"
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
