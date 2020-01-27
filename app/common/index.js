export function filterList(filterBy, List) {
    let filterList = List.filter((data, index) => { 
        return List[index].category == filterBy;
    });
    return filterList;
}