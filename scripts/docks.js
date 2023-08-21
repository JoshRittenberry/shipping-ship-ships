import { getDocks, getHaulers } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const whatWasClickedOn = clickEvent.target
        const haulers = getHaulers()
        let dockIdNumber = whatWasClickedOn.dataset.id
        let location = whatWasClickedOn.dataset.location
        let unloadingHaulers = []

        for (const unloading of haulers) {
            if (dockIdNumber == unloading.dockId) {
                unloadingHaulers.push(unloading.haulerName)
            }
        }

        if (whatWasClickedOn.dataset.type === "dock") {
            if (unloadingHaulers.length > 0) {
                window.alert(`The ${location} dock is currently unloading ${unloadingHaulers}`)
            } else if (unloadingHaulers.length <= 0) {
                window.alert(`The ${location} dock is currently unloading nothing`)
            }
        }

    }
)

export const DockList = () => {
    const docks = getDocks()

    let docksHTML = "<ul>"

    for (const dock of docks) {
        // Convert each dock object to an <li> and append to the docksHTML string
        docksHTML +=
        `
        <li
        data-type="dock"
        data-id="${dock.dockId}"
        data-location="${dock.location}"
        >${dock.location} can hold ${dock.volume} million tons of cargo</li>
        `
    }

    docksHTML += "</ul>"

    return docksHTML
}