import logo from '/src/assets/creatememesLogo.png'

export default function Header() {
    return(
        <>
            <header>
                <img src={logo}/>
                <h1>Create Memes</h1>
            </header>
        </>
    )
}