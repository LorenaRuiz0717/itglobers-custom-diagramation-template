import React, { ReactNode } from "react"
import customGridSchema from "../schemas/custom-grid-schema"
import CustomGridItemBig from "./CustomGridItemBig"
import CustomGridItemSmall from "./CustomGridItemSmaill"
import styles from "./styles.css"

type Props = {
  gridType: Number
  children: [
    ReactNode,
    ReactNode,
    ReactNode,
    ReactNode,
    ReactNode
  ]
}

const CustomGrid = ({ gridType = 1, children }: Props) => {
  console.log(gridType);
  const gridTypesClass:string=`grid__${gridType}`
  return (
    <div className={styles[gridTypesClass]}>
      <CustomGridItemBig
        element={children[0]}
      />
      <CustomGridItemSmall
        elementOne={children[1]}
        elementTwo={children[2]}
      />
      <CustomGridItemSmall
        elementOne={children[3]}
        elementTwo={children[4]}
      />
    </div>
  )
}

CustomGrid.schema = customGridSchema

export default CustomGrid
