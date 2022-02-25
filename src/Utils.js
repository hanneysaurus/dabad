

function GetID(title, year){
    title = title.replace(/ /g,"_");
    return (title + "_" + year);
} export {GetID}
