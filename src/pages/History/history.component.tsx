import { useHistoryHook } from './history.hook'
import ptBR from 'date-fns/locale/pt-BR'
import { formatDistanceToNow } from 'date-fns'
import { CaretLeft, CaretRight } from 'phosphor-react'

import {
  HistoryContainer,
  HistoryList,
  Pagination,
  Status,
} from './history.styles'

export function History() {
  const { handleNextPage, handlePrevPage, currentPage, currentItens, pages } =
    useHistoryHook()

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
                      <Status statuscolor="green">Concluído</Status>
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
