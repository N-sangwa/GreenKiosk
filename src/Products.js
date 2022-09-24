import React,{useState,useEffect} from 'react'
import './products.css';


const Products=()=>{
    const [fruits,setFruits] = useState([]);
    const [vegetables,setVegetables] = useState([]);
    const [products,setProducts] = useState([]);

    const [loading, setLoading] = useState(false);
    
    useEffect(()=>{
       productsFetch()
       fruitsFetch()
       vegesFetch()
    }, [])

    const productsFetch=()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(result => {
            setLoading(true);
            setProducts(result);
        })
        .catch(e=>{throw new Error(e.message)})
    }


    const fruitsFetch=()=>{
        fetch('http://localhost:5000/products/fruits')
        .then(res => res.json())
        .then(result => {
            setLoading(true);
            setFruits(result);
        })
        .catch(e=>{throw new Error(e.message)})
    }


    const vegesFetch=()=>{
        fetch('http://localhost:5000/products/vegetables')
        .then(res => res.json())
        .then(result => {
            setLoading(true);
            setVegetables(result);
        })
        .catch(e=>{throw new Error(e.message)})
    }

   if(!loading){
        return <div>Loading ...</div>;
    }
    return (
        
        <div className='fruitsAndVegies'>

            <h3 className='title'>PRODUCTS</h3>

            <div className='products' >
            <ul>
            {products.map(item =>(
               <li key={item.id}>{item.name}</li> 
            ))}
            </ul>
            </div>
            
            <h3 className='title'>FRUITS</h3>
        
        <div className='fruits' >
            <ul>
            {fruits.map(item =>(
               <li key={item.id}>{item.name}</li> 
            ))}
            </ul>
         </div>


            <h3 className='title' >VEGETABLES</h3>
        <div className='vegetables'>
           <ul>
            {vegetables.map(item =>(
               <li key={item.id}>{item.name}</li> 
            ))}
            </ul>
        </div>

        </div>
    )
}

export default Products