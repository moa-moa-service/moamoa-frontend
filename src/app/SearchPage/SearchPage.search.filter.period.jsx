import * as C from "./styled/SearchPage.search.filter.style"
import * as itemS from "./styled/SearchPage.search.filter.period.style"
import { useState } from "react"
import { format, addDays, endOfMonth, endOfWeek, startOfMonth, startOfWeek, isSameMonth, isSameDay, subMonths } from "date-fns" 

function FilterPeriod({openPeriodFilter, chageDDay}) {

    const [selectDay, setSelectDay] = useState('') ;
    const [currentDate, setCurrentDate] = useState(new Date()) ;  // 현재 날짜

    // 이전 달로 이동하는 함수
    const movePrevMonth = () => {
        setCurrentDate(subMonths(currentDate, 1)) ;
    }

    // 다음 달로 이동하는 함수
    const moveNextMonth = () => {
        setCurrentDate(subMonths(currentDate, -1)) ;
    }

    const startDate = startOfMonth(currentDate) ;   // 현재 월의 시작일
    const endDate = endOfMonth(currentDate) ;       // 현재 월의 마지막일

    const startWeek = startOfWeek(startDate) ;      // 현재 월의 첫 주
    const endWeek = endOfWeek(endDate) ;            // 현재 월의 마지막 주

    // 달력에 표시할 날짜 배열 생성
    const rows = [] ;
    let days = [] ;
    let day = startWeek ;

    const selectDayHandle = (e) => {
        setSelectDay(e.target.innerText) ;
    }

    const dayClickHandle = (e) => {
        chageDDay(selectDay-currentDate.getDate()) ;
        openPeriodFilter() ;
    }

    while(day <= endWeek) {
        for(let i=0; i<7; i++) {

            const today = isSameDay(day, currentDate) ? 'today' : null ;
            const select = (selectDay == day.getDate()) ? 'select' : null ;

            days.push(
                <itemS.day key={day}>
                    {(isSameMonth(day, currentDate)) && <itemS.dayText today={today} select={select} onClick={selectDayHandle}>{format(day,'d')}</itemS.dayText>}
                    {today === 'today' && <itemS.todayText>Today</itemS.todayText> } 
                </itemS.day>
            ) ;
            day = addDays(day, 1) ;
        }
        rows.push(
            <itemS.days key={day}>
                {days}
            </itemS.days>
        ) ;
        days = [] ;
    }

    return(
        <>
        <C.FilterContainer>
             <C.FilterContent>
                <C.FilterTitle>
                    <div>모집 기간</div>
                    <div>1일</div>
                </C.FilterTitle>
                <itemS.CalendarContainer>
                    <itemS.CalendarNav>
                        <itemS.btn>
                            <img src="../../../public/SearchPage/angle_left.png" onClick={movePrevMonth}/>
                        </itemS.btn>
                        <itemS.MonthText>{format(currentDate, "yyyy년 M월")}</itemS.MonthText>
                        <itemS.btn>
                            <img src="../../../public/SearchPage/angle_right.png" onClick={moveNextMonth} />
                        </itemS.btn>
                    </itemS.CalendarNav>
                    <itemS.Calendar>
                        <itemS.weeks>
                            <itemS.week>일</itemS.week>
                            <itemS.week>월</itemS.week>
                            <itemS.week>화</itemS.week>
                            <itemS.week>수</itemS.week>
                            <itemS.week>목</itemS.week>
                            <itemS.week>금</itemS.week>
                            <itemS.week>토</itemS.week>
                        </itemS.weeks>
                        {rows}
                    </itemS.Calendar>
                </itemS.CalendarContainer>
                <C.BtnContainer>
                    <C.Btn onClick={openPeriodFilter}>취소</C.Btn>
                    <C.Btn color="navy" onClick={dayClickHandle}>선택 완료</C.Btn>
                </C.BtnContainer>
            </C.FilterContent>
        </C.FilterContainer>
        </>
    )
}

export default FilterPeriod