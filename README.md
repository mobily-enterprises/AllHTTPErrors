HTTPErrors
==========

This is a simple module to create HTTP error constructor based on Node's `http.STATUS_CODES` information.
How to use it:

    var errors = require( 'allhttperrors' );

    // ...
    next( new errors.NotFoundError() )
    // ... or:
    next( new errors.NotFoundError("The file specified could not be found") )
    // ... or:
    next( new errors.NotFoundError( { message: "The file specified could not be found", extraInfo: { fileName: 'someFile' } } ) )

The error names are based on the default messages set by nodejs, with strange characters stripped out and capitalisation added. See the bottom of this file for the full list of errors constructors created.




# The full list

 * [100] `ContinueError`: Continue
 * [101] `SwitchingProtocolsError`: Switching Protocols
 * [102] `ProcessingError`: Processing
 * [200] `OKError`: OK
 * [201] `CreatedError`: Created
 * [202] `AcceptedError`: Accepted
 * [203] `NonAuthoritativeInformationError`: Non-Authoritative Information
 * [204] `NoContentError`: No Content
 * [205] `ResetContentError`: Reset Content
 * [206] `PartialContentError`: Partial Content
 * [207] `MultiStatusError`: Multi-Status
 * [300] `MultipleChoicesError`: Multiple Choices
 * [301] `MovedPermanentlyError`: Moved Permanently
 * [302] `MovedTemporarilyError`: Moved Temporarily
 * [303] `SeeOtherError`: See Other
 * [304] `NotModifiedError`: Not Modified
 * [305] `UseProxyError`: Use Proxy
 * [307] `TemporaryRedirectError`: Temporary Redirect
 * [400] `BadRequestError`: Bad Request
 * [401] `UnauthorizedError`: Unauthorized
 * [402] `PaymentRequiredError`: Payment Required
 * [403] `ForbiddenError`: Forbidden
 * [404] `NotFoundError`: Not Found
 * [405] `MethodNotAllowedError`: Method Not Allowed
 * [406] `NotAcceptableError`: Not Acceptable
 * [407] `ProxyAuthenticationRequiredError`: Proxy Authentication Required
 * [408] `RequestTimeOutError`: Request Time-out
 * [409] `ConflictError`: Conflict
 * [410] `GoneError`: Gone
 * [411] `LengthRequiredError`: Length Required
 * [412] `PreconditionFailedError`: Precondition Failed
 * [413] `RequestEntityTooLargeError`: Request Entity Too Large
 * [414] `RequestURITooLargeError`: Request-URI Too Large
 * [415] `UnsupportedMediaTypeError`: Unsupported Media Type
 * [416] `RequestedRangeNotSatisfiableError`: Requested Range Not Satisfiable
 * [417] `ExpectationFailedError`: Expectation Failed
 * [418] `IMATeapotError`: I'm a teapot
 * [422] `UnprocessableEntityError`: Unprocessable Entity
 * [423] `LockedError`: Locked
 * [424] `FailedDependencyError`: Failed Dependency
 * [425] `UnorderedCollectionError`: Unordered Collection
 * [426] `UpgradeRequiredError`: Upgrade Required
 * [428] `PreconditionRequiredError`: Precondition Required
 * [429] `TooManyRequestsError`: Too Many Requests
 * [431] `RequestHeaderFieldsTooLargeError`: Request Header Fields Too Large
 * [500] `InternalServerErrorError`: Internal Server Error
 * [501] `NotImplementedError`: Not Implemented
 * [502] `BadGatewayError`: Bad Gateway
 * [503] `ServiceUnavailableError`: Service Unavailable
 * [504] `GatewayTimeOutError`: Gateway Time-out
 * [505] `HTTPVersionNotSupportedError`: HTTP Version not supported
 * [506] `VariantAlsoNegotiatesError`: Variant Also Negotiates
 * [507] `InsufficientStorageError`: Insufficient Storage
 * [509] `BandwidthLimitExceededError`: Bandwidth Limit Exceeded
 * [510] `NotExtendedError`: Not Extended
 * [511] `NetworkAuthenticationRequiredError`: Network Authentication Required


# How it works


