import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'
import { z } from 'zod'

import { subscribe } from '../../../api/form'
import { Button } from '../../../components/Button'
import { calcBithday } from '../../../ultils/calcBithday'
import { FormContainer, FormContent, FormGroup } from './style'

const subscribleForm = z.object({
  nome: z.string(),
  idade: z.number(),
  sobrenome: z.string(),
  email: z.string().email('Informe um email válido'),
  cpf: z.string().length(11, 'Digite um CPF válido'),
  celular: z.string().min(11, 'Digite um celular válido'),
  nascimento: z.date(),
  escolaridade: z.enum([
    'ensino-fundamental-incompleto',
    'ensino-fundamental-completo',
    'ensino-medio-incompleto',
    'ensino-medio-completo',
    'ensino-superior-incompleto',
    'ensino-superior-completo',
  ]),
  cidade: z.string(),
})

export type SubscribleForm = z.infer<typeof subscribleForm>

export function FormSection() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SubscribleForm>({
    resolver: zodResolver(subscribleForm),
  })

  async function handleFormSubmit(data: SubscribleForm) {
    try {
      data.celular = data.celular.toString().replace(/\D/g, '')

      data.idade = calcBithday(data.nascimento)

      console.log(errors)
      console.log(data)
      await subscribe(data)
    } catch {}
  }

  return (
    <FormContainer>
      <FormContent>
        <h2>Inscreva-se aqui!</h2>
        <FormGroup onSubmit={handleSubmit(handleFormSubmit)}>
          {/* <input type="hidden" {...register('idade')} value={} /> */}
          <div className="line">
            <div className="item">
              <label htmlFor="nome">Nome</label>
              <input
                id="nome"
                type="text"
                placeholder="Digite seu nome"
                {...register('nome')}
              />
            </div>
            <div className="item">
              <label htmlFor="sobrenome">Sobrenome</label>
              <input
                id="sobrenome"
                type="text"
                placeholder="Digite seu sobrenome"
                {...register('sobrenome')}
              />
            </div>
          </div>
          <div className="line">
            <div className="item">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Digite seu email"
                {...register('email')}
              />
            </div>
            <div className="item">
              <label htmlFor="cpf">CPF</label>
              <InputMask
                id="cpf"
                mask="999.999.999-99"
                type="text"
                placeholder="Digite seu cpf"
                {...register('cpf')}
              />
            </div>
          </div>
          <div className="line">
            <div className="item">
              <label htmlFor="celular">Celular</label>
              {errors.celular && <span>{errors.celular.message}</span>}
              <InputMask
                id="celular"
                mask="(99) 99999-9999"
                type="text"
                placeholder="Digite seu celular"
                {...register('celular')}
              />
            </div>
            <div className="item">
              <label htmlFor="nascimento">Data de nascimento</label>
              <input
                id="nascimento"
                type="date"
                placeholder="Digite sua data de nascimento"
                {...register('nascimento')}
              />
            </div>
          </div>
          <div className="line">
            <div className="item">
              <label htmlFor="escolaridade">Escolaridade</label>
              <select id="escolaridade" {...register('escolaridade')}>
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
                type="text"
                placeholder="Digite sua cidade"
                {...register('cidade')}
              />
            </div>
          </div>
          <Button
            type="submit"
            text="Enviar"
            variation="primary"
            disabled={isSubmitting}
          />
        </FormGroup>
      </FormContent>
    </FormContainer>
  )
}
