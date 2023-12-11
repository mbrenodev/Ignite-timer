import { useContext, useState } from 'react'
import { HistoryContainer, HistoryList, Pagination, Status } from './styles'
import { CyclesContext } from '../../contexts/CyclesContext'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { CaretLeft, CaretRight } from 'phosphor-react'

export function History() {
  const { cycles } = useContext(CyclesContext)

  const itensPerPage = 5
  const [currentPage, setCurrentPage] = useState(0)

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

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      {/* <pre>{JSON.stringify(cycles, null, 2)}</pre> */}
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefas</th>
              <th>Duração</th>
              <th>Ínicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {currentItens.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td>
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {cycle.finishedDate && (
                      <Status statuscolor="green">Concluido</Status>
                    )}
                    {cycle.interruptedDate && (
                      <Status statuscolor="red">Interrompido</Status>
                    )}
                    {!cycle.finishedDate && !cycle.interruptedDate && (
                      <Status statuscolor="yellow">Em andamento</Status>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>

        <Pagination>
          <button onClick={() => handlePrevPage()} disabled={currentPage === 0}>
            <CaretLeft />
          </button>
          <span>
            {currentPage + 1} de {pages}
          </span>
          <button
            onClick={() => handleNextPage()}
            disabled={pages === currentPage + 1}
          >
            <CaretRight />
          </button>
        </Pagination>
      </HistoryList>
    </HistoryContainer>
  )
}
