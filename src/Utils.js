

function GetID(title, year){
    title = title.replace(/ /g,"_");
    return (title + "_" + year);
} export {GetID}

function GetImageName(title){
    title = title.replaceAll('[', '');
    title = title.replaceAll(']', '');
    title = title.replaceAll(')', '');
    title = title.replaceAll('(', '');
    title = title.replaceAll("'", '');
    title = title.replaceAll(':', '');
    title = title.replaceAll('-', '');
    title = title.replaceAll('!', '');
    title = title.replaceAll('?', '');
    title = title.replaceAll('.', '');
    title = title.replaceAll(',', '');
    title = title.replaceAll('&', 'and');
    title = title.replaceAll('ö', 'o');
    title = title.replaceAll(/ /g,'_');
    title = title.replaceAll('__','_');
    return title.toLowerCase();
} export {GetImageName}
