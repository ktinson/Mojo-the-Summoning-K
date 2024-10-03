import './Card.css'

function Card({ card }) {
  return (
    <article className='card'>
      <img src={card.imgUrl} alt={card.title} />
      <div className='details'>
        <h2>{card.title}</h2>
        <ul>
          <li>
            Mojo <span className='num'>{card.mojo}</span>
          </li>
          <li>
            Stamina <span className='num'>{card.stamina}</span>
          </li>
        </ul>
      </div>
    </article>
  )
}

export default Card
