import React from 'react'
import { compose, withStateHandlers } from 'recompose'
import Table from '../ui/Table'
import contacts from '../data/contacts'

const enhance = compose(
  withStateHandlers(
    {
      list: new Array(5).fill(null).map((_, index) => contacts[index])
    },
    {
      addRandomContact: ({ list }) => () => ({
        list: [...list, contacts[list.length]]
      }),
      sortByName: ({ list }) => () => [
        ...list.sort((a, b) => a.name.localeCompare(b.name))
      ],
      sortByPopularity: ({ list }) => () => [
        ...list.sort((a, b) => b.popularity - a.popularity)
      ],
      deleteContact: ({ list }) => ({ target }) => ({
        list: list.filter((_, index) => Number(target.value) !== index)
      })
    }
  )
)

const TableContainer = ({
  list,
  addRandomContact,
  sortByName,
  sortByPopularity,
  deleteContact
}) => (
  <Table
    {...{ addRandomContact, sortByName, sortByPopularity, deleteContact, list }}
  />
)

export default enhance(TableContainer)
