import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import "../scss/global.scss"
import "../scss/index.scss"



const IndexPage = () => {
const data = useStaticQuery(graphql`
query PokemonsQuery {
    pokemons {
      pokemons(first: 151) {
        id
        classification
        image
        maxCP
        maxHP
        name
        number
        resistant
        types
        weaknesses
      }
    }
  }
`)
  function getPokemons(data) {
    const pokemonsArray = []
    data.pokemons.pokemons.forEach((item, index) => {
      pokemonsArray.push(
        <div className={`pokecard ${item.types}`} key={index}>
          <span className="pokecard__number">#{item.number}</span>
          <div className="pokecard__power">
            <h3 className="pokecard__power__hp">Hp {item.maxHP}</h3>
            <h3 className="pokecard__power__cp">Cp {item.maxCP}</h3>
          </div>
          <h2 className="pokecard__name">{item.name}</h2>
          <h3 className="pokecard__group">Grupo: {item.types}</h3>
          <h3 className="pokecard__class">Clasificación: {item.classification}</h3>
          <img className="pokecard__img" src={item.image}/>
          <h3 className="pokecard__res"><strong>Resistente a:</strong> {item.resistant}</h3>
          <h3 className="pokecard__weak"><strong>Debilidad:</strong> {item.weaknesses}</h3>
        </div>
      )
    })
    return pokemonsArray
  }

  return(
    <Layout>
      <h1 className="title"> - Pokemones -</h1>
      <div className="grid">
      {getPokemons(data)}
      </div>
    </Layout>
  )
}

export default IndexPage
