import { useState } from "react"

export  function TwitterFollowCard ({userName = 'unknown', children } ) {
    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing ? 'Siguiendo' : "Seguir"
    const buttonClassName = isFollowing ?
     'tw-followCard-button is-following' 
    : "tw-followCard-button"
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    const imgSrc = `https://unavatar.io/${userName}`
return (
    <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar'
                 alt="El avatar de x" src={imgSrc}  />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span> 
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>{text}</button>
            </aside>
        </article>
)
}