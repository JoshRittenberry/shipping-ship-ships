const database = {
    docks: [
        { 
            dockId: 1,
            location: "Shanghai, China",
            volume: "43.5"
        },
        {
            dockId: 2,
            location: "Busan, South Korea",
            volume: "21.6"
        },
        {
            dockId: 3,
            location: "Rotterdam, The Netherlands",
            volume: "14.35"
        },
        {
            dockId: 4,
            location: "Antwerp, Belgium",
            volume: "12.04"
        },
        {
            dockId: 5,
            location: "Your Momma's House",
            volume: "1000"
        }
    ],
    haulers: [
        {
            haulerId: 1,
            haulerName: "Pioneering Spirit",
            dockId: 1
        },
        {
            haulerId: 2,
            haulerName: "Boaty McBoatFace",
            dockId: 2
        },
        {
            haulerId: 3,
            haulerName: "Seawise Giant",
            dockId: 3
        },
        {
            haulerId: 4,
            haulerName: "SS Haley Hickey",
            dockId: 4
        },
        {
            haulerId: 5,
            haulerName: "SS Willow and Jolly",
            dockId: 4
        }
    ],
    shippingShips: [
        {
            shipId: 1,
            shipName: "Esso Atlantic",
            haulerId: 1,
        },
        {
            shipId: 2,
            shipName: "Prairial",
            haulerId: 1,
        },
        {
            shipId: 3,
            shipName: "Palais Royal",
            haulerId: 1,
        },
        {
            shipId: 4,
            shipName: "Rivoli",
            haulerId: 2,
        },
        {
            shipId: 5,
            shipName: "Champs Elysee",
            haulerId: 2,
        },
        {
            shipId: 6,
            shipName: "Ever Ace",
            haulerId: 3,
        },
        {
            shipId: 7,
            shipName: "Nissei Maru",
            haulerId: 3,
        },
        {
            shipId: 8,
            shipName: "MSC Gulsun",
            haulerId: 4,
        },
        {
            shipId: 9,
            shipName: "HMM Rotterdam",
            haulerId: 4,
        },
        {
            shipId: 10,
            shipName: "CMA CGM Trocadero",
            haulerId: 5,
        },
    ]
}

export const getDocks = () => {
    return database.docks.map(docks => ({...docks}))
}

export const getHaulers = () => {
    return database.haulers.map(hauler => ({...hauler}))
}

export const getShippingShips = () => {
    return database.shippingShips.map(ship => ({...ship}))
}