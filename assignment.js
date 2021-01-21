// https://github.com/nahidiac/js-assignment

// Problem-1
function kilometerToMeter(kilo)
{
    if(kilo < 0)
    {
        console.log('Invalid input! Distance cannot be negative.'); 
    }

    else
    {
        var meter = kilo * 1000; 
        return meter; 
    }
    
}

//Problem-2
function budgetCalculator(numberOfWatches, numberOfPhones, numberOfLaptops)
{
    if(numberOfWatches < 0 || numberOfPhones < 0 || numberOfLaptops == 0)
    {
        console.log('Invalid input! Number of items cannot be negative'); 
    }

    else 
    {
        var budget = (numberOfWatches * 50) + (numberOfPhones * 100) + (numberOfLaptops * 500); 
        return budget;
    } 
}

//Problem-3
function hotelCost(numberOfDays)
{
    if(numberOfDays < 0)
    {
        console.log('Invalid input! Number of days cannot be negative'); 
    }

    else 
    {
        var rent = 0; 
        if(numberOfDays <= 10)
        {
            rent = numberOfDays * 100; 
        }

        else if(numberOfDays <= 20)
        {
            rent = (10 * 100) + ( (numberOfDays - 10) * 80); 
        }

        else 
        {
            rent = (10 * 100) + ( 10* 80) + ( (numberOfDays - 20) * 50);
        }

        return rent; 
    }
}

//Problem-4
function megaFriend(friendNames)
{
    if(friendNames.length == 0)
    {
        console.log('The list is empty!'); 
    }

    else 
    {
        var maxIndex = 0; 
        for(var i = 1; i < friendNames.length; i++)
        {
            if(friendNames[i].length > friendNames[maxIndex].length)
            {
                maxIndex = i; 
            }
        }

        return friendNames[maxIndex]; 
    }
}