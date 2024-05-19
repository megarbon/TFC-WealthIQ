const API_BASE_URL = 'http://localhost:8888/users';

export async function getAllUsers() {
    const response = await fetch(`${API_BASE_URL}/getAll`);
    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }
    return await response.json();
}

export async function getUserById(id: number) {
    const response = await fetch(`${API_BASE_URL}/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch user FFFFFF');
    }
    return await response.json();
}

export async function createUser(user: any) {
    const response = await fetch(`${API_BASE_URL}/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    if (!response.ok) {
        throw new Error('Failed to create user');
    }
    return await response.json();
}

export async function deleteUser(id: number) {
    const response = await fetch(`${API_BASE_URL}/delete/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error('Failed to delete user');
    }
}

export async function updateUser(id: number, userDetails: any) {
    const response = await fetch(`${API_BASE_URL}/update/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userDetails)
    });
    if (!response.ok) {
        throw new Error('Failed to update user');
    }
    return await response.json();
}

