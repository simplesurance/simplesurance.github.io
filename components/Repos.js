import React, { Component } from 'react'
import RepoCard from  './RepoCard'

export default class Repos extends Component {
  constructor (props) {
    super(props)

    this.state = {
      repos: []
    }

    this.getRepos(props)
  }

  async getRepos (props) {
    const resp = await fetch('https://api.github.com/orgs/simplesurance/repos')
    const repos = await resp.json()

    this.setState({ repos: repos })
  }

  render () {
    const ownRepos = this.state.repos.filter( repo => repo.fork === false )
    return (<div>
      <ul>
        {ownRepos.map( repo => (<li key={repo.url}><RepoCard {...repo} /></li>) )}
      </ul>
    </div>)
  }
}
