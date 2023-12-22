import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Bookmarks } from './Bookmarks'

function App() {
  const [books, setBooks] = useState([
    {
      "id": 1,
      "title": "Report on Survey of Distributive Trades by Kind of Business: Okara, 1968",
      "author": "M.kumbaro",
      "bookmark":false

    },
    {
      "id": 2,
      "title": "The Alchemist",
      "author": "Paulo Coelho",
      "bookmark":true
    },
    {
      "id": 3,
      "title": "A Standard Classification of Retail Trade, by Kind of Business, by Type of Operation",
      "author": "American Retail Federation",
      "bookmark":false
    },
    
    {
      "id": 3,
      "title": "Sinking of Shafts in Water-bearing Strata by Kind & Chaudron's Process",
      "author": "Cerciz  Topulli",
      "bookmark":false
    }
  ])

//   useEffect(()=>{
// fetch('https://www.googleapis.com/books/v1/volumes?q=by_items')
// .then(resp=>resp.json())
// .then(dataFromServer=>setBooks(dataFromServer))

    
//   },[])
function toggle(book :any){
  let booksCopy=structuredClone(books)
  let match =booksCopy.find(target=>target.id ===book.id )
  match.bookmark = !match.bookmark
setBooks(booksCopy)
}



useEffect(()=>{
fetch('http://localhost:4000/items')
.then(resp=>resp.json())
.then(dataFromServer=>setBooks(dataFromServer))

},[])




  return (
    <div className="App">

<a href={<Bookmarks/>}>BOOKMARKS</a>


<form action="" >
<input type="text" placeholder="Kerko per nje liber ..." 

onChange={(event     )=>{
  let prv= books.filter(book=>book.title.includes(event.target.value))
   setBooks(prv)
 }}
/>
<button>Search</button>

</form>


 <ul>
{books.map(target=>(

<li className='bookTitle'>
  <h1>Title:</h1>

  <h4>{target.title}</h4>
  <h3>Author: {target.author}</h3>
<button className={target.bookmark?"bookmarked":"notbkt"}
onClick={()=>{toggle(books)}}
>
  
  Add to bookmarks</button>  
  
  </li>

))}


 </ul> 
    </div>
  )
}

export default App
