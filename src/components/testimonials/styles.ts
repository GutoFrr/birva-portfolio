import styled from 'styled-components'

const Container = styled.div`
  .testimonials {
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: 'Lato', sans-serif;
    background-color: rgba(0, 0, 0, 0.8);
  }

  .testimonial-content {
    .testimonial {
      font: 400 20px 'Lato', sans-serif;
      line-height: 1.4;
      color: ${props => props.theme.colors.testimonialText};
      margin-bottom: 13px;
      font-style: italic;
      max-width: 85vw;
    }

    .employee {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      column-gap: 10px;
      margin-bottom: 13px;

      h5 {
        :first-child {
          color: ${props => props.theme.colors.testimonialEmployee};
          font: 700 16px 'Lato', sans-serif;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        :nth-child(2) {
          color: ${props => props.theme.colors.testimonialRole};
          font: 400 14px 'Lato', sans-serif;
        }
      }
    }

    .company {
      color: ${props => props.theme.colors.testimonialRole};
      font: 400 14px 'Lato', sans-serif;
      margin-bottom: 20px;
    }
  }

  .dots {
    display: flex;
    column-gap: 15px;

    .dot {
      background: ${props => props.theme.colors.testimonialRole};
      width: 12px;
      height: 12px;
      border-radius: 50%;
      cursor: pointer;

      :hover {
        background: ${props => props.theme.colors.companyDotActive};
      }
    }
  }

  @media screen and (max-width: 900px) {
    .testimonial-content {
      .testimonial {
        font-size: 18px;
      }

      .employee {
        h5 {
          :first-child {
            font-size: 14px;
          }
        }
      }
    }
  }
`

export default Container
