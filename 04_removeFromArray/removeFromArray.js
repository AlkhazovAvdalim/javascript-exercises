const removeFromArray = function(array_, ...itemstoremove) {
    console.log(array_)
    console.log(itemstoremove)
    for (let i=0;i<itemstoremove.length;i++){
        let index = array_.indexOf(itemstoremove[i])
        let x = array_.splice(index,1)
    }
    return (array_)
};

// Do not edit below this line
module.exports = removeFromArray;


