function fillBus(busStops, busSteats)
{
    let totalPeople = 0;
    let index = 0;
    if(!Array.isArray(busStops) || typeof busSteats !== 'number' || busSteats < 0)
    {
        return -1;
    }
    while(index < busStops.length)
    {
        totalPeople += busStops[index];
        if(totalPeople >= busSteats)
        {
            return index;
        }
        index++;
    }
    return -1;
}

console.log(fillBus([1, 3, 10, 1], 12));