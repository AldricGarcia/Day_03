function getHousesPrototype()
{
    const apartments = new Map();

    apartments.set('Apartments 75008', 90)
    apartments.set('Apartments 94300', 105)
    apartments.set('Apartments 92300', 140)
    apartments.set('Apartments 75015', 65)

    return apartments;
}

console.log(getHousesPrototype());