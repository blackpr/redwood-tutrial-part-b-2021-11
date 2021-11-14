import { render } from '@redwoodjs/testing/web'

import Comment from './Comment'

describe('Comment', () => {
  it.skip('renders successfully', () => {
    const com = {
      name: 'Rob Cameron',
      body: 'This is the first comment!',
      createdAt: '2020-01-02T12:34:56Z',
    }
    render(<Comment comment={com} />)

    expect(screen.getByText(com.name)).toBeInTheDocument()
    expect(screen.getByText(com.body)).toBeInTheDocument()
    const dateExpect = screen.getByText('2 January 2020')
    expect(dateExpect).toBeInTheDocument()
    expect(dateExpect.nodeName).toEqual('TIME')
    expect(dateExpect).toHaveAttribute('datetime', com.createdAt)
  })
})
