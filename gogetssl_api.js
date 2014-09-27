var request = require('request');
// much more concise declaration
function GoGetSSL(apikey) {
	this.key = apikey || null;
	this.lastStatus = null;
	this.lastResponse = null;
}


// You need to assign a new function here
GoGetSSL.prototype.auth = function (user, pass, callback) {
	self = this;
	this.callApi('/auth/', {},{'user': user, 'pass': pass}, false, function (error, body) {
		if(!error){
			self.key = body.key;
			callback(error, body);
		}
	});
};

// You need to assign a new function here
GoGetSSL.prototype.setKey = function (apikey) {
	this.key = apikey || null;
};

// You need to assign a new function here
GoGetSSL.prototype.decodeCSR = function (csr, brand, wildcard, callback) {
	if(!this.key) {
      throw new GoGetSSLAuthException();
    }
	
	var brand = brand || 1;
	var wildcard = wildcard || 0;
	
	this.callApi('/tools/csr/decode/', {'auth_key':this.key}, {'csr':csr, 'brand':brand, 'wildcard':wildcard}, false, function (error,body) {
		callback(error, body);
	});
};

// You need to assign a new function here
GoGetSSL.prototype.getWebServers = function (type, callback) {
	if(!this.key) {
      throw new GoGetSSLAuthException();
    }
	
	this.callApi('/tools/csr/decode/'+parseInt(type), {'auth_key':this.key}, null, false, function (error,body) {
		callback(error, body);
	});
};

// You need to assign a new function here
GoGetSSL.prototype.getDomainEmails = function (domain, callback) {
	if(!this.key) {
      throw new GoGetSSLAuthException();
    }
	
	this.callApi('/tools/domain/emails/', {'auth_key':this.key}, {'domain':domain}, false, function (error,body) {
		callback(error, body);
	});
};

// You need to assign a new function here
GoGetSSL.prototype.getAllProductPrices = function (callback) {
	if(!this.key) {
      throw new GoGetSSLAuthException();
    }
	
	this.callApi('/products/all_prices/', {'auth_key':this.key}, null, false, function (error,body) {
		callback(error, body);
	});
};

// You need to assign a new function here
GoGetSSL.prototype.getAllProducts = function (callback) {
	if(!this.key) {
      throw new GoGetSSLAuthException();
    }
	
	this.callApi('/products/', {'auth_key':this.key}, null, false, function (error,body) {
		callback(error, body);
	});
};

// You need to assign a new function here
GoGetSSL.prototype.getProductDetails = function (productId, callback) {
	if(!this.key) {
      throw new GoGetSSLAuthException();
    }
	
	this.callApi('/products/details/'+parseInt(productId), {'auth_key':this.key}, null, false, function (error,body) {
		callback(error, body);
	});
};

// You need to assign a new function here
GoGetSSL.prototype.getProductPrice = function (productId, callback) {
	if(!this.key) {
      throw new GoGetSSLAuthException();
    }
	
	this.callApi('/products/price/'+parseInt(productId), {'auth_key':this.key}, null, false, function (error,body) {
		callback(error, body);
	});
};

// You need to assign a new function here
GoGetSSL.prototype.getUserAgreement = function (productId, callback) {
	if(!this.key) {
      throw new GoGetSSLAuthException();
    }
	
	this.callApi('/products/agreement/'+parseInt(productId), {'auth_key':this.key}, null, false, function (error,body) {
		callback(error, body);
	});
};

// You need to assign a new function here
GoGetSSL.prototype.getAccountBalance = function (callback) {
	if(!this.key) {
      throw new GoGetSSLAuthException();
    }
	
	this.callApi('/account/balance/', {'auth_key':this.key}, null, false, function (error,body) {
		callback(error, body);
	});
};

// You need to assign a new function here
GoGetSSL.prototype.getAccountDetails = function (callback) {
	if(!this.key) {
      throw new GoGetSSLAuthException();
    }
	
	this.callApi('/account/', {'auth_key':this.key}, null, false, function (error,body) {
		callback(error, body);
	});
};

// You need to assign a new function here
GoGetSSL.prototype.getTotalOrders = function (callback) {
	if(!this.key) {
      throw new GoGetSSLAuthException();
    }
	
	this.callApi('/account/total_orders/', {'auth_key':this.key}, null, false, function (error,body) {
		callback(error, body);
	});
};

// You need to assign a new function here
GoGetSSL.prototype.getAllInvoices = function (callback) {
	if(!this.key) {
      throw new GoGetSSLAuthException();
    }
	
	this.callApi('/account/invoices/', {'auth_key':this.key}, null, false, function (error,body) {
		callback(error, body);
	});
};

// You need to assign a new function here
GoGetSSL.prototype.getUnpaidInvoices = function (callback) {
	if(!this.key) {
      throw new GoGetSSLAuthException();
    }
	
	this.callApi('/account/invoices/unpaid/', {'auth_key':this.key}, null, false, function (error,body) {
		callback(error, body);
	});
};

// You need to assign a new function here
GoGetSSL.prototype.getTotalTransactions = function (callback) {
	if(!this.key) {
      throw new GoGetSSLAuthException();
    }
	
	this.callApi('/account/total_transactions/', {'auth_key':this.key}, null, false, function (error,body) {
		callback(error, body);
	});
};

// You need to assign a new function here
GoGetSSL.prototype.addSSLOrder = function (data, callback) {
	if(!this.key) {
      throw new GoGetSSLAuthException();
    }
	
	this.callApi('/orders/add_ssl_order/', {'auth_key':this.key}, data, false, function (error,body) {
		callback(error, body);
	});
};

// You need to assign a new function here
GoGetSSL.prototype.addSSLRenewOrder = function (data, callback) {
	if(!this.key) {
      throw new GoGetSSLAuthException();
    }
	
	this.callApi('/orders/add_ssl_renew_order/', {'auth_key':this.key}, data, false, function (error,body) {
		callback(error, body);
	});
};

// You need to assign a new function here
GoGetSSL.prototype.reIssueOrder = function (orderId, callback) {
	if(!this.key) {
      throw new GoGetSSLAuthException();
    }
	
	this.callApi('/orders/ssl/reissue/'+parseInt(orderId), {'auth_key':this.key}, null, false, function (error,body) {
		callback(error, body);
	});
};

// You need to assign a new function here
GoGetSSL.prototype.activateSSLOrder = function (orderId, callback) {
	if(!this.key) {
      throw new GoGetSSLAuthException();
    }
	
	this.callApi('/orders/ssl/activate/'+parseInt(orderId), {'auth_key':this.key}, null, false, function (error,body) {
		callback(error, body);
	});
};

// You need to assign a new function here
GoGetSSL.prototype.getOrderStatus = function (orderId, callback) {
	if(!this.key) {
      throw new GoGetSSLAuthException();
    }
	
	this.callApi('/orders/status/'+parseInt(orderId), {'auth_key':this.key}, null, false, function (error,body) {
		callback(error, body);
	});
};

// You need to assign a new function here
GoGetSSL.prototype.comodoClaimFreeEV = function (orderId, callback) {
	if(!this.key) {
      throw new GoGetSSLAuthException();
    }
	
	this.callApi('/orders/ssl/comodo_claim_free_ev/'+parseInt(orderId), {'auth_key':this.key}, null, false, function (error,body) {
		callback(error, body);
	});
};

// You need to assign a new function here
GoGetSSL.prototype.getOrderInvoice = function (orderId, callback) {
	if(!this.key) {
      throw new GoGetSSLAuthException();
    }
	
	this.callApi('/orders/invoice/'+parseInt(orderId), {'auth_key':this.key}, null, false, function (error,body) {
		callback(error, body);
	});
};

// You need to assign a new function here
GoGetSSL.prototype.getUnpaidOrders = function (callback) {
	if(!this.key) {
      throw new GoGetSSLAuthException();
    }
	
	this.callApi('/orders/list/unpaid/', {'auth_key':this.key}, null, false, function (error,body) {
		callback(error, body);
	});
};

// You need to assign a new function here
GoGetSSL.prototype.resendEmail = function (orderId, callback) {
	if(!this.key) {
      throw new GoGetSSLAuthException();
    }
	
	this.callApi('/orders/resendemail/'+parseInt(orderId), {'auth_key':this.key}, null, false, function (error,body) {
		callback(error, body);
	});
};


// You need to assign a new function here
GoGetSSL.prototype.callApi = function (path, getData, postData, forcePost, callback) {
	var getData = getData || null;
	var postData = postData || null;
	var url = 'https://sandbox.gogetssl.com/api';
	var options = {
		'url': url+path,
		'qs': getData,
		'method': postData?'POST':'GET',
		'form': postData,
		'json': true,
		'headers': {
			'User-Agent': 'SSLWW Client 1.0'
		}
	};
	request(options, function(error, response, body) {
		if(response.statusCode == 200){
			if(body == null || typeof body !== 'object'){
				callback(true, 'Invalid Response');
			} else if (typeof body.error !== 'undefined' && body.error != null){
				callback(true, body);
			} else if (body && (body.success == true || body.key)){
				callback(false, body);
			} else {
				callback(true, body);
			}
		} else {
			callback(true, 'Invalid Response');
		}
	});
};

function GoGetSSLAuthException() {
	this.message='Please authorize first';
	this.name="GoGetSSLAuthException";
};


// no need to overwrite `exports` ... since you're replacing `module.exports` itself
module.exports = GoGetSSL;