import { Button, Layout, Modal, Row, Form } from "antd";
import { FC, useEffect, useState } from "react";
import EventCalendar from "../components/EventCalendar";
import EventForm  from "../components/EventForm";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { IEvent } from "../models/IEvent";

const Event:FC = () => {
    
    const [modalVisible, setModalVisible] = useState(false);
    
    const {guests, events} = useTypedSelector( state => state.event );
    const {user} = useTypedSelector( state => state.auth);

    const{fetchGuests, createEvent, fetchEvents} = useActions();

    const addNewEvent = (event: IEvent) => {
        setModalVisible(false);
        createEvent(event);
    }

    useEffect( ()=> {
        fetchGuests()
        fetchEvents(user.username)
    }, [] )



    return(
        <Layout>
            <EventCalendar events={events} />
            <Row justify="center">
                <Button onClick={() => setModalVisible( true )}>AddEvent</Button>
            </Row>
            <Modal
                title='Add Event'
                visible={modalVisible}
                footer={null}
                onCancel={()=> setModalVisible(false)}
            >
            <EventForm 
                guests={guests}
                submit={ event => addNewEvent( event )}
            />
            </Modal>
        </Layout>
    )
}

export default Event;