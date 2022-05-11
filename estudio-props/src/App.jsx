
import './App.css';
import Product from './Product';

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <Product 
      name='Amazon Echo'  
      description='Your AI assistant' 
      price={59.99} 
      />

      <Product 
      name='Google Home'  
      description='Your AI assistant' 
      price={49.99} 
      />

      <Product 
      name='Iphone 14 Pro Max'  
      description='The best Iphone ever'
      price={69.99} 
      />

      <Product 
      name='Macbook Pro '  
      description='Your Favourite Computer'
      price={4000} 
      />
      {/* product name, description, price */}
      {/* product name, description, price */}
      {/* product name, description, price */}
      {/* product name, description, price */}
      

    </div>
  );
}

export default App;
