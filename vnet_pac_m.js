var V2Ray = "SOCKS5 35.232.35.51:1081; SOCKS 35.232.35.51:1081; DIRECT;";

var domains = [
	// "api.bilibili.com",
	// "bangumi.bilibili.com",
	// "tieba.baidu.com",
	"music.163.com"
];


function FindProxyForURL(url, host) {
    for (var i = domains.length - 1; i >= 0; i--) {
    	if (dnsDomainIs(host, domains[i])) {
            return V2Ray;
    	}
	}
    return "DIRECT";
}
