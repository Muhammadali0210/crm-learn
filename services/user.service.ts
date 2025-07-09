import { apiFetch } from "./api";

export interface UserQueryParams {
    page?: number
    limit?: number
    email?: string
}

export async function getAllUsers() {
    return apiFetch('/users')
}

export async function getUserById(id: string) {
    return apiFetch(`/users/${id}`)
}

export async function getUserByFilter(params: UserQueryParams = {}) {
    const query = new URLSearchParams()

    if (params.email) query.set('email', params.email)
    if (params.page) query.set('_page', params.page.toString())
    if (params.limit) query.set('_limit', params.limit.toString())

    return apiFetch(`/users?${query.toString()}`)
}