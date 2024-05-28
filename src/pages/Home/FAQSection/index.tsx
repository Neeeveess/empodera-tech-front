import { CardFAQ } from '../../../components/CardFAQ'
import { FAQContainer, FAQContent } from './style'

export function FAQSection() {
  return (
    <FAQContainer>
      <FAQContent>
        <CardFAQ question="What is Netflix?">
          <p>
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries, and more on
            thousands of internet-connected devices.
          </p>
        </CardFAQ>
        <CardFAQ question="Lorem ipsum">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
            repellat. Iste facilis nesciunt est tempore. Quibusdam excepturi
            nobis eligendi animi pariatur accusamus consequuntur voluptatum
            doloremque reiciendis delectus? Culpa, magni numquam?
          </p>
        </CardFAQ>
        <CardFAQ question="Lorem ipsum dolor.">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            sequi nisi, voluptatem debitis expedita enim? Nemo, consequatur
            voluptate soluta tempore aperiam quo quisquam. Minus neque ea
            repellendus quis unde cum.
          </p>
        </CardFAQ>
      </FAQContent>
    </FAQContainer>
  )
}
