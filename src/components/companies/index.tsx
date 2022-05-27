import React, { useState } from 'react'
import companiesData from './companiesData'
import Container from './styles'

const Companies = () => {
  const [brand, setBrand] = useState(0)
  const [finalBrand, setFinalBrand] = useState(5)

  const handleBrandClick = () => {
    setBrand(brand + 1)
    setFinalBrand(finalBrand + 1)

    if (finalBrand === companiesData.length) {
      setBrand(0)
      setFinalBrand(5)
    }
  }

  return (
    <Container>
      <div className="companies">
        <div className="companies-content">
          <ul>
            {companiesData.slice(brand, finalBrand).map((item, key) => (
              <li key={key}>
                <img src={item.brand} alt="Marcas" />
              </li>
            ))}
          </ul>
          <button onClick={handleBrandClick}>botão feio</button>
        </div>
      </div>
    </Container>
  )
}

export default Companies
