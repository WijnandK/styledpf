import React from 'react';
import Avatar from "../Image/Avatar"
import stud from "../../static/images/stud.svg"
import controller from "../../static/images/controller.svg"
import machine from "../../static/images/machine.svg"
import mboar from "../../static/images/mboar.svg"

const paragraph1 = `'2014 - 2016 Bachelor of marketing . - dnf -. " Working as process operator while programming on evenings mastering the mern stack. Take a look at my work "`
const paragraph2 = 'Gaming with friends is a nice way too spend time. I also like socializing and being around people.  Powerlifting 3 times a week too keep a healthy. Going for long walk in nature to clear the mind'
const paragraph3 = 'MachineLearning with Python &&  Serverless computing with API Gateway, AWS Lambda and other Amazon Web Services! Zero server config APIs & SPAs '
const paragraph4 = "korlaarwijnand@hotmail.com  Phone: +31651399175"

const data = [
  {
    title: 'CV & Skills',
    paragraph: paragraph1,  
    imageurl: mboar
  },
  {
    title: 'HOBBIES AND FREETIME',
    paragraph: paragraph2,
    imageurl: controller
  },
  {
    title: 'TECHNOLOGY INTERESTS',
    paragraph: paragraph3,
     imageurl: machine
  },
  {
    title: 'CONTACT INFO',
    paragraph:paragraph4,
    imageurl: stud
  }
]

class Accordion extends React.Component {
  render () {
    return (
      <div {...{ className: 'accordion_wrapper' }}>
        <ul {...{ className: 'accordion-list' }}>
          {data.map((data, key) => {
            return (
              <li {...{ className: 'accordion-list__item', key }}>
                <AccordionItem {...data} />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

class AccordionItem extends React.Component {
  state = {
    opened: false
  }
  
  render () {
    const {
      props: {
        paragraph,
        title,
        imageurl
      },
      state: {
        opened
      }
    } = this
    
    return (
      <div
        {...{
          className: `accordion-item, ${opened && 'accordion-item--opened'}`,
          onClick: () => { this.setState({ opened: !opened }) }
        }}
      >
        <div {...{ className: 'accordion-item__line' }}>
          <h3 {...{ className: 'accordion-item__title' }}>
            {title}
          </h3>
          <span {...{ className: 'accordion-item__icon' }}/>
        </div>
          <div {...{ className: 'accordion-item__inner' }}> 
            <div {...{ className: 'accordion-item__content' }}>
              <Avatar image={imageurl} contain/>
              <p {...{ className: 'accordion-item__paragraph' }}>
                {paragraph}
              </p>
            
            </div>
          </div>
      </div>
    )
  }
}

export default  Accordion 