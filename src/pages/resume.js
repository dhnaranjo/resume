import React from 'react'
import { format } from 'date-fns'
import styled, { css, injectGlobal } from 'react-emotion'
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/lib/fa'

import { H1, H2, H3, H4, P, Link, Strong, A } from '../components/type'
import { Ul, Li } from '../components/lists'

const mq = bp => `@media (min-width: ${bp}em)`
const medium = mq(40)

const Organization = styled(H3)``
const Title = styled(H4)`margin: 0;`

const Section = styled.section`
  & > div {
    padding: 0.5em;
    margin-bottom: 1em;

    ${medium} {
      margin-bottom: 1em;
    }
  }
  

  h1 {
    font-variant: small-caps;
    font-weight: 700;
    font-size: 2.5em;
    color: black;
    position: relative;
    top: 0.2em;
  }

  ${medium} {
    display: flex;
    align-items: baseline;

    h1 {
      font-size: 1.602em;
      position: inherit;
      width: 6em;
    }
  }
`

const Details = styled.div`
  ${medium} {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
`

const Category = styled(H2)`
  margin-bottom: 0.5em;
  ${medium} {
    &:after { display: none; }
    width: 6em;
  }
`

const Body = styled.div`
  ${medium} {
    width: 34em;
  }
`

const Entry = styled.div` `
const Summary = styled(P)`
  margin: 0;
`

const Bullets = styled(Ul)`
  display: table;

  list-style: none;
  margin-bottom: 0.5em;

  li {
    margin-bottom: 0;
    margin-left: 1em;
    display: table-row;
  }

  li:before {
    content: "\\2013\\2009";
    display: table-cell;
  }
`

const abbrDate = date => {
  const dateObj = new Date(date)
  const month = format(dateObj, 'MMM')
  const year = format(dateObj, 'YY')
  return <span>{month}&thinsp;&lsquo;{year}</span>
}
const DateRange = styled.span`
  font-family: 'PT Sans';
`

const experienceMarkup = ({ 
  organization,
  title,
  startDate,
  endDate,
  summary,
  bullets,
}) => (
  <Entry>
    <Details>
      <H2>{title} at {organization}</H2>
      <DateRange>
        {abbrDate(startDate)}&#8202;&ndash;&#8202;{abbrDate(endDate)}
      </DateRange>
    </Details>
    <Summary>{summary}</Summary>
    <Bullets>{ bullets && bullets.map(bullet => <Li>{bullet}</Li>)}</Bullets>
  </Entry>
)
const Experiences = ({label, experiences}) => (
  <Section>
    <H1>{label}</H1>
    <Body>
      { experiences.map(experience => experienceMarkup(experience)) }
    </Body>
  </Section>
)

const SkillList = styled(Ul)`
  li, li ul { display: flex; }
  li li { margin-left: 0.5em; }

  ${medium} {
    display: flex;
    flex-wrap: wrap;
    li { flex-basis: 20%; }
    & > li { margin-bottom: 1em; }
    li li { margin-left: 0; }
    li, li ul { display: block; }
  }
`

const skillMarkup = ({ main, sub }) => (
  <Li><Strong>{main}</Strong>
    <Ul>{sub.map(subskill => <Li>{subskill}</Li>)}</Ul>
  </Li>
)
const Skills = ({skills}) => (
  <Section>
    <H1>Skills</H1>
    <Body>
      <SkillList>{ skills.map(skill => skillMarkup(skill)) }</SkillList>
    </Body>
  </Section>
)

const Contact = ({ icon, url, label }) => (
  <Li>
    <A href={url}>
      {icon}&thinsp;<span>{label}</span>
    </A>
  </Li>
  )
const ContactsWrap = styled(Section)`
  span {
    font-family: 'PT Sans';
    position: relative;
    top: 0.15em;
  }

  ul {
    list-style: none;
    ${medium} {
      display: flex;
      justify-content: space-between;
      width: 34em;
    }
  }
`
const Contacts = () => (
  <ContactsWrap>
    <Ul>
      <Contact
        icon={<FaEnvelope />}
        url='mailto:dhnaranjo@gmail.com'
        label='dhnaranjo@gmail'
      />
      <Contact
        icon={<FaGithub />}
        url='https://www.github.com/dhnaranjo'
        label='dhnaranjo@GitHub'
      />
      <Contact
        icon={<FaLinkedin />}
        url='https://www.linkedin.com/in/dhnaranjo'
        label='dhnaranjo@LinkedIn'
      />
    </Ul>
  </ContactsWrap>
)

export default ({ data }) => {
  const { education, work, skills, summary } = data.dataYaml

  return (
    <div>
      <Section>
        <H1>Hi there</H1>
        <div>
          <Body>
            <H2>I'm Desmond Naranjo, designer turned developer</H2>
            <Summary className={css`margin: 0em 0;`}>{summary}</Summary>
            <Contacts />
          </Body>
        </div>
        </Section>
      <Experiences label="Experience" experiences={work} />
      <Experiences label="Education"  experiences={education} />
      <Skills skills={skills} />
    </div>
  )
}

export const query = graphql`
  query ResumeQuery {
    dataYaml {
      summary
      work {
        organization
        title
        startDate
        endDate
        summary
        bullets
      }
      education {
        organization
        title
        startDate
        endDate
        summary
      }
      skills {
        main
        sub
      }
    }
  }
`
