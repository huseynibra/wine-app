import logo from './logo.svg';
import './App.css';
import Wine from './Component/Wine';

function App() {
  
    return (
   
      <div className="Products">
                <Wine
                title='Wine1'
                description='keep at cold place'
                rating={4.5}
                isLike
                />

            </div>
      )
    }
    
  export default App
 

