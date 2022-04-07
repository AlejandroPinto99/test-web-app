const getActiveClients = (clients: any) => {
    let activeClients = 0;

    if(clients){
        const filteredArray = clients.filter((client: { status: string; }) => client.status === "active");
        activeClients = filteredArray.length;
    }

    return activeClients;
}

export {getActiveClients}