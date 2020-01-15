import React from 'react';
import Card from '../component/Card'
import Jisoo from '../assets/jisoo.jpg'
import Dahee from '../assets/dahee.jpg'
import MinYong from '../assets/parkminyoung.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
class Carousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Dahee',
                    subTitle: 'ssss',
                    imgSrc: Dahee,
                    link: 'https://ffff.com',
                    selected: false

                },
                {
                    id: 1,
                    title: 'Jisoo',
                    subTitle: 'ssss',
                    imgSrc: Jisoo,
                    link: 'https://www.react-spring.io/',
                    selected: false

                },
                {
                    id: 2,
                    title: 'Minyoung',
                    subTitle: 'ssss',
                    imgSrc: MinYong,
                    link: 'https://ffff.com',
                    selected: false

                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        console.log(id)

        let items = [...this.state.items]

        items[id].selected = items[id].selected ? false : true

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false
            }
        })

        this.setState({
            items
        })
    }

    makeItem = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItem(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default Carousel;