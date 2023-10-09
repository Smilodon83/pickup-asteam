import PropTypes from 'prop-types'

function Cards({ rank, name, avatar, elo, winRate }) {
    return (
        <>
            <td className="ranking">{rank}</td>
            <td className="rank-avatar">
                {' '}
                <img className="cardCover" src={avatar} alt="Avatar" />{' '}
            </td>
            <td className="rankInfo">{name}</td>
            <td className="rankInfo">{elo}</td>
            <td className="rank-win-rate">{winRate} %</td>
        </>
    )
}

// Sécurisation props
Cards.propTypes = {
    rank: PropTypes.number,
    name: PropTypes.string.isRequired,
    elo: PropTypes.string,
    winRate: PropTypes.string,
    avatar: PropTypes.string,
}

Cards.defaultProps = {
    rank: '0',
    name: 'Nom par défaut',
}

export default Cards
