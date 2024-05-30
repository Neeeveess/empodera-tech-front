import { CardFAQ } from '../../../components/CardFAQ'
import { FAQContainer, FAQContent } from './style'

export function FAQSection() {
  return (
    <FAQContainer>
      <FAQContent>
        <h2>Dúvidas frequentes</h2>
        <CardFAQ question="1 - Como o curso vai funcionar?">
          <p>
            Todos os alunos ingressantes farão parte de atividades e aulas
            online síncronas e assíncronas para aprender sobre conceitos,
            habilidades e ferramentas básicas para o início da capacitação,
            fazendo uma revisão sobre princípios básicos de sua área escolhida.
            O conteúdo será distribuído em 8 módulos. Ao longo do curso, o aluno
            será orientado pelo professor e um monitor a cada módulo,
            participando de atividades em grupos para colocar em prática todo
            conhecimento adquirido nos encontros síncronos que ocorreram em
            sábados alternados. Entre cada módulo, os alunos poderão agendar um
            horário com um de nossos profissionais para uma consultoria.
          </p>
        </CardFAQ>
        <CardFAQ question="2 – Qual a duração do curso?">
          <p>
            O curso tem duração máxima de 4 meses e uma carga horária total de
            160 horas.
          </p>
        </CardFAQ>
        <CardFAQ question="3 - Quem poderá fazer o curso?">
          <p>
            Programa destinado a mulheres que possuem interesse em ingressar na
            tecnologia. Estudantes universitários com graduação em andamento,
            profissionais de tecnologia que já estão em início de carreira ou em
            transição ou em outras áreas e que desejam ampliar sua área de
            atuação.
          </p>
        </CardFAQ>
        <CardFAQ question="4 – Qual será a ferramenta usada nas aulas?">
          <p>
            As aulas serão transmitidas através do Google Meet. Para as alunas
            que não puderem participar, as aulas serão gravadas e
            disponibilizadas na plataforma.
          </p>
        </CardFAQ>
        <CardFAQ question="5 – Quais serão os critérios de aprovação para conseguir fazer parte do programa?">
          <p>
            Após a sua inscrição, haverá outras etapas eliminatórias (perfil
            profissional e pessoal, provas, entrega de documentação). Critérios
            adicionais previstos em edital poderão ser utilizados como critério
            de desempate. Importante lembrar que as vagas são limitadas.
          </p>
        </CardFAQ>
        <CardFAQ question="6 – O curso tem certificado?">
          <p>
            Ao finalizar o curso, o aluno receberá seu certificado com a carga
            horária de 120 horas. Será preciso obter no mínimo de 75% de
            presença e média final maior ou igual a 7.
          </p>
        </CardFAQ>
        <CardFAQ question="7 – Como funcionará a consultoria?">
          <p>
            A consultoria para mulheres no mercado de tecnologia é essencial
            para promover a igualdade de gênero e apoiar o avanço profissional
            das mulheres nesse setor. A consultoria capacita as mulheres a
            superarem barreiras, desenvolverem habilidades técnicas e não
            técnicas, e aproveitarem as oportunidades de carreira na indústria
            de tecnologia. Além disso, a consultoria promove networking,
            construção de relacionamentos e fortalecimento da confiança, criando
            uma comunidade de mulheres capacitadas e conectadas. Ao investir em
            consultoria, as mulheres têm acesso a conhecimentos atualizados
            sobre o mercado de tecnologia, se tornam profissionais completas e
            contribuem para uma indústria mais diversificada e inclusiva. Para
            cada módulo concluído do curso, teremos uma sessão exclusiva com
            profissionais de diversas áreas para falar sobre formação acadêmica,
            carreia profissional, medos, desistências, estudos, capacitações...
            Nosso objetivo com essa consultoria é prestar uma orientação de
            carreira, preparação para entrevistas e processos seletivos, como
            montar seu currículo, apoio emocional e fortalecimento da confiança,
            conhecimento das demandas do mercado, networking, construção de
            relacionamentos profissionais e o empoderamento.
          </p>
        </CardFAQ>
      </FAQContent>
    </FAQContainer>
  )
}
