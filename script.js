const checkboxes = document.querySelectorAll('#hold-filters .box');
const tagValue = document.getElementsByTagName('tags');
var cards = document.querySelectorAll('.collection-products .most_wanted_card');



var tags = Array.from(tagValue);
filters = [];
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            filters.push(checkbox.value);
            filterfunction(cards, filters)
        } else {
            const index = filters.indexOf(checkbox.value);
            if (index !== -1) {
                filters.splice(index, 1);
            }
            filterfunction(cards, filters)
        }
    });
});


function filterfunction(cards, filters) {
    if (filters.length != 0) {                  //set all display none if atleast onefiltercheckbox is selected
        cards.forEach(function (child) {
            child.style.display = 'none';
        });
    } else {
        cards.forEach(function (child) {        //set all display block if no filtercheckbox is selected
            child.style.display = 'block';
        });
    }
    tags.map((a) => {
        let elementHolds = a.textContent.split(","); //get filter value and cardvalues compareand set display block if both array has the value
        for (let i = 0; i < filters.length; i++) {
            for (let j = 0; j < elementHolds.length; j++) {
                // console.log(filters[i],elementHolds[j])
                if (filters[i] == elementHolds[j]) {
                    a.parentElement.style.display = 'block';
                }
            }
        }
    })
}


// search filter

let searchitem = document.getElementById('search-filter')
let searchValue = document.getElementById('searchProduct')
if(searchitem){
searchitem.addEventListener('click',function(){
    let findItem = searchValue.value
    Array(findItem)
    filterfunction(cards, Array(findItem))
})
}

//marquee close 

let closeMarquee = document.getElementById('marquee-close')
let marqueeElement = document.querySelector('.marquee')
closeMarquee.addEventListener('click',function () {
    marqueeElement.style.display ="none";
    // console.log("hello")
})


