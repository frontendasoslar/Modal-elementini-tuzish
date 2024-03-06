const elModalOpener = document.querySelector('.modal-openner');//button tugmasining klasi tipib olinayapdi
const elClose = document.querySelector('.back');//modal oynasini yopish elementi klasi topib olinayapdi
const elModal = document.querySelector('#demo-modal');//modal oynasining id topib olinayapdi



elModalOpener.addEventListener('click', function() { //button elementi click hodisasiga quloq solayapdi
 elModal.classList.add('open-modal');//button bosilganda modal oynasiga open modal klassi qo'shib qo'yilayapdi va button bosilganda modal oynasi ochilayapdi
})

elClose.addEventListener('click', function() {//close elementi click hodisasiga quloq solayapdi
  elModal.classList.remove('open-modal');//close elementi bosilganda modal oynasidan open modal classi olib tashlanayapdi va modal oynasi yopilayapdi
 })