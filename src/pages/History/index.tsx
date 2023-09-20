import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>
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
            <tr>
              <td>Terafe</td>
              <td>20 minutos</td>
              <td>há 2 meses</td>
              <td>
                <Status statuscolor="green">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Terafe</td>
              <td>20 minutos</td>
              <td>há 2 meses</td>
              <td>
                <Status statuscolor="yellow">Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Terafe</td>
              <td>20 minutos</td>
              <td>há 2 meses</td>
              <td>
                <Status statuscolor="red">Interrompido</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
