const accordionContent = document.querySelectorAll('.accordion-content');
accordionContent.forEach((item, index) => {
  let header = item.querySelector('header');
  header.addEventListener('click', ()=> {
  item.classList.toggle('open');
  const description = item.querySelector('.description');
  let accordionIcon = item.querySelector('header i')
  if(item.classList.contains('open')){
    description.style.height = `${description.scrollHeight}px`;
    accordionIcon.classList.replace('fa-plus','fa-minus')
  }else{
    description.style.height = '0px';
    accordionIcon.classList.replace('fa-minus','fa-plus')
  }
  removeOpen(index)
  })
})
function removeOpen(index1){
  accordionContent.forEach((item, index2) => {
    if(index1 != index2){
   item.classList.remove('open');
   let des = item.querySelector('.description');
   let accordionIcon = item.querySelector('header i')
   des.style.height = '0px';
   accordionIcon.classList.replace('fa-minus','fa-plus')

    }
  })
}
