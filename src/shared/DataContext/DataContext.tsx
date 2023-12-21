import { createContext, useState, useEffect, useContext, useMemo } from "react"
import data from "../../mimeData.json"
import { MimeData } from "../../types/mimeData"

const defaultValue = data

// Create a new context
export const DataContext = createContext<MimeData[]>(defaultValue)

export const DataProvider = ({ children }) => {
    const dataset = useMemo(() => {
        return data.map(mimeData => {
            mimeData["templateData"] = {}
        })
    }, [data])

    return (
        <DataContext.Provider value={{ dataset }}>
            {children}
        </DataContext.Provider>
    )
}
export const useData = () => {
    const context = useContext(DataContext)

    if (context === undefined) {
        throw new Error("useData must be used within a DataProvider")
    }

    return context
}
