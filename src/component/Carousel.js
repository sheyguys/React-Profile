import React from 'react';
import Card from '../component/Card'
import Ping from '../assets/pping.jpg'
import AppMan from '../assets/appman.png'
import Sut from '../assets/sut.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
class Carousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'University',
                    subTitle: 'Suranaree University of Technology',
                    imgSrc: Sut,
                    link: 'http://www.sut.ac.th/2012/index.php',
                    selected: false

                },
                {
                    id: 1,
                    title: 'Myself',
                    subTitle: 'Mr. Kasinan Rordthab',
                    imgSrc: Ping,
                    link: 'https://github.com/sheyguys',
                    selected: false

                },
                {
                    id: 2,
                    title: 'Internship',
                    subTitle: 'AppMan Co.,Ltd',
                    imgSrc: AppMan,
                    link: 'https://www.appman.co.th/',
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