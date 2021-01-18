// Write an pretty printer that takes in a hashmap and outputs json
const mapToObject = (map) => {
    const obj = {}
    for (let [k,v] of map){
        obj[k] = v;
    }
    return obj;
}

const prettyPrintJson = (map) => {
    const obj = mapToObject(map);
    console.log(obj);
} 



prettyPrintJson()