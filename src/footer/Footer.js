import './footerStyle.css';
const Footer = ({lenght}) =>{
    const today = new Date();
    return(
        <footer>
            <p>Copyright &copy; {today.getFullYear()}</p>
        </footer>
    )
}

export default Footer