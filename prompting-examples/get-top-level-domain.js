module.exports.getTopLevelDomain = function getTopLevelDomain(url) {
    return url.split('.').pop();
}