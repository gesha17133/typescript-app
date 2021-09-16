import React, { FC, useState } from "react";
import {Form,Select, Button, Input, DatePicker, Row} from "antd";
import { rules } from "../utils/rules";
import { IUser } from "../models/IUser";
import { IEvent } from "../models/IEvent";
import { Moment } from "moment";
import { formatDate } from "../utils/date";
import { useTypedSelector } from "../hooks/useTypedSelector";

interface EventFormProps {
    guests: IUser[],
    submit: ( event: IEvent) => void
}

const EventForm:FC<EventFormProps> = ( props ) => {
    
    const [event, setEvent] = useState<IEvent>({
        
        author: '',
        date: '',
        description: '',
        guest: ''

    } as IEvent );

    const selectDate = ( date: Moment | null ) => {
        if( date ){

            //just to check if required format is returned  
            /* console.log(formatDate(date.toDate())); */
            setEvent({ ...event,date: formatDate(date.toDate())})
        
        }
    }

    const {user} = useTypedSelector( state => state.auth );

    const submitForm = () => {
        props.submit( { ...event, author: user.username } )
    }

    return(
        <Form onFinish={submitForm} >

            <Form.Item label='Description of the event' 
                    name ='username'
                    rules={[rules.required('Please input your name here')]} >
                <Input 
                    onChange={ e => setEvent({...event, description: e.target.value})}
                
                />
            </Form.Item>
            
            <Form.Item>
                <Row justify="end">
                    <DatePicker 
                        onChange={ (date) => selectDate(date) }
                        name="Event Date" />
                </Row>
            </Form.Item>
            <Form.Item>
                <Row justify="end">
                    <Select onChange={ (guest: string) => setEvent({...event, guest}) }>
                        
                        {props.guests.map(guest => 
                            <Select.Option value={guest.username} key={guest.password}>
                                {guest.username}
                            </Select.Option>
                        )}

                    </Select>
                </Row>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Row justify="end">
                        <Button type="primary" htmlType="submit" >
                            Create
                        </Button>
                </Row>
            </Form.Item>

        </Form>
    )
}
export default EventForm;