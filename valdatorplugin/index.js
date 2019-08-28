Validator	Description
contains(str, seed)	check if the string contains the seed.
equals(str, comparison)	check if the string matches the comparison.
isAfter(str [, date])	check if the string is a date that's after the specified date (defaults to now).
isAlpha(str [, locale])	check if the string contains only letters (a-zA-Z).

Locale is one of ['ar', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LB', 'ar-LY', 'ar-MA', 'ar-QA', 'ar-QM', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-TN', 'ar-YE', 'bg-BG', 'cs-CZ', 'da-DK', 'de-DE', 'el-GR', 'en-AU', 'en-GB', 'en-HK', 'en-IN', 'en-NZ', 'en-US', 'en-ZA', 'en-ZM', 'es-ES', 'fr-FR', 'hu-HU', 'it-IT', 'ku-IQ', 'nb-NO', 'nl-NL', 'nn-NO', 'pl-PL', 'pt-BR', 'pt-PT', 'ru-RU', 'sl-SI', 'sk-SK', 'sr-RS', 'sr-RS@latin', 'sv-SE', 'tr-TR', 'uk-UA']) and defaults to en-US. Locale list is validator.isAlphaLocales.
isAlphanumeric(str [, locale])	check if the string contains only letters and numbers.

Locale is one of ['ar', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LB', 'ar-LY', 'ar-MA', 'ar-QA', 'ar-QM', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-TN', 'ar-YE', 'bg-BG', 'cs-CZ', 'da-DK', 'de-DE', 'el-GR', 'en-AU', 'en-GB', 'en-HK', 'en-IN', 'en-NZ', 'en-US', 'en-ZA', 'en-ZM', 'es-ES', 'fr-FR', 'hu-HU', 'it-IT', 'ku-IQ', 'nb-NO', 'nl-NL', 'nn-NO', 'pl-PL', 'pt-BR', 'pt-PT', 'ru-RU', 'sl-SI', 'sk-SK', 'sr-RS', 'sr-RS@latin', 'sv-SE', 'tr-TR', 'uk-UA']) and defaults to en-US. Locale list is validator.isAlphanumericLocales.
isAscii(str)	check if the string contains ASCII chars only.
isBase32(str)	check if a string is base32 encoded.
isBase64(str)	check if a string is base64 encoded.
isBefore(str [, date])	check if the string is a date that's before the specified date.
isBoolean(str)	check if a string is a boolean.
isByteLength(str [, options])	check if the string's length (in UTF-8 bytes) falls in a range.

options is an object which defaults to {min:0, max: undefined}.
isCreditCard(str)	check if the string is a credit card.
isCurrency(str [, options])	check if the string is a valid currency amount.

options is an object which defaults to {symbol: '$', require_symbol: false, allow_space_after_symbol: false, symbol_after_digits: false, allow_negatives: true, parens_for_negatives: false, negative_sign_before_digits: false, negative_sign_after_digits: false, allow_negative_sign_placeholder: false, thousands_separator: ',', decimal_separator: '.', allow_decimal: true, require_decimal: false, digits_after_decimal: [2], allow_space_after_digits: false}.
Note: The array digits_after_decimal is filled with the exact number of digits allowed not a range, for example a range 1 to 3 will be given as [1, 2, 3].
isDataURI(str)	check if the string is a data uri format.
isMagnetURI(str)	check if the string is a magnet uri format.
isDecimal(str [, options])	check if the string represents a decimal number, such as 0.1, .3, 1.1, 1.00003, 4.0, etc.

options is an object which defaults to {force_decimal: false, decimal_digits: '1,', locale: 'en-US'}

locale determine the decimal separator and is one of ['ar', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LB', 'ar-LY', 'ar-MA', 'ar-QA', 'ar-QM', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-TN', 'ar-YE', 'bg-BG', 'cs-CZ', 'da-DK', 'de-DE', 'en-AU', 'en-GB', 'en-HK', 'en-IN', 'en-NZ', 'en-US', 'en-ZA', 'en-ZM', 'es-ES', 'fr-FR', 'hu-HU', 'it-IT', 'ku-IQ', nb-NO', 'nl-NL', 'nn-NO', 'pl-PL', 'pt-BR', 'pt-PT', 'ru-RU', 'sl-SI', 'sr-RS', 'sr-RS@latin', 'sv-SE', 'tr-TR', 'uk-UA'].
Note: decimal_digits is given as a range like '1,3', a specific value like '3' or min like '1,'.
isDivisibleBy(str, number)	check if the string is a number that's divisible by another.
isEmail(str [, options])	check if the string is an email.

options is an object which defaults to { allow_display_name: false, require_display_name: false, allow_utf8_local_part: true, require_tld: true, allow_ip_domain: false, domain_specific_validation: false }. If allow_display_name is set to true, the validator will also match Display Name <email-address>. If require_display_name is set to true, the validator will reject strings without the format Display Name <email-address>. If allow_utf8_local_part is set to false, the validator will not allow any non-English UTF8 character in email address' local part. If require_tld is set to false, e-mail addresses without having TLD in their domain will also be matched. If ignore_max_length is set to true, the validator will not check for the standard max length of an email. If allow_ip_domain is set to true, the validator will allow IP addresses in the host part. If domain_specific_validation is true, some additional validation will be enabled, e.g. disallowing certain syntactically valid email addresses that are rejected by GMail.
isEmpty(str [, options])	check if the string has a length of zero.

options is an object which defaults to { ignore_whitespace:false }.
isFQDN(str [, options])	check if the string is a fully qualified domain name (e.g. domain.com).

options is an object which defaults to { require_tld: true, allow_underscores: false, allow_trailing_dot: false }.
isFloat(str [, options])	check if the string is a float.

options is an object which can contain the keys min, max, gt, and/or lt to validate the float is within boundaries (e.g. { min: 7.22, max: 9.55 }) it also has locale as an option.

min and max are equivalent to 'greater or equal' and 'less or equal', respectively while gt and lt are their strict counterparts.

locale determine the decimal separator and is one of ['ar', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LB', 'ar-LY', 'ar-MA', 'ar-QA', 'ar-QM', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-TN', 'ar-YE', 'bg-BG', 'cs-CZ', 'da-DK', 'de-DE', 'en-AU', 'en-GB', 'en-HK', 'en-IN', 'en-NZ', 'en-US', 'en-ZA', 'en-ZM', 'es-ES', 'fr-FR', 'hu-HU', 'it-IT', 'nb-NO', 'nl-NL', 'nn-NO', 'pl-PL', 'pt-BR', 'pt-PT', 'ru-RU', 'sl-SI', 'sr-RS', 'sr-RS@latin', 'sv-SE', 'tr-TR', 'uk-UA']. Locale list is validator.isFloatLocales.
isFullWidth(str)	check if the string contains any full-width chars.
isHalfWidth(str)	check if the string contains any half-width chars.
isHash(str, algorithm)	check if the string is a hash of type algorithm.

Algorithm is one of ['md4', 'md5', 'sha1', 'sha256', 'sha384', 'sha512', 'ripemd128', 'ripemd160', 'tiger128', 'tiger160', 'tiger192', 'crc32', 'crc32b']
isHexColor(str)	check if the string is a hexadecimal color.
isHexadecimal(str)	check if the string is a hexadecimal number.
isIdentityCard(str [, locale])	check if the string is a valid identity card code.

locale is one of ['ES', 'zh-TW', 'he-IL'] OR 'any'. If 'any' is used, function will check if any of the locals match.

Defaults to 'any'.
isIP(str [, version])	check if the string is an IP (version 4 or 6).
isIPRange(str)	check if the string is an IP Range(version 4 only).
isISBN(str [, version])	check if the string is an ISBN (version 10 or 13).
isISSN(str [, options])	check if the string is an ISSN.

options is an object which defaults to { case_sensitive: false, require_hyphen: false }. If case_sensitive is true, ISSNs with a lowercase 'x' as the check digit are rejected.
isISIN(str)	check if the string is an ISIN (stock/security identifier).
isISO8601(str)	check if the string is a valid ISO 8601 date; for additional checks for valid dates, e.g. invalidates dates like 2009-02-29, pass options object as a second parameter with options.strict = true.
isRFC3339(str)	check if the string is a valid RFC 3339 date.
isISO31661Alpha2(str)	check if the string is a valid ISO 3166-1 alpha-2 officially assigned country code.
isISO31661Alpha3(str)	check if the string is a valid ISO 3166-1 alpha-3 officially assigned country code.
isISRC(str)	check if the string is a ISRC.
isIn(str, values)	check if the string is in a array of allowed values.
isInt(str [, options])	check if the string is an integer.

options is an object which can contain the keys min and/or max to check the integer is within boundaries (e.g. { min: 10, max: 99 }). options can also contain the key allow_leading_zeroes, which when set to false will disallow integer values with leading zeroes (e.g. { allow_leading_zeroes: false }). Finally, options can contain the keys gt and/or lt which will enforce integers being greater than or less than, respectively, the value provided (e.g. {gt: 1, lt: 4} for a number between 1 and 4).
isJSON(str)	check if the string is valid JSON (note: uses JSON.parse).
isJWT(str)	check if the string is valid JWT token.
isLatLong(str)	check if the string is a valid latitude-longitude coordinate in the format lat,long or lat, long.
isLength(str [, options])	check if the string's length falls in a range.

options is an object which defaults to {min:0, max: undefined}. Note: this function takes into account surrogate pairs.
isLowercase(str)	check if the string is lowercase.
isMACAddress(str)	check if the string is a MAC address.

options is an object which defaults to {no_colons: false}. If no_colons is true, the validator will allow MAC addresses without the colons.
isMD5(str)	check if the string is a MD5 hash.
isMimeType(str)	check if the string matches to a valid MIME type format
isMobilePhone(str [, locale [, options]])	check if the string is a mobile phone number,

(locale is either an array of locales (e.g ['sk-SK', 'sr-RS']) OR one of ['ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', ar-JO', 'ar-KW', 'ar-SA', 'ar-SY', 'ar-TN', 'be-BY', 'bg-BG', 'bn-BD', 'cs-CZ', 'de-DE', 'da-DK', 'el-GR', 'en-AU', 'en-CA', 'en-GB', 'en-GH', 'en-HK', 'en-IE', 'en-IN', 'en-KE', 'en-MT', 'en-MU', 'en-NG', 'en-NZ', 'en-RW', 'en-SG', 'en-UG', 'en-US', 'en-TZ', 'en-ZA', 'en-ZM', 'en-PK', 'es-ES', 'es-MX', 'es-PY', 'es-UY', 'et-EE', 'fa-IR', 'fi-FI', 'fj-FJ', 'fr-FR', 'he-IL', 'hu-HU', 'id-ID', 'it-IT', 'ja-JP', 'kk-KZ', 'ko-KR', 'lt-LT', 'ms-MY', 'nb-NO', 'nl-BE', 'nl-NL', 'nn-NO', 'pl-PL', 'pt-PT', 'pt-BR', 'ro-RO', 'ru-RU', 'sl-SI', 'sk-SK', 'sr-RS', 'sv-SE', 'th-TH', 'tr-TR', 'uk-UA', 'vi-VN', 'zh-CN', 'zh-HK', 'zh-TW'] OR defaults to 'any'. If 'any' or a falsey value is used, function will check if any of the locales match).

options is an optional object that can be supplied with the following keys: strictMode, if this is set to true, the mobile phone number must be supplied with the country code and therefore must start with +. Locale list is validator.isMobilePhoneLocales.
isMongoId(str)	check if the string is a valid hex-encoded representation of a MongoDB ObjectId.
isMultibyte(str)	check if the string contains one or more multibyte chars.
isNumeric(str [, options])	check if the string contains only numbers.

options is an object which defaults to {no_symbols: false}. If no_symbols is true, the validator will reject numeric strings that feature a symbol (e.g. +, -, or .).
isPort(str)	check if the string is a valid port number.
isPostalCode(str, locale)	check if the string is a postal code,

(locale is one of [ 'AD', 'AT', 'AU', 'BE', 'BG', 'BR', 'CA', 'CH', 'CZ', 'DE', 'DK', 'DZ', 'EE', 'ES', 'FI', 'FR', 'GB', 'GR', 'HR', 'HU', 'ID', 'IL', 'IN', 'IS', 'IT', 'JP', 'KE', 'LI', 'LT', 'LU', 'LV', 'MT', 'MX', 'NL', 'NO', 'NZ', 'PL', 'PR', 'PT', 'RO', 'RU', 'SA', 'SE', 'SI', 'TN', 'TW', 'UA', 'US', 'ZA', 'ZM' ] OR 'any'. If 'any' is used, function will check if any of the locals match. Locale list is validator.isPostalCodeLocales.).
isSurrogatePair(str)	check if the string contains any surrogate pairs chars.
isURL(str [, options])	check if the string is an URL.

options is an object which defaults to { protocols: ['http','https','ftp'], require_tld: true, require_protocol: false, require_host: true, require_valid_protocol: true, allow_underscores: false, host_whitelist: false, host_blacklist: false, allow_trailing_dot: false, allow_protocol_relative_urls: false, disallow_auth: false }.
isUUID(str [, version])	check if the string is a UUID (version 3, 4 or 5).
isUppercase(str)	check if the string is uppercase.
isVariableWidth(str)	check if the string contains a mixture of full and half-width chars.
isWhitelisted(str, chars)	checks characters if they appear in the whitelist.
matches(str, pattern [, modifiers])	check if string matches the pattern.

Either matches('foo', /foo/i) or matches('foo', 'foo', 'i').
Sanitizers
Here is a list of the sanitizers currently available.

Sanitizer	Description
blacklist(input, chars)	remove characters that appear in the blacklist. The characters are used in a RegExp and so you will need to escape some chars, e.g. blacklist(input, '\\[\\]').
escape(input)	replace <, >, &, ', " and / with HTML entities.
unescape(input)	replaces HTML encoded entities with <, >, &, ', " and /.
ltrim(input [, chars])	trim characters from the left-side of the input.
normalizeEmail(email [, options])	canonicalizes an email address. (This doesn't validate that the input is an email, if you want to validate the email use isEmail beforehand)

options is an object with the following keys and default values:
all_lowercase: true - Transforms the local part (before the @ symbol) of all email addresses to lowercase. Please note that this may violate RFC 5321, which gives providers the possibility to treat the local part of email addresses in a case sensitive way (although in practice most - yet not all - providers don't). The domain part of the email address is always lowercased, as it's case insensitive per RFC 1035.
gmail_lowercase: true - GMail addresses are known to be case-insensitive, so this switch allows lowercasing them even when all_lowercase is set to false. Please note that when all_lowercase is true, GMail addresses are lowercased regardless of the value of this setting.
gmail_remove_dots: true: Removes dots from the local part of the email address, as GMail ignores them (e.g. "john.doe" and "johndoe" are considered equal).
gmail_remove_subaddress: true: Normalizes addresses by removing "sub-addresses", which is the part following a "+" sign (e.g. "foo+bar@gmail.com" becomes "foo@gmail.com").
gmail_convert_googlemaildotcom: true: Converts addresses with domain @googlemail.com to @gmail.com, as they're equivalent.
outlookdotcom_lowercase: true - Outlook.com addresses (including Windows Live and Hotmail) are known to be case-insensitive, so this switch allows lowercasing them even when all_lowercase is set to false. Please note that when all_lowercase is true, Outlook.com addresses are lowercased regardless of the value of this setting.
outlookdotcom_remove_subaddress: true: Normalizes addresses by removing "sub-addresses", which is the part following a "+" sign (e.g. "foo+bar@outlook.com" becomes "foo@outlook.com").
yahoo_lowercase: true - Yahoo Mail addresses are known to be case-insensitive, so this switch allows lowercasing them even when all_lowercase is set to false. Please note that when all_lowercase is true, Yahoo Mail addresses are lowercased regardless of the value of this setting.
yahoo_remove_subaddress: true: Normalizes addresses by removing "sub-addresses", which is the part following a "-" sign (e.g. "foo-bar@yahoo.com" becomes "foo@yahoo.com").
icloud_lowercase: true - iCloud addresses (including MobileMe) are known to be case-insensitive, so this switch allows lowercasing them even when all_lowercase is set to false. Please note that when all_lowercase is true, iCloud addresses are lowercased regardless of the value of this setting.
icloud_remove_subaddress: true: Normalizes addresses by removing "sub-addresses", which is the part following a "+" sign (e.g. "foo+bar@icloud.com" becomes "foo@icloud.com").
rtrim(input [, chars])	trim characters from the right-side of the input.
stripLow(input [, keep_new_lines])	remove characters with a numerical value < 32 and 127, mostly control characters. If keep_new_lines is true, newline characters are preserved (\n and \r, hex 0xA and 0xD). Unicode-safe in JavaScript.
toBoolean(input [, strict])	convert the input string to a boolean. Everything except for '0', 'false' and '' returns true. In strict mode only '1' and 'true' return true.
toDate(input)	convert the input string to a date, or null if the input is not a date.
toFloat(input)	convert the input string to a float, or NaN if the input is not a float.
toInt(input [, radix])	convert the input string to an integer, or NaN if the input is not an integer.
trim(input [, chars])	trim characters (whitespace by default) from both sides of the input.
whitelist(input, chars)	remove characters that do not appear in the whitelist. The characters are used in a RegExp and so you will need to escape some chars, e.g. whitelist(input, '\\[\\]').
