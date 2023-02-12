const statusCodes = {
    // 1xx Status Codes [Informational]
    "continue": 100, // Continue
    "switchingProtocol": 101, // Switching Protocol
    "processing": 102, // Processing(WebDAV)
    "earlyHints": 103, // Early Hints


    // 2xx Status Codes [Success]
    "ok": 200, // OK
    "created": 201, // Created
    "accepted": 202, // Accepted
    "nonAuthoritativeInformation": 203, // Non - Authoritative Information
    "noContent": 204, // No Content
    "resetContent": 205, // Reset Content
    "partialContent": 206, // Partial Content
    "multiStatus": 207, // Multi - Status(WebDAV)
    "alreadyReported": 208, // Already Reported(WebDAV)
    "imUsed": 226, // IM Used


    // 3xx Status Codes [Redirection]
    "multipleChoices": 300, // Multiple Choices
    "movedPermanently": 301, // Moved Permanently
    "found": 302, // Found
    "seeOther": 303, // See Other
    "notModified": 304, // Not Modified
    "useProxy": 305, // Use Proxy(Deprecated)
    "unused": 306, // (Unused)
    "temporaryRedirect": 307, // Temporary Redirect
    "permanentRedirect": 308, // Permanent Redirect(experimental)


    // 4xx Status Codes (Client Error)
    "badRequest": 400, // Bad Request
    "unauthorized": 401, // Unauthorized
    "paymentRequired": 402, // Payment Required(Experimental)
    "forbidden": 403, // Forbidden
    "notFound": 404, // Not Found
    "methodNotAllowed": 405, // Method Not Allowed
    "notAcceptable": 406, // Not Acceptable
    "proxyAuthenticationRequired": 407, // Proxy Authentication Required
    "requestTimeout": 408, // Request Timeout
    "conflict": 409, //
    "gone": 410, // Gone
    "lengthRequired": 411, // Length Required
    "preconditionFailed": 412, // Precondition Failed
    "requestEntityTooLarge": 413, // Request Entity Too Large
    "requestUriTooLong": 414, // Request - URI Too Long
    "unsupportedMediaType": 415, // Unsupported Media Type
    "requestedRangeNotSatisfiable": 416, // Requested Range Not Satisfiable
    "expectationFailed": 417, // Expectation Failed
    "teapot": 418, // I’m a teapot(RFC 2324)
    "enhanceCalm": 420, // Enhance Your Calm(Twitter)
    "unprocessable": 422, // Unprocessable Entity(WebDAV)
    "locked": 423, // Locked(WebDAV)
    "failedDependency": 424, // Failed Dependency(WebDAV)
    "tooEarly": 425, // Too Early(WebDAV)
    "upgradeRequired": 426, // Upgrade Required
    "preconditionRequired": 428, // Precondition Required
    "tooManyRequests": 429, // Too Many Requests
    "requestHeaderFieldsTooLarge": 431, // Request Header Fields Too Large
    "noResponse": 444, // No Response(Nginx)
    "retryWith": 449, // Retry With(Microsoft)
    "blockedByWindowsParentalControls": 450, // Blocked by Windows Parental Controls(Microsoft)
    "unavailableForLegalReasons": 451, // Unavailable For Legal Reasons
    "clientClosedRequest": 499, // Client Closed Request(Nginx)


    // 5xx Status Codes (Server Error)
    "serverError": 500, // Internal Server Error
    "notImplemented": 501, // Not Implemented
    "badGateway": 502, // Bad Gateway
    "unavailable": 503, // Service Unavailable
    "gatewayTimeout": 504, // Gateway Timeout
    "notSupported": 505, // HTTP Version Not Supported(Experimental)
    "variantAlsoNegotiates": 506, // Variant Also Negotiates(Experimental)
    "insufficientStorage": 507, // Insufficient Storage(WebDAV)
    "loopDetected": 508, // Loop Detected(WebDAV)
    "notExtended": 510, // Not Extended
    "networkAuthenticationRequired": 511, // Network Authentication Required
}

module.exports = statusCodes

