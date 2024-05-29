import { FormContainer, FormContent, FormGroup } from './style'

export function FormSection() {
  return (
    <FormContainer>
      <FormContent>
        <h2>Inscreva-se aqui!</h2>
        <FormGroup>
          <div className="line">
            <div className="item">
              <label htmlFor="nome">Nome</label>
              <input
                id="nome"
                name="nome"
                type="text"
                placeholder="Digite seu nome"
              />
            </div>
            <div className="item">
              <label htmlFor="sobrenome">Sobrenome</label>
              <input
                id="sobrenome"
                name="sobrenome"
                type="text"
                placeholder="Digite seu sobrenome"
              />
            </div>
          </div>
          <div className="line">
            <div className="item">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Digite seu email"
              />
            </div>
            <div className="item">
              <label htmlFor="cpf">CPF</label>
              <input
                id="cpf"
                name="cpf"
                type="text"
                placeholder="Digite seu cpf"
              />
            </div>
          </div>
          <div className="line">
            <div className="item">
              <label htmlFor="telefone">Telefone</label>
              <input
                id="telefone"
                name="telefone"
                type="tel"
                placeholder="Digite seu telefone"
              />
            </div>
            <div className="item">
              <label htmlFor="data-nascimento">Data de nascimento</label>
              <input
                id="data-nascimento"
                name="data-nascimento"
                type="date"
                placeholder="Digite sua data de nascimento"
              />
            </div>
          </div>
          <div className="line">
            <div className="item">
              <label htmlFor="escolaridade">Escolaridade</label>
              <select name="escolaridade" id="escolaridade">
                <option value="">Selecione sua escolaridade</option>
                <option value="ensino-fundamental-incompleto">
                  Ensino fundamental incompleto
                </option>
                <option value="ensino-fundamental-completo">
                  Ensino fundamental completo
                </option>
                <option value="ensino-medio-incompleto">
                  Ensino médio incompleto
                </option>
                <option value="ensino-medio-completo">
                  Ensino médio completo
                </option>
                <option value="ensino-superior-incompleto">
                  Ensino superior incompleto
                </option>
                <option value="ensino-superior-completo">
                  Ensino superior completo
                </option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="cidade">Cidade</label>
              <input
                id="cidade"
                name="cidade"
                type="text"
                placeholder="Digite sua cidade"
              />
            </div>
          </div>
        </FormGroup>
      </FormContent>
    </FormContainer>
  )
}
