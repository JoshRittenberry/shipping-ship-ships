import { DockList } from "./docks.js"
import { HaulerList } from "./haulers.js"
import { ShippingShipList } from "./ships.js"

const dockList = document.querySelector(".docks__list")
dockList.innerHTML = DockList()

const haulerList = document.querySelector(".haulers__list")
haulerList.innerHTML = HaulerList()

const shippingShipList = document.querySelector(".shipping-ships__list")
shippingShipList.innerHTML = ShippingShipList()