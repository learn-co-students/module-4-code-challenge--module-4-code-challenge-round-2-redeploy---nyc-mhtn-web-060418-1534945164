import React from 'react'

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.one["posted_at"]}</td>
      <td>{props.one.description}</td>
      <td>{props.one.category}</td>
      <td>{props.one.amount}</td>
    </tr>
  )
}

export default Transaction
