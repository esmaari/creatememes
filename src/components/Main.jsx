import { useState, useEffect } from "react"

export default function Main() {
    const [meme, setMeme] = useState({
        topText:'This is a top text',
        bottomText:'This is a bottom text',
        img: '/src/assets/creatememesLogo.png'
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
        
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const memeImageUrl = allMemes[randomNumber].url
  
        setMeme((prevMeme) => ({
            ...prevMeme,
            img: memeImageUrl
        })
        )

    }

    function handleChange(event) {
        const {name, value} = event.currentTarget
        setMeme(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return(
        <>

        <div className="formContainer">
            <form>
                <label htmlFor="topText">Top Text:</label>
                <input
                    placeholder="Give me the money"
                    aria-label="topText"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <label htmlFor="buttomText">Bottom Text:</label>
                <input 
                    placeholder="Honeyy!"
                    aria-label="buttomText"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
            </form>

            <button onClick={getMemeImage} className="get-img-btn">Get a new meme image</button>

            <div className="meme-container">
                <img src={meme.img}></img>
                <p className="top-text">{meme.topText}</p>
                <p className="bottom-text">{meme.bottomText}</p>
            </div>

            <p className="credits">
                Templates via <a href="https://imgflip.com" target="_blank" rel="noopener noreferrer">Imgflip</a>
            </p>
        </div>
        </>
    )
}