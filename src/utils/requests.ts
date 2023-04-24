import request from "./request-adapter"

export const getUsers = () => request.get('/users')

export const getUserById = (id: string) => request.get(`/users/${id}`)