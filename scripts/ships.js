import { getShippingShips, getHaulers } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const whatWasClickedOn = clickEvent.target
        const haulers=getHaulers()
        let haulerIdNumber = whatWasClickedOn.dataset.hauler
        let shipName = whatWasClickedOn.dataset.name
        let haulingShip = {}


        for (const hauler of haulers) {
            if (haulerIdNumber == hauler.haulerId) {
                haulingShip = hauler
            }
        }

        if (whatWasClickedOn.dataset.type === "ship") {
            window.alert(`${shipName} is being hauled by ${haulingShip.haulerName}`)
        }
    }
)

export const ShippingShipList = () => {
    const ships = getShippingShips()

    let shipHTML = "<ul>"

    for (const ship of ships) {
        // Convert each dock object to an <li> and append to the docksHTML string
        shipHTML +=
        `
        <li
        data-type="ship"
        data-hauler="${ship.haulerId}"
        data-name="${ship.shipName}"
        >${ship.shipName}</li>
        `
    }

    shipHTML += "</ul>"

    return shipHTML
}