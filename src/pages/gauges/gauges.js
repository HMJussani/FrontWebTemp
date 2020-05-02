import React from 'react';
import GaugeChart from 'react-gauge-chart'
import { Col, Card } from 'react-bootstrap'


const Gauges = props => {

    const chartStyle = {
        height: 150,


    }

    return (
        <>
            <Col xs={12} lg={4}>
                <Card >
                    <Card.Title style={{ textAlign: 'center' }}>{props.title}</Card.Title>
                    <GaugeChart
                        id="gauge-chart2"
                        style={chartStyle}
                        nrOfLevels={20}
                        percent={props.value}
                        colors={['#5BE12C', '#F5CD19', '#EA4228']}
                        needleColor="#345243"
                        textColor="black"
                        formatTextValue={value => value + "ºC"}
                        hideText
                    />
                    <Card.Text style={{ textAlign: 'center', fontSize: '40px'}}>{props.value*100}ºC</Card.Text>
                </Card>
            </Col>
        </>
    )
}

export default Gauges;