import React from 'react'
import companiesData from './companiesData'
import Container from './styles'

const Companies = () => {
  // const [brand, setBrand] = useState(0)
  // const [finalBrand, setFinalBrand] = useState(5)

  // const handleBrandClick = () => {
  //   setBrand(brand + 1)
  //   setFinalBrand(finalBrand + 1)

  //   if (finalBrand === companiesData.length) {
  //     setBrand(0)
  //     setFinalBrand(5)
  //   }
  // }

  return (
    <Container>
      <div className="companies">
        <div className="overlay"></div>
        <div className="companies-content">
          <ul className="companies-list">
            {companiesData.map((item, key) => (
              <li className="company" key={key}>
                <img className="brand" src={item.brand} alt="Marcas" />
              </li>
            ))}
          </ul>
        </div>
        <div className="circle-btns">
          <div className="btn"></div>
          <div className="btn"></div>
        </div>
      </div>
    </Container>
  )
}

export default Companies
