import { users } from './users.js'

export const getUsers = (req, res) => {
    
  res.json({ success: true, payload: users})
}
