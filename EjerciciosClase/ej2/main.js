const client = {
    id: 32,
    name: 'Ivan',
    secondName: 'Ceballos',
    age: 12,
    address: 'Calle de la Virgen del Carmen',
    getFullName: function () {
        return `${this.name} ${this.secondName}`;
    },
};

function createClient(name, secondName, age, address) {
    const tempClient = {};

    Object.assign(tempClient, client);

    tempClient.id++;
    tempClient.name = name;
    tempClient.secondName = secondName;
    tempClient.age = age;
    tempClient.address = address;

    return tempClient;
}

const cliente2 = createClient('Carlos', 'Alcántara', 23, 'Calle Hierro, 23');
/*console.log({
    client, cliente2
});*/