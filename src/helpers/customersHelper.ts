const getActiveClients = (clients: any) => {
    if(clients){
        const activeClients : any = clients.filter((client: { status: string; }) => client.status === "active");
    }

    return activeClients.length
}

export {getActiveClients}