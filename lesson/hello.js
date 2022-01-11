let currentDate = new Date();

global.date = currentDate;

module.exports.getMessage = (name) => {
    let hour = currentDate.getHours();
    if(hour > 16)
        return "Good night, " + name;
    else if(hour > 10)
        return "Good day, " + name;
    else
        return "Good mornig, " + name;
}
