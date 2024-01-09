import './MainStyle.css'
const Main = () =>{
    const namechnage = () =>{
        const name = ["Dhamrinder", "Singh" ]
        const int = Math.floor(Math.random() * 2);
    
        return name[int];
      }
    return (
        <main>
            <p>Hello {namechnage()}!</p>
        </main>
    )
}

export default Main