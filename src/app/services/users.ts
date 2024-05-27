export const fetchUsersById = async (id: any): Promise<any> => {
    try {
        const response = await fetch(`http://localhost:2000/users/${id}`);
        const data = await response.json();

        return data;

    } catch (error) {
        console.error("Error fetching user:", error);
    }
};