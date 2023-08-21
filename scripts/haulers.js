import { getHaulers, getShippingShips } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const whatWasClickedOn = clickEvent.target

        if (whatWasClickedOn.dataset.type === "hauler") {
            window.alert(`This hauler is carrying ${whatWasClickedOn.dataset.ships} ships`)
        }
    }
)

export const HaulerList = () => {
    const haulers = getHaulers()
    const shippingShips = getShippingShips ()

    let haulerHTML = "<ul>"

    for (const hauler of haulers) {

        // Created an empty array. Then created a for loop to find what shippingShips are assigned to the iterated hauler and adding those ships to the array. This data is necessary to create the dataset for the iterated hauler.

        let shipList = []

        for (const ship of shippingShips) {
            if (ship.haulerId === hauler.haulerId) {
                shipList.push(ship)
            }
        }

        // Convert each dock object to an <li> and append to the docksHTML string
        haulerHTML +=
        `
        <li

        data-type="hauler"
        data-id="${hauler.haulerId}"
        data-ships="${shipList.length}"
        >${hauler.haulerName}</li>
        `
    }

    haulerHTML += "</ul>"

    return haulerHTML
}