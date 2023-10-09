import React from 'react'
import data from '../utils/data.json'
import Cards from '../components/Cards'

function Home() {
    let currentRank = 1
    const sortedData = [...data].sort((a, b) => b.elo - a.elo)

    return (
        <main>
            <div className="cardsContainer">
                <table style={{ width: '70%' }}>
                    <caption>Classement General</caption>
                    <thead className="ranking">
                        <tr className="entete">
                            <th className="ranking">Rank</th>
                            <th className="rank-avatar">Avatar</th>
                            <th style={{ width: '25%' }}>Pseudo</th>
                            <th>Elo</th>
                            <th className="rank-win-rate">Win Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.map((player, id) => (
                            <tr key={id}>
                                <Cards
                                    rank={currentRank++}
                                    name={player.name}
                                    avatar={player.avatar}
                                    elo={player.elo}
                                    winRate={player.winRate}
                                />
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default Home
