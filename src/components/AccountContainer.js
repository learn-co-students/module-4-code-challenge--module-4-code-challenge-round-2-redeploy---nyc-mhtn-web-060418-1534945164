import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

const API = 'https://boiling-brook-94902.herokuapp.com/transactions'

class AccountContainer extends Component {

  state = {
    mainData: [],
    changingData: [],
    searchTerm: ''
  }

  fetchAPI = () => {
    return fetch(API).then(response=> response.json()).then(data=> this.setState({
      mainData: data,
      changingData: data
    }))
  }

  componentDidMount() {
    this.fetchAPI()
  }

  handleChange = (event) => {
    // console.log("changed");
    this.setState({
      searchTerm: event.target.value
    }, () => this.filterWords()  )
  }

  filterWords = () => {
    let foundWords = this.state.mainData.filter((one)=>
      one.description.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
      one.category.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    )

    this.setState({
      changingData: foundWords
    })
  }

  render() {

    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange} />
        <TransactionsList changingData={this.state.changingData} />
      </div>
    )
  }
}

export default AccountContainer
