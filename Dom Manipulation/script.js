const tierInput=document.getElementById('tier');
console.log(tierInput);

const submitBtn=document.getElementById('submit');
submitBtn.addEventListener('click',(event)=>{
    console.log("button is clicked");
    event.preventDefault();
    if(tierInput.value==''){
        alert('Please enter a tier name');
        return;
    }
    //to get access of the element on which the event was triggered
    const target=event.target;
    createTierList(tierInput.value);
    tierInput.value='';

});
function createTierList(tierListName) {
    const newTierList=document.createElement('div');
    newTierList.classList.add('tier-list');

    const heading=document.createElement('h1');
    heading.textContent=tierListName;

    const newTierListItems=document.createElement('div');
    newTierListItems.classList.add('tier-list-items');

    newTierList.appendChild(heading);
    newTierList.appendChild(newTierListItems);

    const tierSection=document.getElementById('tier-list-section');
    tierSection.appendChild(newTierList);
}