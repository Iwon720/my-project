const format = require('date-format');

module.exports.getDate = () => {
    return format('dd:MM:yyyy', new Date());
}