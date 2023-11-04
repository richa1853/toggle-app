import './App.css';
import {connect} from 'react-redux';
import {toggleCreate} from './Actions/toggleAction'

const mapStateToProps=(state)=>{
  return{
    isToggled: state.toggle.isToggled,
  }
}
const mapDispatchToProps={
  toggle:toggleCreate
}

function App( {isToggled,toggle}) {
  return (
    <div className="App">
     <h1>Toggle App</h1>
     <div>
      <button onClick={toggle}>{ isToggled?'ON':'OFF'}</button>
      <p>Toggle:{isToggled?'ON':'off'}</p>
     </div>
    </div>
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
