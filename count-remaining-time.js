function countRemaniningTime(date, target)
{
    if (typeof date != 'object') {
        date = new Date(date);
    }

    if (typeof target != 'object') {
        target = new Date(target);
    }

    var options = [
        { unit: 'year', ms: 31536000000 },
        { unit: 'month', ms: 2592000000 },
        { unit: 'day', ms: 86400000 },
        { unit: 'hour', ms: 3600000 },
        { unit: 'min', ms: 60000 }
    ];

    var dateMs = date.valueOf();
    var targetMs = target.valueOf();
    var dateDiff = dateMs - targetMs;
    var output = [];

    while (dateDiff > 60000 && output.length < 2) {
        for (var x = 0; x < options.length; x++) {
            var val = Math.floor(dateDiff / options[x].ms);
            if (val > 0) {
                output.push(val + options[x].unit + (val > 1 ? 's' : ''));
                dateDiff -= (options[x].ms * val);
                //console.log('dateDiff: ' + dateDiff);
                break;
            }
        }
    }

    return output;
}
