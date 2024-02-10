import styled from "styled-components";

export const CalendarContainer = styled.div`
`

export const CalendarNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #DCDCDC;
`

export const btn = styled.div`
    color : #D9D9D9 ;
    width: 35px;
    height: 35px;

    img {
        width: inherit;
        height: inherit;
    }
`

export const MonthText = styled.div`
    color: #2B4760;
    font-weight: 700;
    font-size: 20px;
    margin: 0 5px;
`

export const Calendar = styled.div`
    margin: 15px 40px;
`

export const weeks = styled.ul`
    display: flex;
    margin-bottom: 10px;
`

export const week = styled.li`
    width: calc(100% / 7);
    text-align: center;
`

export const days = styled.ul`
    display: flex;
    flex-wrap: wrap;
`

export const day = styled.li`
    width: calc(100% / 7);
    aspect-ratio: 1/1;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const dayText = styled.div`
    width: 33px;
    height: 33px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;

    background-color: ${(props) => {
        if(props.checkday === 'today') {
            return "#D9D9D9" ;
        } else if (props.checkday === 'selectday') {
            return "#FF424D" ;
        }
    }} ;

    color : ${(props) => {
        if(props.color === 'gray') {
            return "#888888" ;
        } else if (props.checkday === 'selectday') {
            return "#FFFFFF" ;
        } else {
            return "#000000" ;
        }
    }}
`

export const todayText = styled.div`
    font-size: 9px;
    color: #D9D9D9;
    margin-top: 2px;
`