import './MainStyle.css'
const Main = () =>{
    const namechnage = () =>{
        const name = ["Dhamrinder", "Singh" ]
        const int = Math.floor(Math.random() * 2);
    
        return name[int];
      }
      const clickButton = () =>{
        console.log("you click")
      }
      const clickButton2 = (name) =>{
        console.log(`${name} hello`)
      }
      const clickButton3 = (e) =>{
        console.log(e.target.innerHTML)
      }
      return (
        <main className='main'>
            <p>Hello {namechnage()}!</p>
            <button className='btn' onClick={clickButton}>click it</button>
            <button className='btn' onClick={()=>{clickButton2('dharminder')}}>click it</button>
            <button className='btn' onClick={(e)=>{clickButton3(e)}}>click it</button>
        </main>
    )
}

export default Main