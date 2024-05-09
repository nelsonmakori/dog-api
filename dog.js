
const btn = document.querySelector('.btn')


async function dog(){
  const picture = document.querySelector('.pic')
  const response = await fetch("https://dog.ceo/api/breeds/image/random")
  const data = await response.json()
  const result = data.message
  const img = document.createElement('img') 
  picture.src = result
  console.log(data)

}
btn.addEventListener('click',()=>{
  dog()
})