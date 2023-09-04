import './pad.css'

function pad(props) {
    const { name, kb, link, getName } = props

    function Keyclick(e) {
        const key = e.target.innerText
        const audio = document.querySelector(`audio[id="${key}"]`)
        if (!audio) return;
        audio.currentTime = 0
        audio.play()
        getName(key)
    }


    return (
        <>
            <div className="drum-pad" id={name} onClick={Keyclick}>
                <button>{kb}</button>
                <audio className="clip" id={kb} src={link}></audio>
            </div>
        </>
    )
}

export default pad