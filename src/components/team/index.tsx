import React from 'react'
import graphData from './graphsData'
import Container from './styles'
import TeamMembers from './team-members'

const Team = () => {
  return (
    <Container id="Team">
      <div className="team">
        <div className="team-title">
          <hr />
          <h2>
            We are multidisciplinary <strong>team</strong> of designer and
            creative people
          </h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <strong> Maecenas metus</strong> nulla, commodo a sodales sed,
            dignissim pretium nunc. Nam et lacus neque. Sed volutpat ante id
            mauris laoreet <strong>vestibulum</strong>. Nam blandit felis non
            neque cursus aliquet. Morbi vel enim dignissim massa dignissim
            commodo vitae quis tellus.
          </p>
        </div>
        <TeamMembers />
        <div className="team-graphs">
          <h2>
            We a are multidisciplinary <strong>skills</strong>
          </h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <strong> Maecenas metus</strong> nulla, commodo a sodales sed,
            dignissim pretium nunc. Nam et lacus neque. Sed volutpat ante id
            mauris laoreet <strong>vestibulum</strong>. Nam blandit felis non
            neque cursus aliquet. Morbi vel enim dignissim massa dignissim
            commodo vitae quis tellus.
          </p>
          <div className="graphs">
            {graphData.map((item, key) => (
              <div className="graph" key={key}>
                <img src={item.graph} />
                <h3>{item.percentage}</h3>
                <h4>{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Team
