import { useContext, useState } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'

export const useHistoryHook = () => {
  const { cycles } = useContext(CyclesContext)
  const [currentPage, setCurrentPage] = useState(0)

  const itensPerPage = 5

  const startIndex = currentPage * itensPerPage
  const endIndex = startIndex + itensPerPage

  const currentItens = cycles.slice(startIndex, endIndex)

  const pages = Math.ceil(cycles.length / itensPerPage)

  function handleNextPage() {
    setCurrentPage(currentPage + 1)
  }

  function handlePrevPage() {
    setCurrentPage(currentPage - 1)
  }

  return {
    currentPage,
    handleNextPage,
    handlePrevPage,
    currentItens,
    pages,
  }
}
