import React from 'react';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import DashboardLayout from '../../components/layouts/dashboard';
import Button from '../../components/elements/Button';

const CourseDetails: React.FC = () => {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const { id } = router.query

  return (
    <DashboardLayout>
      <div className="column is-8">
        <div className="panel columns">
        <div className="column is-4 has-background-white" style={{display: "inline"}}>
          <p className="panel-heading has-background-info has-text-white">
            Unidades
          </p>
          <div className="pt-4">
            <a className="panel-block is-active" href="/course/unit/{{ lesson_unit.id }}">
              <span className="panel-icon">
                <i className="fas fa-book" aria-hidden="true"></i>
              </span>
              Hello World
            </a>
          </div>
          <div className="pt-4">
            <a className="panel-block is-active" href="/course/unit/{{ lesson_unit.id }}">
              <span className="panel-icon">
                <i className="fas fa-book" aria-hidden="true"></i>
              </span>
              Hello
            </a>
          </div>
          <div className="pt-4">
            <a className="panel-block is-active" href="/course/unit/{{ lesson_unit.id }}">
              <span className="panel-icon">
                <i className="fas fa-book" aria-hidden="true"></i>
              </span>
              World
            </a>
          </div>
        </div>

        <div className="column is-8 has-background-white" style={{display: "inline"}}>
          <p className="panel-heading has-background-info has-text-white">
            Hello World
          </p>
          <div className="content-display p-2 pt-4 has-text-left">
            <p className="pb-4">
              Ao longo desta lição, veremos algumas das diferentes maneiras com
              que os falantes de inglês se cumprimentam. Veremos como você pode
              fazer outra pessoa e lhes daremos algumas informações básicas sobre
              você.
            </p>
            <p className="pb-4">
              Existem algumas razões para isso. Em primeiro lugar, queremos
              começar a ver algumas palavras em inglês! Queremos ver como elas se
              parecem e como soam, e como as frases funcionam no idioma inglês.
              Não apenas isso, mas quando encontramos outros falantes de inglês,
              queremos saber como cumprimentá-los e nos apresentar.
            </p>
            <p className="pb-4">
              Para isso, precisamos dar uma olhada em como podemos dizer coisas
              como 'oi, tudo bem?' ou 'meu nome é...', e também precisaremos saber
              como responder a essas perguntas ou declarações. E em vez de olhar
              estritamente para perguntas e respostas típicas, vamos olhar para
              algumas das diferentes coisas que os falantes de inglês podem dizer
              em situações normais do dia a dia, mas também em uma linguagem mais
              formal.
            </p>
            <p className="pb-4">
              O que vamos aprender:
            </p>
            <p className="pb-4">
              Agora que sabemos o que aprenderemos, vamos começar!
            </p>
          </div>
        </div>

      </div>
    </div>
    </DashboardLayout>
  )
}

export default CourseDetails;
