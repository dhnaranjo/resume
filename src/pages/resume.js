import React from 'react'
import Link from 'gatsby-link'
import { format } from 'date-fns'

const abbrDate = date => {
  const month = format(date, 'MMM')
  const year = format(date, 'YY')
  return <span>{month}&thinsp;&lsquo;{year}</span>
}

const fullDate = date => {
  const month = format(date, 'MMMM')
  const year = format(date, 'YY')
  return <span>{month}&thinsp;&lsquo;{year}</span>
}

const DateRange = ({startDate, endDate}) => {
  const start = new Date(startDate)
  const end   = new Date(endDate)
  return (
    <div className='dateRange'>
      <span className='dateRange--short'>{abbrDate(start)}&ndash;{abbrDate(end)}</span>
      <span className='dateRange--full'>{fullDate(start)}&ndash;{fullDate(end)}</span>
    </div>
  )
}

const experienceMarkup = ({ 
  company,
  title,
  startDate,
  endDate,
  summary,
  bullets,
}) => (
  <div>
    <h3>{company}</h3>
    <span>{title}</span> 
    <DateRange startDate={startDate} endDate={endDate} />
    <p>{summary}</p>
    <ul>
      { bullets && bullets.map(bullet => <li>{bullet}</li>)}
    </ul>
  </div>
)
const Experience = ({experiences}) => (
  <div>
    { experiences.map(experience => experienceMarkup(experience)) }
  </div>
)

const schoolMarkup = ({
  school,
  degree,
  startDate,
  endDate,
  summary,
}) => (
  <div>
    <h3>{school}</h3>
    <span>{degree}</span>
    <DateRange startDate={startDate} endDate={endDate} />
  </div>
)
const Education = ({education}) => (
  <div>
    { education.map(school => schoolMarkup(school)) }
  </div>
)

export default ({ data }) => {
  const { education, experiences, skills } = data.dataYaml
  console.log(data)
  console.log(education)
  console.log(experiences)
  console.log(skills)

  return <div>
    <h1>Resume Placeholder</h1>
    <Link to="/">Go back to the homepage</Link>
    <Experience experiences={experiences} />
    <Education education={education} />
  </div>
}

export const query = graphql`
        query ResumeQuery {
          dataYaml {
            experiences {
              company
              title
              startDate
              endDate
              summary
              bullets
            }
            education {
              school
              degree
            }
            skills {
              main
              sub
            }
          }
          }
          `
